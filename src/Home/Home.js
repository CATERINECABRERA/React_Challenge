// Home.js
import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';
import AdministradorVideos from '../AdministradorVideos/AdministradorVideos';

function Home() {
    return (
        <div className='home'>
            <div className='first-section'>
                <div className="first-section__left">
                    <div className='first-section__label'>
                        FRONT END
                    </div>
                    <div className="first-section__information">
                        <span className='first-section__title'>
                            Challenge React
                        </span>
                        <span className='first-section__subtitle'>
                            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                        </span>
                    </div>
                </div>
                <div className="first-section__right">
                    <ReactPlayer className='first-section__video'
                        url="https://www.youtube.com/watch?v=ov7vA5HFe6w"
                        controls={true}
                        width='600px'
                        height='300px' />
                </div>
            </div>

            <div className='administrador-videos'>
                <AdministradorVideos />
            </div>
        </div>
    );
}

export default Home;