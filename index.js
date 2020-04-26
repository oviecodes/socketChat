const app = require('express')();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
});

http.listen(3000, () => {
    console.log('app started on =*3000')
})