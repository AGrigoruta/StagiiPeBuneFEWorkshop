var Server = require('socket.io');

var sockets = {};

module.exports = function (server) {

    var io = new Server(server);

    io.on('connection', function (socket) {

        console.info('User connected');

        socket.on('register', function (msg) {
            //Inform new user about who is logged in
            socket.emit('online-users', Object.keys(sockets));

            //Add user's socket
            sockets[msg.user] = socket;

            //Inform all users that new user is online
            socket.broadcast.emit('user-online', { user: msg.user });

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

module.exports.deleteSocket = function (user) {
    delete sockets[user];
}