const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let slideSectionsAux = sliderSection;
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

const titleProject = document.getElementById("title-project");
let projects = ["IDAX", "JG Programing", "Stingray Crossfit", "Ticket", "VAX", "Veterinaria Dr. Mejía"]
let projectsTitles = ["IDAX", "JG Programing", "Stingray Crossfit", "Ticket", "VAX", "Veterinaria Dr Mejia"]
let indexProject = 0;
titleProject.innerHTML = projects[indexProject];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
               slider.style.transition = "none";
               slider.insertAdjacentElement('beforeend', sliderSectionFirst);
               slider.style.marginLeft = "-100%";
               }, 500);
    if(indexProject == projects.length - 1){
        indexProject = -1;
    }
    indexProject = indexProject + 1;
    titleProject.innerHTML = projects[indexProject];
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
               slider.style.transition = "none";
               slider.insertAdjacentElement('afterbegin', sliderSectionLast);
               slider.style.marginLeft = "-100%";
               }, 500);
     if(indexProject == 0){
        indexProject = 5;
    }
    indexProject = indexProject - 1;
    titleProject.innerHTML = projects[indexProject];
    //console.log(sliderSection[0]);
    //console.log(slideSectionsAux.indexOf(sliderSection[0]));
}

function GoToProject(){
    console.log(projects[indexProject]);
    window.location.href = "project/" + projectsTitles[indexProject] + ".html";
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev(); 
});

titleProject.addEventListener('click', function(){
    GoToProject()
})
setInterval(function(){
    Next();
},5000);