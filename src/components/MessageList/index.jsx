import { useEffect, useState } from 'react';
import { useSolaceQueueContext } from "../../hooks/solace";

import './styles.css';

export default function MessageList() {
  const { queueDefinition, getMessages, messages, activeMessage, setActiveMessage, fromTime, setFromTime } = useSolaceQueueContext();
  const [ fromTimeInput, setFromTimeInput ] = useState('');

  useEffect(() => {
    getMessages();
  }, [queueDefinition, fromTime]);


  const handleFromTimeInputChange = (e) => {
    setFromTimeInput(e.target.value);
  }

  const handleRefreshClick = () => {
    try {
      setFromTime(Math.floor(Date.parse(fromTimeInput) / 1000));
    } catch {
      console.log('Invalid date format');
      setFromTime(null);
    }
  };

  const formatDateTime = (epoch) => new Date(epoch * 1000).toISOString().replace('T', ' ').slice(0,19);

  return (
    queueDefinition.queueName ? (
      <div className="messageList">
        <h4>Queue | {queueDefinition?.queueName}</h4>
        <div>
          <span>From: <input onChange={handleFromTimeInputChange} value={fromTimeInput}></input></span>
          <button onClick={handleRefreshClick}>Refresh</button>
        </div>
        <div className="messageRow messageRowHeader">
          <div>Message ID</div>
          <div>Spooled Time</div>
          <div>Payload Size (B)</div>
        </div>
        <div>
          {
            messages.map(msg => (
              <div className={msg.msgId === activeMessage.msgId ? 'messageRow messageListEntry selected' : 'messageRow messageListEntry'} key={msg.rgmid} onClick={() => setActiveMessage(msg)}>
                <div>{msg.msgId}</div>
                <div>{formatDateTime(msg.spooledTime)}</div>
                <div>{msg.size}</div>
              </div>
              
              // <div className={msg.msgId === activeMessage.msgId ? 'messageListEntry selected' : 'messageListEntry'} key={msg.rgmid} onClick={() => setActiveMessage(msg)}>{msg.msgId}, {formatDateTime(msg.spooledTime)},  {msg.size}</div>
            ))
          }
        </div>
      </div>
    ) : (
      <div>Please select a queue.</div>
    )
  );
}