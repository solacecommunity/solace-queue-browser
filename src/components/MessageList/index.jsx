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

export default function MessageList({ queueDefinition, selectedMessage, onMessageSelect }) {
  const { getMessages } = useQueueBrowser(queueDefinition);

  const [ dateTime, setDateTime ] = useState(null);
  const [ fromTime, setFromTime ] = useState(null);

  const [ globalFilterValue, setGlobalFilterValue ] = useState('');
  const [ filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });

  const [ isLoading, setIsLoading ] = useState(false);
  const [ messages, setMessages ] = useState([]);

  const loadMessages = async (from) => {
    setIsLoading(true);
    setMessages(await getMessages(from));
    setIsLoading(false);
  };

  useEffect(() => {
    setMessages([]);
    loadMessages({ fromTime });
  }, [queueDefinition, fromTime]);

  const handleRefreshClick = () => {
    try {
      setFromTime(Math.floor(Date.parse(dateTime) / 1000));
    } catch {
      console.error('Invalid date format');
      setFromTime(null);
    }
  };

  const handleFirstClick = () => {
    loadMessages({ firstPage: true });
  };

  const handleNextClick = () => {
    loadMessages({ afterMsg: messages[messages.length - 1].rgmid });
  };

  const handlePrevClick = () => {
    loadMessages({ prevPage: true });
  };

  const handleCalendarChange = (e) => {
    setDateTime(e.value);
  };

  const handleRowSelection = (e) => {
    if(e.value !== null) {
      onMessageSelect?.(e.value);
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log('filters', filters);
    setFilters({ global: { ...filters.global, value}});
    setGlobalFilterValue(value);
};


  const tzOffsetSec = (new Date()).getTimezoneOffset() * 60;
  const formatDateTime = (epoch) => new Date((epoch - tzOffsetSec) * 1000).toISOString().replace('T', ' ').slice(0, 19);
  
  const formatData = (message) => ({ ...message, spooledTime: formatDateTime(message.spooledTime)});

  const Header = () => {
    return (
        <div className="flex justify-content-end">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={handleFilterChange} placeholder="Payload Search" />
            </IconField>
        </div>
    );
  };

  const Footer = () => {
    return (
      <div>
        <Button text onClick={handleFirstClick}>First</Button>
        <Button text onClick={handlePrevClick}>&lt; Prev</Button>
        <Button text onClick={handleNextClick}>Next &gt;</Button>
      </div>
    );
  };

  return (
    queueDefinition.queueName ? (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
        <Toolbar className={classes.messageListToolbar}
          start={() => <h3>Queue | {queueDefinition?.queueName}</h3>}
          end={() => <>
            <label>From: &nbsp;</label>
            <Calendar showTime value={dateTime} onChange={handleCalendarChange} className="p-inputtext-sm" />
            <Button onClick={handleRefreshClick} size="small">Refresh</Button>
          </>}
        />
        <div style={{ flex: '1', overflow: 'hidden'}}>
          <DataTable
            className={classes.messageListTable}
            value={messages.map(formatData)}
            size="small" 
            scrollable
            resizableColumns 
            selectionMode="single"
            selection={selectedMessage}
            dataKey="replicationGroupMsgId"
            onSelectionChange={handleRowSelection}
            globalFilterFields={['payload']}
            filters={filters}
            header={Header}
            footer={Footer}
            loading={isLoading}
            emptyMessage="No messages available"
          >
            <Column field="msgId" header="Message ID" />
            <Column field="spooledTime" header="Spooled Time" />
            <Column field="size" header="Payload Size (B)" />
          </DataTable>
        </div>
      </div>
    ) : (
      <div>Please select a queue.</div>
    )
  );
}