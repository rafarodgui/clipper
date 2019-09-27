const express = require('express');

const routes = express.Router();

routes.get('/videos', (req, res, next) =>{

    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    return res.json([{
        id: 1,
        url: 'https://www.youtube.com/embed/A7ry4cx6HfY',
        author:'Avenged Sevenfold',
        album: 'Nightmare',
        title: 'So Far Away',
        genre: 'Nu-Metal',
        description: '"So Far Away" by Avenged Sevenfold from their 2010 fifth studio album'
    },{
        id: 2,
        url: 'https://www.youtube.com/embed/oh8zcbC_Dcw', 
        author:'Social Distortion',
        album: 'Somewhere between heaven and Hell',
        title: 'Story of My Life',
        genre: 'Punk',
        description: '"Social Distortion"s official music video for "Story Of My Life"'
    },{
        id: 3,
        url: 'https://www.youtube.com/embed/YIHMPc6ZCuI', 
        author:'Dire Straits',
        album: 'Down The Road Wherever',
        title: 'So Far Away',
        genre: 'Hard Rock',
        description: 'Music video by Dire Straits performing So Far Away. (C) 1985 Universal Music International Ltd.'
    },{
        id: 4,
        url: 'https://www.youtube.com/embed/Soa3gO7tL-c', 
        author:'Green Day',
        album: 'American Idiot',
        title: 'Boulevard Of Broken Dreams',
        genre: 'Punk',
        description: 'Music video by Green Day performing Boulevard Of Broken Dreams. © 2005 WMG'
    },{
        id: 5,
        url: 'https://www.youtube.com/embed/kXYiU_JCYtU', 
        author:'Linkin Park',
        album: 'Meteora',
        title: 'Numb',
        genre: 'Nu-Metal',
        description: 'Music video Linkin Park "Numb" off of the album METEORA. Directed by Joe Hahn.'
    },{
        id: 6,
        url: 'https://www.youtube.com/embed/gEPmA3USJdI', 
        author:'AC/DC',
        album: 'Down The Road Wherever',
        title: 'Highway to Hell (from Live at River Plate)',
        genre: 'Hard Rock',
        description: 'Highway to Hell is the sixth studio album by Australian rock band AC/DC, released on July 27, 1979.'
    },{
        id: 7,
        url: 'https://www.youtube.com/embed/nM__lPTWThU', 
        author:'Judas Priest',
        album: 'Painkiller',
        title: 'Painkiller',
        genre: 'Metal',
        description: '"Judas Priest official music video for "Painkiller".'
    },{
        id: 8,
        url: 'https://www.youtube.com/embed/tAGnKpE4NCI', 
        author:'Metallica',
        album: 'The Black Album',
        title: 'Nothing Else Matters',
        genre: 'Metal',
        description: 'Filmed during the recording of The Black Album in Spring 1991 in North Hollywood, CA'
    }]); 
});

module.exports = routes;