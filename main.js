var messages = document.getElementById('messages');

// Шаг 1:
// Получить сообщение с сервера
async function getMessageFromServer(){
  // Получаем ассинхророваный ответ
  var response = await fetch('https://fchatiavi.herokuapp.com/get/Nickus/?offset0&limit=10');
  // Декодируем это из строки в JS
  response = await response.json();

  var message = '
  <div class="message">
    <div class="message-nickname"> Name </div>
    <div class="message-text"> Message </div>
  </div>
  ';

  messages.innerHTML = message;
}
// Создать верстку меседжа
// Добавить в message-wrapper письма

// Получить что написал пользователь в поле nickname
// Получить что написал пользователь в поле message
// По нажатию на кнопку "Отправить" - отправить на сервер nickname: message и сделать Шаг 1
