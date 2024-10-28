
export default function MessageDetails({ message }) {

  return (
    <pre>{message?.payload || ''}</pre>
  )
}