import cors from 'cors';
import express from 'express';

import { router } from './routes';

import 'dotenv/config';
import './shared/services/TranslationsYup';

const server = express();

// Permitindo CORS para todos os domínios
server.use(cors());

server.use(express.json());
server.use(router);

export { server };
