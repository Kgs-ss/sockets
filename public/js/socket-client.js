//referencias HTMl
// =~ const lblOffline = document.getElementById('lblOffline'); 
const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');
const btnEnviar = document.querySelector('#btnEnviar');
const txtMensaje = document.querySelector('#txtMensaje');

const socket = io();


socket.on('connect', () => {

    //console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
    
});

socket.on('disconnect', () => {

    //console.log('Desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = { 
        mensaje,
        id: 'xxx',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id);
    });
    //console.log(mensaje);
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log('respuesta del server', payload);
} );