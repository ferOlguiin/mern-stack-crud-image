import mongoose from "mongoose";
import { URI_MONGODB } from "./config.js";

export async function connectDB() {
    try {
        mongoose.set('strictQuery',false);
        const db = await mongoose.connect(URI_MONGODB);
        console.log("Conectado a la base de datos: " + db.connection.name + "🔥")
    } catch (error) {
        console.log(error);
    }
}
