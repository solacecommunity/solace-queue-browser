import { Panel } from 'primereact/panel';

export default function MessageHeaderView({ message }) {

  return (
    <pre>{JSON.stringify({...message.headers, ...message.userProperties}, null, ' ') || ''}</pre>
  )
}