
let satellite = document.getElementById("satellite");
let background = document.getElementById("background");
let astronaut = document.getElementById("astronaut");
let deathstar = document.getElementById("deathstar");
let title = document.getElementById("title");
let Accordian = document.getElementById("accordian");
let myimage = document.getElementById("my-image");
let quote = document.getElementById("quote");
let parallax = document.getElementById("parallax");
var projects = document.getElementById("Projects");

// Headings Animation
var heading = document.getElementById("main-title");

//Parallax Height- Responsive Fix    
parallax.style.height = background.clientHeight +'px';
window.addEventListener("resize", function(){
    parallax.style.height = background.clientHeight +'px';
    heading.style.top = background.clientHeight *0.5 +'px';
    heading.style.left = background.clientWidth *0.55 +'px';

})
heading.style.top = parallax.clientHeight *0.5 +'px';
heading.style.left = parallax.clientWidth *0.55 +'px';
//  ------------------------------------- ANIMATE THE HEADINGS ------------------------------------------------------------------------
const headingarr = document.querySelectorAll(".Headings");
const animations = ['bounce','wobble','shakeX','shakeY','heartBeat','tada'];
let empty = [];
const observertwo = new IntersectionObserver( function 
    (enteries, observertwo){
        enteries.forEach(e=>{
            if(e.isIntersecting){
                //e.style.visibility="visible";
                children.forEach( aplha=>{
                    animateCSS(aplha,'fadeInUpBig');
                    setTimeout(observertwo,1000);
                })
            }
        })
    })


    headingarr.forEach( line =>{
        observertwo.observe(line);
        var children = line.childNodes;
        // line.style.visibility = "hidden";
    })
//  ------------------------------------- Animate Promise ------------------------------------------------------------------------
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
//  ------------------------------------- Intersection Observer: ABOUT ME------------------------------------------------------------------------
const section1 = document.querySelector("section#about-me");
const observer = new IntersectionObserver( function
    (enteries, observer){
        enteries.forEach( e =>{
            if(e.isIntersecting){
                animateCSS(Accordian,'fadeInLeftBig');
                animateCSS(myimage,'fadeInRightBig');
                quote.style.setProperty('--animatiion-duration','1s');
                animateCSS(quote,'fadeInUpBig');
            }
            // console.log("im getting fired,"+e.isIntersecting);
        });
    });
observer.observe(section1);


//  ------------------------------------- PARALLAX FIX & Animation too About ME------------------------------------------------------------------------
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    var astronautposition = astronaut.getBoundingClientRect();
    if(astronautposition.top >=0){
        astronaut.style.top = value* 0.25 + 'px';
    }
    
    var deathstarposition = deathstar.getBoundingClientRect();
    if(deathstarposition.top >= -150){
        deathstar.style.left = value * 0.3 + 'px';
        deathstar.style.top = value * 0.3 + 'px';
    }
    // animateHeadings();
})

//  ------------------------------------- MEDIA QUERY 768px SMALL SIZE ------------------------------------------------------------------------
function myFunction(mediaquery) {
    if (mediaquery.matches) { // If media query matches
      background.src = "img/bg/parallax/backgroundmobile.jpg";
      astronaut.style.visibility = "hidden";
      deathstar.style.visibility = "hidden";
      heading.style.top = parallax.clientHeight *0.8 +'px';
      heading.style.left = parallax.clientHeight *0.8 +'px';
    }
  }
  
  var mediaquery = window.matchMedia("(max-width: 768px)")
  myFunction(mediaquery) // Call listener function at run time
  mediaquery.addListener(myFunction)
