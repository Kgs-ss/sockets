

const socketController = (client) => {
    console.log('Cliente conectado', client.id);
    client.on('disconnect', () =>{
        console.log('cliente desconectado', client.id);
    });
    //socket.disconnect()
    // client.on('event', data => { /* … */ });
    // client.on('disconnect', () => { /* … */ });

    client.on('enviar-mensaje', ( payload, callback ) => {

        const id = '123456789';
        callback( {id, fecha: new Date().getTime() } );
        client.broadcast.emit('enviar-mensaje', payload.mensaje);

    });
}


module.exports = {
    socketController
}