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
    const token = '6312853358:AAFcZWa-qo4iHs4tmBZZqfXTgoskBp3DhwU';
    const chatId = '-1001959471654';

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