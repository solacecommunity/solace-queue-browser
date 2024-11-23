
export default function MessagePayloadView({ message }) {

  return (
    <pre>{message?.payload || ''}</pre>
  )
}