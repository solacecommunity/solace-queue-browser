import { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

import { useQueueBrowser } from "../../hooks/solace";

import classes from './styles.module.css';
import { FilterMatchMode } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';

export default function MessageList({ queueDefinition, selectedMessage, onMessageSelect }) {
  const browseModes = [
    { value: 'head', name: 'Queue Head' },
    { value: 'time', name: 'Date / Time' },
    { value: 'tail', name: 'Queue End' }
  ];

  const [browseMode, setBrowseMode] = useState(browseModes[0].value);
  const [dateTime, setDateTime] = useState(null);
  const [startFrom, setStartFrom] = useState(null);

  const browser = useQueueBrowser(queueDefinition, startFrom);

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

  const handleBrowseModeChange = (evt) => {
    setBrowseMode(evt.value);
    switch (evt.value) {
      case 'head':
        setDateTime(null);
        setStartFrom(null);
        break;
      case 'time':
        break;
      case 'tail':
        setDateTime(null);
        setStartFrom({ tail: true });
        break;
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

  const Header = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={handleFilterChange} placeholder="Message Search" />
        </IconField>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div>
        <Button text onClick={handleFirstClick}>First</Button>
        <Button text onClick={handlePrevClick} disabled={!browser.hasPrevPage()}>&lt; Prev</Button>
        <Button text onClick={handleNextClick} disabled={!browser.hasNextPage()}>Next &gt;</Button>
      </div>
    );
  };

  return (
    queueDefinition.queueName ? (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
        <Toolbar className={classes.messageListToolbar}
          start={() => <h3>Queue | {queueDefinition?.queueName}</h3>}
          end={() =>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <label>From:</label>
              <Dropdown value={browseMode} onChange={handleBrowseModeChange} options={browseModes} optionLabel="name" />
              <Calendar showTime value={dateTime} onChange={handleCalendarChange} className="p-inputtext-sm" disabled={browseMode != 'time'} />
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
            header={Header}
            footer={Footer}
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
      <div>Please select a queue.</div>
    )
  );
}