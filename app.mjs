import express from 'express';
import router from './routes/router.mjs';


const app = express();
const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});