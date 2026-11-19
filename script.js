import { Apinator } from '@apinator/client';

// 画像のアプリキーとクラスターを設定
const client = new Apinator({ 
  appKey: 'app_6833eec80472cce54f689551933e89fb5dfb8cc',
  cluster: 'us'
});

client.connect();

// チャンネルを購読してイベントを待機
client.subscribe('my-channel').bind('my-event', (data) => {
  console.log('受信データ:', data);
});
