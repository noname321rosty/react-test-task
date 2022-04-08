import React from 'react';

function PhotosGrid({photos}) {
    return (
        <div>
            {   
                photos && photos.map((photo) => (
                    <ul key={photo.id}>
                        <p>{photo.title}</p>
                        <img src={photo.url} alt='no img'/>
                    </ul>
                ))
            }
        </div>
    );
}

export default PhotosGrid;
