import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toolbar } from 'primereact/toolbar';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';

import classes from './styles.module.css';
import { useEffect, useState } from 'react';

import { useSolaceConfigContext } from '../../hooks/solace';
        
export default function ConfigServerDialog( { config, onHide }) {
  const visible = (config !== null);
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({
      id: 0,
      displayName: '',
      hostName: '',
      useTls: false,
      vpn: '',
      clientUsername: '',
      clientPassword: '',
      sempUsername: '',
      sempPassword: '',
      ...(config || {})
    });
  }, [config]);

  const { saveBroker, deleteBroker } = useSolaceConfigContext();

  const handleInputChange = (evt) => {
    setValues({ ...values, [evt.target.id] : 
      (evt.target.type === 'checkbox') ? 
        evt.target.checked :
        evt.target.value 
    });
  };

  const handleSave = () => {
    saveBroker(values);
    onHide?.();
  };

  const handleDelete = () => {
    deleteBroker(values);
    onHide?.();
  };

  const handleHide = () => {
    onHide?.();
  }

  const Header = () => (
    (values.id) ? 
    <>Edit Broker</> :
    <>Add New Broker</>
  );

  const Footer = () => (
    <Toolbar
      start={
        (values.id) ?
          <Button severity="danger" onClick={handleDelete}>Delete</Button> :
          null
      } 
      end={
        <Button onClick={handleSave}>Save</Button>
      }
    />
  );
  return (
    <Dialog 
      className={classes.formDialog}
      appendTo={document.querySelector('main')}
      header={Header}
      footer={Footer}
      maskStyle={{ position: 'absolute', borderRadius: 6 }}
      visible={visible}
      onHide={handleHide}
    >
      <form autoComplete="off">
        <FloatLabel className={classes.formField}>
          <InputText id="displayName" className={classes.formInput} value={values.displayName} onChange={handleInputChange} />
          <label htmlFor="displayName">Display Name</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
            <InputText id="hostName" className={classes.formInput} value={values.hostName} onChange={handleInputChange} />
            <label htmlFor="hostName">Hostname</label>
        </FloatLabel>
        <div className={classes.formField}>
          <Checkbox id="useTls" onChange={handleInputChange} checked={values.useTls}/>
          <label htmlFor="useTls" className={classes.checkboxLabel}>Use TLS</label>
        </div>
        <FloatLabel className={classes.formField}>
            <InputText id="vpn" className={classes.formInput} value={values.vpn} onChange={handleInputChange} />
            <label htmlFor="vpn">VPN</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
            <InputText id="clientUsername" className={classes.formInput} value={values.clientUsername} onChange={handleInputChange} />
            <label htmlFor="clientUsername">Client Username</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
            <Password inputId="clientPassword" className={classes.passwordInput} feedback={false} value={values.clientPassword} onChange={handleInputChange} />
            <label htmlFor="clientPassword">Client Password</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
            <InputText id="sempUsername" className={classes.formInput} value={values.sempUsername} onChange={handleInputChange} />
            <label htmlFor="sempUsername">SEMP Username</label>
        </FloatLabel>
        <FloatLabel className={classes.formField}>
            <Password inputId="sempPassword" className={classes.passwordInput} feedback={false} value={values.sempPassword} onChange={handleInputChange} />
            <label htmlFor="sempPassword">SEMP Password</label>
        </FloatLabel> 
      </form>
    </Dialog>
  );
}