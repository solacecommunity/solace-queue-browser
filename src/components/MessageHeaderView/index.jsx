import classes from './styles.module.css';

export default function MessageHeaderView({ message }) {
  const { meta, headers, userProperties } = message;
  return (
    <pre className={classes.wrapText}>{meta ? JSON.stringify({ meta, headers, userProperties }, null, ' ') : ''}</pre>
  )
}