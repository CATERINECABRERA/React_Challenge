import React from 'react';
import './Carrusel.css';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

function Carrusel({ videos }) {
    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="carrusel">
            <Slider {...settings}>
                {videos.map((item, index) => (
                    <div className='spacing' key={index}>
                        <ReactPlayer
                            className='first-section__video'
                            url={item.video}
                            controls={true}
                            width='450px'
                            height='300px'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carrusel;