console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('songs/i.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songName: "Satnam", filePath: "songs/Satnam.mp3", coverPath:"covers/1.jpg"},
    { songName: "Shukrana", filePath: "songs/Shukrana.mp3", coverPath:"covers/1.jpg"},

    { songName: "Inaam", filePath: "songs/Inaam.mp3", coverPath:"covers/1.jpg"},

    { songName: "Rollin load", filePath: "songs/Rollin Loud.mp3", coverPath:"covers/1.jpg"},

    { songName: "Be mine", filePath: "songs/Be Mine.mp3", coverPath:"covers/1.jpg"},
    { songName: "pistol", filePath: "songs/Pistol.mp3", coverPath:"covers/1.jpg"},


   
]
songItems.forEach((element,i) =>{
   
    // element.getElementsByTagName('img')[i].src=songs[i].coverPath;
    element.getElementsByTagName('img')[0].src=songs[0].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[0].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('play_circle_outline');
        masterPlay.classList.add('pause_circle');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('pause_circle');
        masterPlay.classList.add('play_circle_outline');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');

    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value* audioElement.duration/100;
})
const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classsList.remove('pause_circle');
        element.target.classsList.add('play_circle_outline');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.classList.remove('play_circle_outline');
        e.target.classList.add('pause_circle');
        audioElement.src=`songs/${Index}2.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        e.target.classList.remove('play_circle_outline');
        e.target.classList.add('pause_circle');
    })
})






// let songIndex = 0;
// let audioElement = new Audio('Pistol.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar'); 
// let gif = document.getElementById('gif'); 

 
// let songs=[
//         { songsName: "Satnam", filePath: "songs/Satnam.mp3", coverPath:"covers/1.jpg"},
//         { songsName: "Shukrana", filePath: "songs/Shukrana.mp3", coverPath:"covers/1.jpg"},
    
//         { songsName: "Inaam", filePath: "songs/Inaam.mp3", coverPath:"covers/1.jpg"},
    
//         { songsName: "Rollin load", filePath: "songs/Rollin Loud.mp3", coverPath:"covers/1.jpg"},
    
//          { songsName: "Be mine", filePath: "songs/Be Mine.mp3", coverPath:"covers/1.jpg"},
//          { songsName: "pistol", filePath: "songs/Pistol.mp3", coverPath:"covers/1.jpg"},
    
    
       
//      ]
//      masterPlay.addEventListener('click', ()=>{
//         if(audioElement.paused || audioElement.currentTime<=0){
//             audioElement.play();
//             masterPlay.classList.remove('play_circle_outline');
//             masterPlay.classList.add('pause_circle');
//             gif.style.opacity = 1;
//         }
//         else{
//             audioElement.pause();
//             masterPlay.classList.remove('pause_circle');
//              masterPlay.classList.add('play_circle_outline');
//              gif.style.opacity = 1;
//         }
//      })
//      audioElement.addEventListener('timeupdate', ()=>{
//         console.log('timeupdate');

//         progress= parseInt(audioElement.currentTime/)
//      })



