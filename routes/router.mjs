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

    fs.writeFile(`./files/${createFileName}`, `${day<10 ? '0'+ day : day }/${month<10 ? '0'+ month : month}/${year} - ${content}`)
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

router.get('/update', (req, res) => {
    const { currentName, newName } = req.query;

    fs.rename(`./files/${currentName}`, `./files/${newName}`)
        .then(() => {
            res.send('File updated');
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/delete', (req, res) => {
    const { deleteFileName } = req.query;
    fs.unlink(`./files/${deleteFileName}`)
        .then(() => {
            res.send('File deleted');
        })
        .catch((err) => {
            res.send(err);
        });
});

export default router;