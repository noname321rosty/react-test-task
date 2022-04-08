import { useState } from 'react'
import PhotosGrid from '../components/PhotosGrid';
import axios from 'axios';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [input, setInput] = useState(0)

    const _url = `https://jsonplaceholder.typicode.com/photos?albumId=${input}`

    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    
    const onPhotos = () => {
        axios.get(_url).then(res => setPhotos(res.data));
    }

    return (
        <div>
            <h2>Photos</h2>
            <input 
             type='number' 
             min={1} 
             max={100} 
             placeholder="1-100" 
             onChange={onInputChange}
            />
            {/* disabled={photos[0].albumId === +input} */}
            <button onClick={() => onPhotos()} >get photos</button>
            <PhotosGrid photos={photos}/>
        </div>
    );
}

export default Photos;
