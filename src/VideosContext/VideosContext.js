import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([
        {
            title: "Video 1",
            category: "Frontend",
            image: "",
            video: "https://www.youtube.com/watch?v=PztCEdIJITY",
            description: "Descripción para Video 1"
        },
        {
            title: "Video 2",
            category: "Frontend",
            image: "",
            video: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
            description: "Descripción para Video 2"
        },
        {
            title: "Video 3",
            category: "Frontend",
            image: "",
            video: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
            description: "Descripción para Video 3"
        },
        {
            title: "Video 4",
            category: "Frontend",
            image: "",
            video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
            description: "Descripción para Video 4"
        },
        {
            title: "Video 5",
            category: "Frontend",
            image: "",
            video: "https://www.youtube.com/watch?v=-Ou5c3A225k",
            description: "Descripción para Video 5"
        },
        {
            title: "Video 6",
            category: "Backend",
            image: "",
            video: "https://www.youtube.com/watch?v=t-iqt1b2qqk&t=24s",
            description: "Descripción para Video 6"
        },
        {
            title: "Video 7",
            category: "Backend",
            image: "",
            video: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
            description: "Descripción para Video 7"
        },
        {
            title: "Video 8",
            category: "Backend",
            image: "",
            video: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
            description: "Descripción para Video 8"
        },
        {
            title: "Video 9",
            category: "Innovacion",
            image: "",
            video: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
            description: ""
        },
        {
            title: "Video 10",
            category: "Innovacion",
            image: "",
            video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
            description: ""
        },
        {
            title: "Video 11",
            category: "Innovaciosn",
            image: "",
            video: "https://www.youtube.com/watch?v=-Ou5c3A225k",
            description: ""
        },
    ]);

    const addVideo = (newVideo) => {
        setVideos((prevVideos) => [newVideo, ...prevVideos]);
    };

    useEffect(() => {
        console.log('Videos actualizados:', videos);
    }, [videos]);

    const removeVideo = (title) => {
        setVideos((currentVideos) => currentVideos.filter(videos !== title));
    };

    return (
        <VideoContext.Provider value={{ videos, addVideo }}>
            {children}
        </VideoContext.Provider>
    );
};
