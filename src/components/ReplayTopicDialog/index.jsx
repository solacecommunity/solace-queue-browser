import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toolbar } from 'primereact/toolbar';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import { Toast } from 'primereact/toast'

import classes from './styles.module.css';
import { useEffect, useState, useRef } from 'react';
        
export default function ReplayConfigDialog( { config, brokerEditor, onHide }) {
  const { broker, replayTopic } = (config || {});
  const { replayTopics = [] } = (broker || {});

  const visible = !(config === null);
  const isNew = (replayTopic === null);

  const [values, setValues] = useState({});
  const toast = useRef(null);

  useEffect(() => {
    setValues({
      id: Date.now(),
      subscriptionName: '',
      topics: [],
      ...(replayTopic || {})
    });
  }, [config]);

  const handleInputChange = (evt) => {
    setValues({ ...values, [evt.target.id] : 
      (evt.target.type === 'textarea') ? 
        evt.target.value.split('\n') :
        evt.target.value 
    });
  };

  const handleSave = () => {
    values.topics = values.topics.filter(t => t.length > 0);
    if(isNew) {
      replayTopics.push(values);
      broker.replayTopics = replayTopics;
    } else {
      Object.assign(replayTopic, values);
    }

    brokerEditor.save(broker);
    onHide?.();
  };

  const handleDelete = () => {
    broker.replayTopics = replayTopics.filter(rt => rt.id !== values.id);
    brokerEditor.save(broker);
    onHide?.();
  };

  const handleHide = () => {
    onHide?.();
  }

  const Header = () => (
    (!visible) ? null : 
    (!isNew) ? 
      <>Edit Subscriptions</> :
      <>Define Subscriptions</>
  );

  const Footer = () => (
    <Toolbar
      start={
        (visible && !isNew) ?
          <Button severity="danger" onClick={handleDelete}>Delete</Button> :
          null
      } 
      end={
        <>
          <Button onClick={handleSave}>Save</Button>
        </>
      }
    />
  );
  return (
    <Dialog 
      className={classes.formDialog}
      header={Header}
      footer={Footer}
      maskStyle={{ position: 'absolute', borderRadius: 6 }}
      visible={visible}
      onHide={handleHide}
    >
      <Toast ref={toast} />
      <form autoComplete="off">
        <FloatLabel className={classes.formField}>
          <InputText id="subscriptionName" className={classes.formInput} value={values.subscriptionName} onChange={handleInputChange} />
          <label htmlFor="subscriptionName">Display Name</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
          <InputTextarea id="topics" className={classes.formMultiLine} value={values.topics?.join('\n')} onChange={handleInputChange} 
            pt={{ root: { spellCheck: false }}}
          />
          <label htmlFor="topics">Subscriptions</label>
        </FloatLabel>
      </form>
    </Dialog>
  );
}