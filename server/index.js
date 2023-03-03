import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

//db
connectDB();


//server
app.listen(PORT);
console.log(`Server on port: ${PORT}`);