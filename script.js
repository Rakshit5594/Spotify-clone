// console.log("WELCOME TO SPOTIFY");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songs = [
  { songName: 'Wariyo - mortals(NCS release) ', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
  { songName: 'cielo - Huma Huma', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
  { songName: 'Invinsible (NCS release) ', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
  { songName: 'My heart(NCS release) ', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
  { songName: 'Ncs release song 5', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
  { songName: 'Ncs release song 6', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
  { songName: 'Ncs release song 7', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
  { songName: 'Ncs release song 8', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
  { songName: 'Ncs release song 9', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
  { songName: 'Ncs release song 10', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' }
]

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else {
    gif.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
  }
})
audioElement.addEventListener('timeupdate', () => {
  // console.log('timeUpdate');
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
  audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})
const makealPlays = () => {
  Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');


  })
}
const play1 = () => {
  let a = document.getElementById('0')
  a.addEventListener('click', (e) => {
    makealPlays();
    // index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/1.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
}
const play2 = () => {
  let b = document.getElementById('1')
  b.addEventListener('click', (e) => {
    makealPlays();
    // index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/2.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
}
const play3 = () => {
  let c = document.getElementById('2')
  c.addEventListener('click', (e) => {
    makealPlays();
    // index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/3.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
}
const play4 = () => {
  let d = document.getElementById('3')
  d.addEventListener('click', (e) => {
    makealPlays();
    // index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/4.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
}
const play5 = () => {
  let e = document.getElementById('4')
  e.addEventListener('click', (e) => {
    makealPlays();
    // index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/5.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
}
// const play6 = () => {
//   let f = document.getElementById('5')
//   f.addEventListener('click', (e) => {
//     makealPlays();
//     // index = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = 'songs/6.mp3';
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   })
// }
// const play7 = () => {
//   let g = document.getElementById('6')
//   g.addEventListener('click', (e) => {
//     makealPlays();
//     // index = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = 'songs/7.mp3';
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   })
// }
// const play8 = () => {
//   let i = document.getElementById('7')
//   i.addEventListener('click', (e) => {
//     makealPlays();
//     // index = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = 'songs/8.mp3';
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   })
// }
// const play9 = () => {
//   let j = document.getElementById('8')
//   j.addEventListener('click', (e) => {
//     makealPlays();
//     // index = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = 'songs/9.mp3';
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   })
// }
// const play10 = () => {
//   let k = document.getElementById('9')
//   k.addEventListener('click', (e) => {
//     makealPlays();
//     // index = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = 'songs/10.mp3';
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   })
// }


play1();
play2();
play3();
play4();
play5();
// play6();
// play7();
// play8();
// play9();
// play10();
