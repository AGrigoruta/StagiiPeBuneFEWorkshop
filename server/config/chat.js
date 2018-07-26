var Server = require('socket.io');

module.exports = function (server) {

    var io = new Server(server);

    io.on('connection', function (socket) {

        console.info('User connected');

        socket.on('register', function (msg) {
            //Inform all users that new user is online
            socket.broadcast.emit('user-online', msg);
        });

        socket.on('message', function (msg) {
            console.info('Sent message from user %s %s.', msg.user.firstName, msg.user.lastName);
            io.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};