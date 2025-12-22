import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageUpload(){
    const url = 'http://localhost:3000';
    const [img, setImg] = useState(null);
    const submit = async(event) => {
        event.preventDefault();
        try{
            const token = localStorage.getItem('token');
            if(!token) {throw new Error('no token found')};
            const formData = new FormData();
            formData.append("image", img);

            const response = await axios.post(`${url}/api/Image/upload`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}, withCredentials: true});
            console.log('response -> ', response.data.message);
            event.target.reset();

        }catch(error){
            console.log('error -> ', error.response.data.message);
        }
    }
 
    return(
        <>
            <form onSubmit={submit} className="fieldset">
                <legend className="fieldset-legend">Pick a file</legend>
                <input onChange={(event) => setImg(event.target.files[0])} type="file" accept='image/*' className="file-input" />
                <label className="label">Max size 5MB</label>
                <button className="btn btn-primary w-[100px]">upload</button>
            </form>
        </>
    )
}

export default ImageUpload;