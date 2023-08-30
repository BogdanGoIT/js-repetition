const express = require('express');

const app = express();

app.use('*', (req, res) => {
    console.log('Был запрос от браузера');

    res.send("<h1>Ну это мол HTML тебе в ответ</h1>")
})

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущен на порте ${listener.address().port}`)
});