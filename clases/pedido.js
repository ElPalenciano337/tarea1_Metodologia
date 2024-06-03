let idCounter = 0;

class Pedido {
    constructor(nombre, tipo, descripcion, fechaEntrega, fechaRecoleccion, cantidadArticulos, costo) {
        this.id = ++idCounter;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.fechaEntrega = fechaEntrega;
        this.fechaRecoleccion = fechaRecoleccion;
        this.cantidadArticulos = cantidadArticulos;
        this.costo = costo;
    }

    update({ nombre, tipo, descripcion, fechaEntrega, fechaRecoleccion, cantidadArticulos, costo }) {
        this.nombre = nombre || this.nombre;
        this.tipo = tipo || this.tipo;
        this.descripcion = descripcion || this.descripcion;
        this.fechaEntrega = fechaEntrega || this.fechaEntrega;
        this.fechaRecoleccion = fechaRecoleccion || this.fechaRecoleccion;
        this.cantidadArticulos = cantidadArticulos || this.cantidadArticulos;
        this.costo = costo || this.costo;
    }

    toString() {
        return `Pedido [ID: ${this.id}] - ${this.nombre}, Tipo: ${this.tipo}, Descripción: ${this.descripcion}, Fecha de entrega: ${this.fechaEntrega}, Fecha de recolección: ${this.fechaRecoleccion}, Cantidad de artículos: ${this.cantidadArticulos}, Costo: ${this.costo}`;
    }
}

module.exports = Pedido;
