document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
function rudolph() {
  document.getElementById('rd').play()
  document.getElementById('w').pause()
  document.getElementById('s').pause()
  document.getElementById('j').pause()
}
function wish() {
    document.getElementById('w').play()
    document.getElementById('rd').pause()
    document.getElementById('s').pause()
    document.getElementById('j').pause()
  }

  function santa(){
    document.getElementById('s').play()
    document.getElementById('w').pause()
    document.getElementById('rd').pause()
    document.getElementById('j').pause() 
  }

  function jingle(){
    document.getElementById('j').play()   
    document.getElementById('w').pause()
  document.getElementById('s').pause()
document.getElementById('rd').pause()                                                                                                                                                                                                                
}

function reload() {
    document.getElementById('w').pause()
    document.getElementById('rd').pause()
    document.getElementById('s').pause()
    document.getElementById('j').pause()
    document.getElementById('w').currentTime = 0
    document.getElementById('rd').currentTime = 0
    document.getElementById('s').currentTime = 0
    document.getElementById('j').currentTime = 0
    
}