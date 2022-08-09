import {v2 as cloudinary} from "cloudinary";
import { CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_NAME } from "../config.js";


cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: CLOUD_API_KEY, 
    api_secret: CLOUD_API_SECRET,
    secure: true
});

export async function uploadImage(filePath){
    return await cloudinary.uploader.upload(filePath, {
        folder: 'stackMERN'
    });
}

export async function deleteImage(public_id){
    return await cloudinary.uploader.destroy(public_id)
}
