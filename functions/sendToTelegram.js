const https = require('https');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  const params = querystring.parse(event.body);
  
  const name = params['user_name'];
  const phone = params['user_phone'];
  const proj = params['user_project'];
  const info = params['user_info'];
  const token = '5346944790:AAGRQ1lDwryc9z4cX8LTjGjdFmQBTaxjPwY';
  const chatId = '-623964129';
  
  const message = `
    <b>E-mail:</b> ${name}%0A
    <b>Телефон:</b> ${phone}%0A
    <b>Проект:</b> ${proj}%0A
    <b>Доп. информация:</b> ${info}%0A
  `;
  
  const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`,
    method: 'GET'
  };
  
  const req = https.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`Response: ${chunk}`);
    });
  });
  
  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });
  
  req.end();
  
  return {
    statusCode: 200,
    body: 'Message sent to Telegram successfully'
  };
};