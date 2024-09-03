import { useSolaceQueueContext } from "../../hooks/solace";

export default function MessageDetails() {
  const { activeMessage } = useSolaceQueueContext();

  return (
    <pre>{activeMessage?.payload || ''}</pre>
  )
}