import axios from 'axios';


export const getPostRequest = async () =>  await axios.get('/posts');

export const createPostRequest = async (posteo) => {
    
    const form = new FormData();

    for(let key in posteo){
        form.append(key, posteo[key])
    }
    
    return await axios.post('/create', form, {
        headers: {
            "Content-Type": "Multipart/form-data"
        }
    });
}

export const deletePostRequest = async id => await axios.delete("/delete/" + id);

export const getOnePostRequest = async id => await axios.get("/post/" + id);

export const updatePostRequest = async (id, newFields) => await axios.put(`/edit/${id}`, newFields);