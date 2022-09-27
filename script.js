let songIndex = 0;
let audioElement = new Audio('music/waalian.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));




// audioElement.play();
let songs = [
    { songName: "no_love", filePath: "music/no_love.mp3", timeStamp: "02.50", coverPath: "cover/cover.jpg" },
    { songName: "at_my_worst", filePath: "music/at_my_worst_.mp3",timeStamp: "00.05", coverPath: "cover/cover.jpg" },
    { songName: "Elevated - Subh", filePath: "music/elevated.mp3",timeStamp: "03.21", coverPath: "cover/cover.jpg" },
    { songName: "Failing - English Song", filePath: "music/failing.mp3",timeStamp: "02.39", coverPath: "cover/cover.jpg" },
    { songName: "Waalian", filePath: "music/waalian.mp3",timeStamp: "03.23", coverPath: "cover/cover.jpg" },
    { songName: "Kangana Tera Ni", filePath: "music/kangana.mp3",timeStamp: "03.52", coverPath: "cover/cover.jpg" },
    // { songName: "Saans - ", filePath: "music/saans.mp3", coverPath: "cover/cover.jpg" },
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
    if (songIndex >= 5) {
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

