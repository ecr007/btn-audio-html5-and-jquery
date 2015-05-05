The Audio Media:

Lets use the following code as our HTML5 code for the audio media:


<audio class="audioDemo" controls preload="none"> 
   <source src="audio/pitbull.mp3" type="audio/mpeg">
   <source src="audio/music.ogg" type="audio/ogg">
</audio>
We have kept two media, because of compatibility issue on browsers, so that alternative one being loaded.

Loading The Audio With jQuery:

as you can see on the above HTML5 code, we have set the “preload” option to “none”, which means, no information about the audio file will be loaded on page load, neither the audio file nor any metadata. We will do them by ourselves from jQuery to boost the page load performance. Lets use the following code to load the audio:

$(".audioDemo").trigger('load');
We can also add event listener to know when its loaded. However, the event will be triggered immediate after the metadata loaded and audio starts loading. But it won’t wait till the audio loads in full, which usually loads on demand. To do something after the loading, use the following code before triggering the load event:


$(".audioDemo").bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });
Play/Pause/Stop Audio:

Start playing audio and to pause it is fairly easy to handle, just need to trigger corresponding events as below:


//starts playing
$(".audioDemo").trigger('play');
//pause playing
$(".audioDemo").trigger('pause');
However, there is not ready event to stop an audio, so we will need to do it with help of ‘pause’ event and another property named “currentTime”, which indicates the current playing time. Here is what will do to stop:

function stopAudio(){
  //pause playing
  $(".audioDemo").trigger('pause');
  //set play time to 0
  $(".audioDemo").prop("currentTime",0);
}
Forward/Backward Capability:

Default HTML5 player doesn’t provide these facility, but we can easily make such functionality with a little jQuery code. Here is a small example code to do so:


//forward the music about 5 seconds
$(".audioDemo").prop("currentTime",$(".audioDemo").prop("currentTime")+5);
//backward the music about 5 seconds
$(".audioDemo").prop("currentTime",$(".audioDemo").prop("currentTime")-5);
Volume Up/Down:

Audio player has its own “volume” properly which can be controlled with jQuery as below:

function volumeUp(){
    var volume = $(".audioDemo").prop("volume")+0.2;
    if(volume >1){
        volume = 1;
    }
    $(".audioDemo").prop("volume",volume);
}
 
function volumeDown(){
    var volume = $(".audioDemo").prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    $(".audioDemo").prop("volume",volume);
}
We need to keep checking whether volume reaches its largest or minimum value, otherwise JavaScript exception error will be thrown.

Mute On/Off:

We can instantly make an audio off and turn on to its earlier volume level easily with use of “muted” property. See the example code below, which actually toggle current mute state:


function toggleMuteAudio(){
    $(".audioDemo").prop("muted",!$(".audioDemo").prop("muted"));
}
