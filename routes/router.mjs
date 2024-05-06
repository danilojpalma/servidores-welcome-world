import express from 'express';
import fs from 'fs/promises';
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile('/views/index.html', { root: '.' });
});

router.get('/create', (req, res) => {
    const { createFileName, content} = req.query;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    fs.writeFile(`./files/${createFileName}`, `${day<10 ? '0'+day : day }/${month<10 ? '0'+month : month}/${year} - ${content}`)
        .then(() => {
            res.send('File created');
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/read', (req, res) => {
    const { nameReadFile } = req.query

    fs.readFile(`./files/${nameReadFile}`, 'utf-8')
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

export default router;