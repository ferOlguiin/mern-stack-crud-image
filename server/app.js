import express from "express";
import router from "./routes/posts.routes.js";
import cors from 'cors';


const app = express();

//middleware
app.use(express.json({limit: '25mb'}));
app.use(cors({origin: true}));


//routes
app.use(router);



export default app;