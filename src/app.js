// Configuração de servidor express

import express from 'express';
import routes from './route';

import './database';

class App {
    constructor() {
        this.server = express();

        this.middleswares();
        this.routes();
    }

    middleswares() {
        // preparar a aplicação para receber json
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
