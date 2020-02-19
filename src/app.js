// Configuração de servidor express

import express from 'express';
import path from 'path';
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
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
        );
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
