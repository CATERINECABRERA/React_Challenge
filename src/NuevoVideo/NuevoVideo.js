import React, { useState, useContext } from 'react';
import { VideoContext } from '../VideosContext/VideosContext';
import './NuevoVideo.css';

function NuevoVideo() {
    const { addVideo } = useContext(VideoContext);
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        image: '',
        video: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para agregar el video
        console.log(formValues);
        addVideo(formValues);
        window.alert('Video añadido a home');
        // Resetea el formulario después del envío si es necesario
        clearForm();
    };

    const clearForm = () => {
        setFormValues({
            title: '',
            category: '',
            image: '',
            video: '',
            description: ''
        });
    }

    return (
        <form className='nuevo-video' onSubmit={handleSubmit}>
            <span className="titulo">
                Nuevo Video
            </span>
            <span className="subtitulo">
                Complete el formulario para crear una nueva tarjeta de video.
            </span>

            <div className="field">
                <label className="field__video-label">Título</label>
                <input
                    className="field__video-input"
                    type='text'
                    name='title'
                    value={formValues.title}
                    onChange={handleChange}
                    placeholder='Ingrese el título'
                    required
                />
            </div>

            <div className="field">
                <label className="field__video-label">Categoría</label>
                <select
                    className="field__video-select"
                    name='category'
                    value={formValues.category}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Selecciona una categoría</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="innovacion">Innovación</option>
                </select>
            </div>

            <div className="field">
                <label className="field__video-label">Imagen</label>
                <input
                    className="field__video-input"
                    type='text'
                    name='image'
                    value={formValues.image}
                    onChange={handleChange}
                    placeholder='Ingrese el enlace de la imagen'
                    required
                />
            </div>

            <div className="field">
                <label className="field__video-label">Video</label>
                <input
                    className="field__video-input"
                    type='text'
                    name='video'
                    value={formValues.video}
                    onChange={handleChange}
                    placeholder='Ingrese el enlace del video'
                    required
                />
            </div>

            <div className="field">
                <label className="field__video-label">Descripción</label>
                <textarea
                    className="field__video-textarea"
                    name='description'
                    value={formValues.description}
                    onChange={handleChange}
                    placeholder='Ingrese la descripción'
                    required
                ></textarea>
            </div>

            <div className='acciones'>
                <button type="submit" className="limpiar-button">Limpiar</button>
                <button type="submit" className="submit-button">Agregar Video</button>
            </div>
        </form>

    );
}

export default NuevoVideo;