var audio, playBtn, pauseBtn, myList, dir, ext;

function initAudioPlayer(){
    var defaultSong = "CummyMummy"

    audio = new Audio;
    audio.pause();
    dir = '/assets/music/';
    ext = ".wav"
    audio.src = dir + defaultSong + ext;

    context = new AudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
	canvas = document.getElementsByClassName('analyzer')[0];
	ctx = canvas.getContext('2d');
    
    source = context.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper()

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
    function frameLooper(){
        window.requestAnimationFrame(frameLooper);
        fbc_array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(fbc_array);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = 'red'; // Color of the bars
        bars = 100;
        for (var i = 0; i < bars; i++) {
            bar_x = i * 3;
            bar_width = 2;
            bar_height = -(fbc_array[i] / 2);
            //  fillRect( x, y, width, height ) // Explanation of the parameters below
            ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
	
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
