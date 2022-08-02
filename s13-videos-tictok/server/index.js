const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const items = [
    {id: '1', title: 'Video 1', path: 'vid-01.mp4'},
    {id: '2',title: 'Video 2', path: 'vid-02.mp4'},
    {id: '3',title: 'Video 3', path: 'vid-03.mp4'},
    {id: '4', title: 'Video 4', path: 'vid-04.mp4' },
    {id: '5',title: 'Video 5', path: 'vid-05.mp4'},
    {id: '6',title: 'Video 6',path: 'vid-06.mp4'},
    {id: '7', title: 'Video 7', path: 'vid-07.mp4'},
    {id: '8',title: 'Video 8', path: 'vid-08.mp4'},
    {id: '9',title: 'Video 9', path: 'vid-09.mp4'},
    {id: '10', title: 'Video 10', path: 'vid-10.mp4' },
    {id: '11',title: 'Video 11', path: 'vid-11.mp4'},
    {id: '12',title: 'Video 12',path: 'vid-12.mp4'},
];

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    res.send("Hola");
});

let range = 5;
let index = 0;

app.get("/page/:page", (req, res) => {
    const start = req.params.page ?? index;
    const portion = items.slice(start * range, start* range + range);
    res.json(portion);
});

app.listen(4000, () => {
    console.log("Servidor Iniciado...");
})