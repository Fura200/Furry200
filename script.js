import { Apinator } from '@apinator/client';

const client = new Apinator({ appKey: 'app_6833eec80472cce54f689551933e89fb5defb8cc', cluster: 'us' });
client.connect();

client.subscribe('my-channel').bind('my-event', (data) => {
  console.log('Received:', data);
});
