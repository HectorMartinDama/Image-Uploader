import toast from 'svelte-french-toast'; 
export const SERVER= 'https://image-uploader-backend-k1hs.onrender.com';

export async function upload(files){
    const formData= new FormData();
    formData.append('image', files[0], files[0].name);
    try{
        const response= await fetch(SERVER, {
            method: 'POST',
            body: formData,
        });
        if(!response.ok) throw new Error('Failed to upload image');
        return await response.json();
    }catch(err) { console.log(err) }
}

export async function fetchBlob(imageName){
    try{
        const response= await fetch(`${SERVER}/image/${imageName}`);
        if(!response.ok) throw new Error('Failed to get image');
        return response.blob();
    }catch(err){ console.log(err) }
}

export async function downloadImage(imageName){
    const image= await fetchBlob(`${imageName}`);
    return URL.createObjectURL(image);
}


export function copyText(imageName){
    navigator.clipboard.writeText(`${SERVER}/image/${imageName}`)
        .then(() =>{ toast.success('Copied', { position: 'bottom-center' })})
        .catch(() => { toast.error('Failed to copied', { position: 'bottom-center' })});    
}
