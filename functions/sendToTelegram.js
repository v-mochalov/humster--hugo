const https = require('https');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  try {
    // Получаем данные из тела запроса
    const params = querystring.parse(event.body);
    const name = params['user_name'];
    const phone = params['user_phone'];
    const proj = params['user_project'];
    const info = params['user_info'];
    const token = '5346944790:AAGRQ1lDwryc9z4cX8LTjGjdFmQBTaxjPwY';
    const chatId = '-623964129';

    // Формируем сообщение
    const message = `
      <b>E-mail:</b> ${name}%0A
      <b>Телефон:</b> ${phone}%0A
      <b>Проект:</b> ${proj}%0A
      <b>Доп. информация:</b> ${info}%0A
    `;

    // Экранируем значение переменной message
    const encodedMessage = encodeURIComponent(message);

    // Настройки для запроса к Telegram API
    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${encodedMessage}`,
      method: 'GET'
    };

    // Отправляем запрос к Telegram API
    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });

    req.on('error', (error) => {
      console.error(error);
    });

    req.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Сообщение успешно отправлено' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Произошла ошибка при отправке сообщения' })
    };
  }
};