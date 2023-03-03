import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

export const getPostRequest = async () =>  await axios.get(`${url}/posts`);

export const createPostRequest = async (posteo) => {
    
    const form = new FormData();

    for(let key in posteo){
        form.append(key, posteo[key])
    }
    
    return await axios.post(`${url}/create`, form, {
        headers: {
            "Content-Type": "Multipart/form-data"
        }
    });
}

export const deletePostRequest = async id => await axios.delete(`${url}/delete/${id}`);

export const getOnePostRequest = async id => await axios.get(`${url}/post/${id}`);

export const updatePostRequest = async (id, newFields) => await axios.put(`${url}/edit/${id}`, newFields);