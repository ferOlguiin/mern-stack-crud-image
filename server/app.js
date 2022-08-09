import express from "express";
import router from "./routes/posts.routes.js";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json({limit: '25mb'}));
app.use(express.static(join(__dirname, '../client/build')));

//routes
app.use(router);
app.get("*", (req, res) => {
    res.sendFile(join(__dirname, '../client/build/index.html'))
})



export default app;