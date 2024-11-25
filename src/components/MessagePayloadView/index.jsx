import classes from './styles.module.css';

export default function MessagePayloadView({ message }) {

  return (
    <pre className={classes.wrapText}>{message?.payload || ''}</pre>
  )
}