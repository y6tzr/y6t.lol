
window.addEventListener('load', function() {
    var audio = document.getElementById('myAudio');
    
    
    audio.play().catch(function(error) {
        console.log('Autoplay was blocked by the browser. Attempting to play manually...');
    });
});
