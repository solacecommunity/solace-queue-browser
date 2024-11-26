import classes from './styles.module.css';

export default function MessagePayloadView({ message }) {
  const messageUndefined = message === undefined;
  const payloadUndefined = message?.payload === undefined;

  return (
    messageUndefined ? 'Please select a message.' :
      payloadUndefined ? 'Payload unavailable.' :
        <pre className={classes.wrapText}>{message?.payload || ''}</pre>
  )
}