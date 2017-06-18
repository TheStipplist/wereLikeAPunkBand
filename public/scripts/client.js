var audio, playBtn, pauseBtn, myList, dir, ext;

function initAudioPlayer(){
    var defaultSong = "CummyMummy"

    audio = new Audio;
    audio.pause();
    dir = '/assets/music/';
    ext = ".wav"
    audio.src = dir + defaultSong + ext;

    function playPause(){

        if(audio.paused){
            audio.play();
            $('.musicBtn').attr('src', '/assets/images/musicPage/pause.png');
        }
        else{
            audio.pause();
            $('.musicBtn').attr('src', '/assets/images/musicPage/play.png');
        }
    }

    function changeTrack(){
		audio.src = dir + $(this).attr('value') + ext;
        console.log($(this).attr('value'));
	    audio.play();
      $('.musicBtn').attr('src', '/assets/images/musicPage/pause.png');
	}

    $('.musicBtn').on('click', playPause);
    $('li').on('click', changeTrack);

}

$("#burger-box").on('click',function(){
  console.log("clicku");
  $(".dropdown-content").toggle();
  $(".dropdown-content").attr('display','none').setTimeout(5000);

})

$('li').on('click',function(){
    console.log($(this).attr('value'), $(this).html());
    $('.selection').html($(this).html());
})
$(window).on('load', initAudioPlayer);
