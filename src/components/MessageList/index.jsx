import { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { FilterMatchMode } from 'primereact/api';

import { useQueueBrowser } from "../../hooks/solace";

import classes from './styles.module.css';

export default function MessageList({ sourceDefinition, selectedMessage, onMessageSelect }) {
  const { sourceName, type } = sourceDefinition;
  const sourceType = (type === 'queue') ? 'Queue' : 'Replay';

  const browseModes = sourceType === 'Queue' ? [
    { value: 'head', name: 'Queue Head' },
    { value: 'time', name: 'Date / Time' },
    { value: 'tail', name: 'Queue End' }
  ] : [
    { value: 'time', name: 'Date / Time' },
  ];

  const [browseMode, setBrowseMode] = useState(browseModes[0].value);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarMinMax, setCalendarMinMax] = useState({});
  const [dateTime, setDateTime] = useState(null);
  const [startFrom, setStartFrom] = useState(null);

  const browser = useQueueBrowser(sourceDefinition, startFrom);

  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const loadMessages = async (loader) => {
    setIsLoading(true);
    setMessages(await loader());
    setIsLoading(false);
  };

  useEffect(() => {
    setMessages([]);
    loadMessages(() => browser.getFirstPage());
  }, [browser]);

  useEffect(() => {
    setBrowseMode(browseModes[0].value);
  }, [sourceType]);

  const handleBrowseModeChange = (evt) => {
    setBrowseMode(evt.value);
    switch (evt.value) {
      case 'head':
        setDateTime(null);
        setStartFrom({ head: true });
        break;
      case 'time':
        setStartFrom({ fromTime: null });
        break;
      case 'tail':
        setDateTime(null);
        setStartFrom({ tail: true });
        break;
    }
  };
  const handleCalendarVisibleChangle = async () => {
    if (calendarVisible) {
      setCalendarVisible(false);
    } else {
      const { min, max } = await browser?.getMinMaxFromTime();
      setCalendarMinMax({
        min: new Date(min * 1000),
        max: new Date(max * 1000)
      });
      setCalendarVisible(true);
    }
  };
  const handleRefreshClick = () => {
    try {
      setStartFrom(dateTime ? { fromTime: Math.floor(Date.parse(dateTime) / 1000) } : null);
    } catch {
      console.error('Invalid date format');
      setStartFrom(null);
    }
  };

  const handleFirstClick = () => {
    loadMessages(() => browser.getFirstPage());
  };

  const handleNextClick = () => {
    loadMessages(() => browser.getNextPage());
  };

  const handlePrevClick = () => {
    loadMessages(() => browser.getPrevPage());
  };

  const handleCalendarChange = (e) => {
    setDateTime(e.value);
  };

  const handleRowSelection = (e) => {
    if (e.value !== null) {
      onMessageSelect?.(e.value);
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilters({ global: { ...filters.global, value } });
    setGlobalFilterValue(value);
  };

  const messageStatus = (message) => {
    return message.payload !== undefined ? null : (
      <i className="pi pi-question-circle text-yellow-500"></i>
    );
  }

  const formatDateTime = (message) => {
    const spooledEpoc = message.meta.spooledTime * 1000;
    const tzOffset = new Date(spooledEpoc).getTimezoneOffset() * 60000;
    return new Date(spooledEpoc - tzOffset).toISOString().replace('T', ' ').slice(0, 19);
  }


  const addFilterField = (message) => ({
    ...message, filterField: [
      message.payload,
      ...Object.values(message.meta || {}),
      ...Object.values(message.headers || {}),
      ...Object.values(message.userProperties || {})
    ]
  });

  const ListHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={handleFilterChange} placeholder="Message Search" />
        </IconField>
      </div>
    );
  };

  const ListFooter = () => {
    return (
      <div>
        <Button text onClick={handleFirstClick}>First</Button>
        <Button text onClick={handlePrevClick} disabled={!browser.hasPrevPage()}>&lt; Prev</Button>
        <Button text onClick={handleNextClick} disabled={!browser.hasNextPage()}>Next &gt;</Button>
      </div>
    );
  };

  return (
    (sourceName) ? (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
        <Toolbar className={classes.messageListToolbar}
          start={() => <h3>{sourceType} | {sourceName}</h3>}
          end={() =>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <label>From:</label>
              <Dropdown value={browseMode} onChange={handleBrowseModeChange} options={browseModes} optionLabel="name" />
              <Calendar showTime visible={calendarVisible} onVisibleChange={handleCalendarVisibleChangle} value={dateTime} onChange={handleCalendarChange} minDate={calendarMinMax.min} maxDate={calendarMinMax.max} disabled={browseMode != 'time'} />
              <Button onClick={handleRefreshClick} size="small" disabled={browseMode != 'time'}>Refresh</Button>
            </div>}
        />
        <div style={{ flex: '1', overflow: 'hidden' }}>
          <DataTable
            className={classes.messageListTable}
            value={messages.map(addFilterField)}
            size="small"
            scrollable
            resizableColumns
            selectionMode="single"
            selection={selectedMessage}
            dataKey="meta.replicationGroupMsgId"
            onSelectionChange={handleRowSelection}
            globalFilterFields={['filterField']}
            filters={filters}
            header={ListHeader}
            footer={ListFooter}
            loading={isLoading}
            emptyMessage="No messages available"
          >
            <Column body={messageStatus} />
            <Column field="meta.msgId" header="Message ID" />
            <Column body={formatDateTime} header="Spooled Time" />
            <Column field="meta.attachmentSize" header="Attachment Size (B)" />
          </DataTable>
        </div>
      </div>
    ) : (
      <div style={{ margin: '1em' }}>Please select a queue or topic to browse.</div>
    )
  );
}