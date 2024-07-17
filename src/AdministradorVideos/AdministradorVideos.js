import React, { useContext, useEffect } from 'react';
import './AdministradorVideos.css';
import Carrusel from '../Carrusel/Carrusel';
import { VideoContext } from '../VideosContext/VideosContext';

function AdministradorVideos() {
    const { videos } = useContext(VideoContext);

    useEffect(() => {
        console.log('La lista de videos ha cambiado:', videos);
    }, [videos]);

    return (
        <div className='administrador'>
            <div className='administrador-videos__label administrador-videos__label--frontend'>
                FRONT END
            </div>
            <Carrusel videos={videos.filter(video => video.category === "Frontend")} />
            <div className='administrador-videos__label administrador-videos__label--backend'>
                BACK END
            </div>
            <Carrusel videos={videos.filter(video => video.category === "Backend")} />
            <div className='administrador-videos__label administrador-videos__label--innovacion'>
                INNOVACIÓN Y GESTIÓN
            </div>
            <Carrusel videos={videos.filter(video => video.category === "Innovacion")} />
        </div>
    );
}

export default AdministradorVideos;