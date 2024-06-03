class Usuario {
    constructor(nombre, username, password, email) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    toString() {
        return `Usuario: ${this.nombre} (${this.username}), Email: ${this.email}`;
    }
}

module.exports = Usuario;
