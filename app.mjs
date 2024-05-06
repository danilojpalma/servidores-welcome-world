import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/router.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use('/', router);

// Read the routes directory




app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});