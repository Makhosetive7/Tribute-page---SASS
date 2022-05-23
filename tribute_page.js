const musicplayer = document.getElementById("musicplayer");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


const audio = document.getElementById("audio");

const songs = ["Track_1", "Track_2", "Track_3", "Track_4", "Track_5", "Track_6"];

let songindex = 5;

loadsong = (songs[songindex]);

function loadSong(song) {
    audio.src = `music/${song}.mp3`;
  }

  function playSong() {
    musicplayer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }
  function pauseSong() {
    musicplayer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

  function prevSong() {
    songindex--;
  
    if (songindex < 0) {
        songindex = songs.length - 1;
    }
  
    loadSong(songs[songindex]);
  
    playSong();
  }
  
  function nextSong() {
    songindex++;
  
    if (songindex > songs.length - 1) {
        songindex = 0;
    }
  
    loadSong(songs[songindex]);
  
    playSong();
  }

  playBtn.addEventListener('click', () => {
    const isPlaying = musicplayer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  

  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  
  audio.addEventListener('ended', nextSong);
  