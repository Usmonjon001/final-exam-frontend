var videoPlayer = document.querySelector('#video-player');
var videoPlayBtn = document.querySelector('#video-play');
var videoPouseBtn = document.querySelector('#video-pouse');
var videoPeremotka = document.querySelector('#video-peremotka');
var videoVolume = document.querySelector('#video-sound');

window.addEventListener('load', function(){
    videoPeremotka.value = 0;
});

videoPlayBtn.addEventListener('click', function(e){
    e.preventDefault();
    videoPlayer.play();

    console.log(videoPlayer.duration);
    videoPlayer.volume = 100;
});

videoPouseBtn.addEventListener('click', function(e){
    e.preventDefault();

    videoPlayer.pause();
});

videoPlayer.addEventListener('play', function(){
    console.log('Play chiqdi');
    document.querySelector('.video-full-time').textContent = videoPlayer.duration;

    setInterval(function(){
        document.querySelector('.video-current-time').textContent = videoPlayer.currentTime;
        videoPeremotka.value = (videoPlayer.currentTime*100)/videoPlayer.duration;
    }, 1);
});

videoPeremotka.addEventListener('change', function(){
    videoPlayer.currentTime = (videoPeremotka.value*videoPlayer.duration)/100;
});

// videoSound.addEventListener('volumechange', function(){
// });

videoPlayer.addEventListener('pause', function(){
    console.log('Pause chiqdi');
});

videoPlayer.addEventListener('ended', function(){
    console.log('Tugadi:)')
});


videoVolume.addEventListener('change',function(){
    videoPlayer.volume = videoVolume.value;
});