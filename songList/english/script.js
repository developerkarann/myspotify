let songIndex = 0;
let audioElement = new Audio('music/waalian.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));




// audioElement.play();
let songs = [
    { songName: "Alan Walker-Faded", filePath: "music/no_love.mp3", timeStamp: "03.34", coverPath: "cover/cover.jpg" },
    { songName: "On_My_Way", filePath: "music/at_my_worst_.mp3",timeStamp: "03.36", coverPath: "cover/cover.jpg" },
    { songName: "Let_Me_Down_Slowly_", filePath: "music/elevated.mp3",timeStamp: "02.49", coverPath: "cover/cover.jpg" },
    { songName: "_FAIRYTALE", filePath: "music/failing.mp3",timeStamp: "03.20", coverPath: "cover/cover.jpg" },
    { songName: "MIDDLE_OF_THE_NIGHT_", filePath: "music/waalian.mp3",timeStamp: "03.06", coverPath: "cover/cover.jpg" },
    { songName: "Heat_Waves", filePath: "music/kangana.mp3",timeStamp: "03.59", coverPath: "cover/cover.jpg" },
    { songName: "Night_Changes", filePath: "music/saans.mp3", timeStamp: "04.00", coverPath: "cover/cover.jpg" },
    { songName: "_Despacito_", filePath: "music/saans.mp3", timeStamp: "03.50", coverPath: "cover/cover.jpg" },
    { songName: "into_your_arms", filePath: "music/saans.mp3",timeStamp: "03.11", coverPath: "cover/cover.jpg" },
    { songName: "_Loing_Game", filePath: "music/saans.mp3",timeStamp: "03.03", coverPath: "cover/cover.jpg" },
    { songName: "Believer", filePath: "music/saans.mp3",timeStamp: "03.24", coverPath: "cover/cover.jpg" },
    { songName: "love_nwantiti", filePath: "music/saans.mp3",timeStamp: "04.03", coverPath: "cover/cover.jpg" },
    { songName: "_At_My_Worst", filePath: "music/saans.mp3",timeStamp: "03.04", coverPath: "cover/cover.jpg" },
    { songName: "Otilia - Bilionera", filePath: "music/saans.mp3", timeStamp: "03.05",coverPath: "cover/cover.jpg" },
    { songName: "Coldplay_-_", filePath: "music/saans.mp3",timeStamp: "03.46", coverPath: "cover/cover.jpg" },
    { songName: "Let_Me_x_Main_Dhoondne", filePath: "music/saans.mp3",timeStamp: "02.56", coverPath: "cover/cover.jpg" },
    { songName: "___Falling___", filePath: "music/saans.mp3",timeStamp: "02.29", coverPath: "cover/cover.jpg" },
];



songItem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timeStamp')[0].innerText = songs[i].timeStamp;
});


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = "1";
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = "0";
        masterPlay.classList.add('fa-circle-play');
    }

});

audioElement.addEventListener('timeupdate', () => {
    // updaet progress bar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

   

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `music/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = "1";

    })
});


// Next Button 

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 16) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
            makeAllPlays();
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = "1";
});

// Prievious Button 

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
        makeAllPlays();
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = "1";
});

