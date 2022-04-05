function projectsizeFix(elements){
    // var projects = elements.querySelectorAll(".Project");
    for (let i=0;i<projects.length;i++){
        if(!elements[i].classList.contains('removed')){
            elements[i].style.width  = elements[i].querySelector("img").naturalWidth + "px";
            elements[i].style.height = elements[i].querySelector("img").naturalHeight + "px";
        }
    }
}
let timeout;
function filterProjects(selector){
    const imgarr = document.getElementsByClassName("Project");
    for( let i=0;i<imgarr.length;i++){
        console.log("button pressed: value sent was"+selector);
        if(selector == "All"){
            imgarr[i].style.animationName = "add";
            imgarr[i].classList.remove("removed");
        }
        if(!imgarr[i].classList.contains(selector)){
            imgarr[i].style.animationName = "remove";
            imgarr[i].classList.add("removed");
        }
        if(imgarr[i].classList.contains(selector) && imgarr[i].classList.contains("removed")){
            imgarr[i].style.animationName = "add";
            imgarr[i].classList.remove("removed");
        }
    }
    projectsizeFix(imgarr);
}
