const readlineSync = require('readline-sync');
const Usuario = require('./clases/usuario');
const Pedido = require('./clases/pedido');

const usuarios = [];
const pedidos = [];
let usuarioAutenticado = null;

function registrarUsuario() {
    const nombre = readlineSync.question('Nombre: ');
    const username = readlineSync.question('Username: ');
    const password = readlineSync.question('Password: ', { hideEchoBack: true });
    const email = readlineSync.question('Email: ');

    const usuario = new Usuario(nombre, username, password, email);
    usuarios.push(usuario);
    console.log('Usuario registrado exitosamente.');
}

function iniciarSesion() {
    const username = readlineSync.question('Username: ');
    const password = readlineSync.question('Password: ', { hideEchoBack: true });

    const usuario = usuarios.find(u => u.username === username && u.password === password);
    if (usuario) {
        usuarioAutenticado = usuario;
        console.log('Inicio de sesión exitoso.');
    } else {
        console.log('Credenciales incorrectas.');
    }
}

function cerrarSesion() {
    usuarioAutenticado = null;
    console.log('Sesión cerrada.');
}

function agregarPedido() {
    const nombre = readlineSync.question('Nombre de quien envía el pedido: ');
    const tipo = readlineSync.question('Tipo de pedido: ');
    const descripcion = readlineSync.question('Descripción: ');
    const fechaEntrega = readlineSync.question('Fecha de entrega: ');
    const fechaRecoleccion = readlineSync.question('Fecha de recolección: ');
    const cantidadArticulos = readlineSync.questionInt('Cantidad de artículos: ');
    const costo = readlineSync.questionFloat('Costo: ');

    const pedido = new Pedido(nombre, tipo, descripcion, fechaEntrega, fechaRecoleccion, cantidadArticulos, costo);
    pedidos.push(pedido);
    console.log('Pedido agregado exitosamente.');
}

function editarPedido() {
    const id = readlineSync.questionInt('ID del pedido a editar: ');

    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        const nombre = readlineSync.question('Nombre de quien envía el pedido: ');
        const tipo = readlineSync.question('Tipo de pedido: ');
        const descripcion = readlineSync.question('Descripción: ');
        const fechaEntrega = readlineSync.question('Fecha de entrega: ');
        const fechaRecoleccion = readlineSync.question('Fecha de recolección: ');
        const cantidadArticulos = readlineSync.questionInt('Cantidad de artículos: ');
        const costo = readlineSync.questionFloat('Costo: ');

        pedido.update({ nombre, tipo, descripcion, fechaEntrega, fechaRecoleccion, cantidadArticulos, costo });
        console.log('Pedido editado exitosamente.');
    } else {
        console.log('Pedido no encontrado.');
    }
}

function listarPedidos() {
    if (pedidos.length === 0) {
        console.log('No hay pedidos.');
    } else {
        pedidos.forEach(pedido => console.log(pedido.toString()));
    }
}

function eliminarPedido() {
    const id = readlineSync.questionInt('ID del pedido a eliminar: ');

    const index = pedidos.findIndex(p => p.id === id);
    if (index !== -1) {
        pedidos.splice(index, 1);
        console.log('Pedido eliminado exitosamente.');
    } else {
        console.log('Pedido no encontrado.');
    }
}

function main() {
    while (true) {
        if (!usuarioAutenticado) {
            console.log('1. Registrarse');
            console.log('2. Iniciar sesión');
            console.log('3. Salir');
            const opcion = readlineSync.questionInt('Seleccione una opción: ');

            if (opcion === 1) {
                registrarUsuario();
            } else if (opcion === 2) {
                iniciarSesion();
            } else if (opcion === 3) {
                break;
            } else {
                console.log('Opción no válida.');
            }
        } else {
            console.log('1. Agregar pedido');
            console.log('2. Editar pedido');
            console.log('3. Listar pedidos');
            console.log('4. Eliminar pedido');
            console.log('5. Cerrar sesión');
            const opcion = readlineSync.questionInt('Seleccione una opción: ');

            if (opcion === 1) {
                agregarPedido();
            } else if (opcion === 2) {
                editarPedido();
            } else if (opcion === 3) {
                listarPedidos();
            } else if (opcion === 4) {
                eliminarPedido();
            } else if (opcion === 5) {
                cerrarSesion();
            } else {
                console.log('Opción no válida.');
            }
        }
    }
}

main();
