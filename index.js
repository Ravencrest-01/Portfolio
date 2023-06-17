const smallNavItems = document.querySelectorAll('.smallNav div:not(.empty)');

const twitterDiv = document.querySelector('.twitter');
const twitterIcon = document.querySelector('.fa-twitter');

const gitDiv = document.querySelector('.git');
const gitIcon = document.querySelector('.fa-github');

const linkedDiv = document.querySelector('.linked');
const linkedIcon = document.querySelector('.fa-linkedin-in');

const timeElement = document.querySelector('.time');

const container1 = document.querySelector('.projectContainer1');
const container2 = document.querySelector('.projectContainer2');

const homeNav = document.querySelector('.home');
const aboutNav = document.querySelector('.about');
const projectsNav = document.querySelector('.projects');
const homeContents = document.querySelector('.homeContent');
const aboutContents = document.querySelector('.aboutContent');
const projectContents = document.querySelector('.ProjectsContent');
const exploreContainer = document.querySelector('.explorerContainer')

const uiDropper = document.querySelector('.uiDrop');
const uiArrowDown = document.querySelector('.uiArrow');

const threeDropper = document.querySelector('.threeDrop');
const threeArrowDown = document.querySelector('.threeArrow');

const adobeDropper = document.querySelector('.adobeDrop');
const adobeArrowDown = document.querySelector('.adobeArrow');

const languageDropper = document.querySelector('.languagesDrop');
const languageArrowDown = document.querySelector('.languageArrow');

const dsaDropper = document.querySelector('.dsaDrop');
const dsaArrowDown = document.querySelector('.dsaArrow');

const webDropper = document.querySelector('.htmlDrop');
const webArrowDown = document.querySelector('.htmlArrow');

const freeDropper = document.querySelector('.freeDrop');
const freeArrowDown = document.querySelector('.freeArrow');

const smallNavbar = document.querySelector('.smallNav');
const textInput = document.querySelector('.inputer');
const footerSelect = document.querySelector('.footer');
const bodySelector = document.querySelector('.nothing');
const colorChanger = document.querySelector('.red');
const glowChanger = document.querySelector('.glower');

const qrHidder = document.querySelector('.yellow');
const rickQR = document.querySelector('.rickQR');

qrHidder.addEventListener('click', ()=>{
    if(!qrHidder.classList.contains('clicked')){
        qrHidder.classList.add('clicked');
        rickQR.classList.remove('hidden');
    }
    else{
        qrHidder.classList.remove('clicked');
        rickQR.classList.add('hidden');
    }
})



// colorchanger full
colorChanger.addEventListener('click', () => {
    if (!colorChanger.classList.contains('clicked')) {
        colorChanger.classList.add('clicked');
        smallNavbar.classList.add('colorButtonSmallNav');
        textInput.classList.add('colorButtonInput');
        footerSelect.classList.add('colorButtonFooter');
        bodySelector.classList.add('colorButtonBody');
        glowChanger.classList.add('colorButtonGlow');
        exploreContainer.classList.add('colorButtonExplorer');

        if(!homeNav.classList.contains('focused')){
            if(!aboutNav.classList.contains('focused')){
                projectsNav.classList.add('colorButtonFocused');
            }
            else{
                aboutNav.classList.add('colorButtonFocused');
            }
        }
        else{
            homeNav.classList.add('colorButtonFocused');
        }

        console.log("Clicked");
    } else {
        colorChanger.classList.remove('clicked');
        smallNavbar.classList.remove('colorButtonSmallNav');
        textInput.classList.remove('colorButtonInput');
        footerSelect.classList.remove('colorButtonFooter');
        bodySelector.classList.remove('colorButtonBody');
        homeNav.classList.remove('colorButtonFocused');
        aboutNav.classList.remove('colorButtonFocused');
        projectsNav.classList.remove('colorButtonFocused');
        glowChanger.classList.remove('colorButtonGlow');
        exploreContainer.classList.remove('colorButtonExplorer');
    }
});



// Navbar EventListners
homeNav.addEventListener('click',()=>{
    if(!homeNav.classList.contains('focused')) {
        if(!aboutNav.classList.contains('focused')){
            projectsNav.classList.remove('focused');
            projectContents.classList.add('hidden');
            aboutContents.classList.add('hidden');
            exploreContainer.classList.add('hidden');

            homeNav.classList.add('focused');
            homeContents.classList.remove('hidden');
        }

        aboutNav.classList.remove('focused');
        aboutContents.classList.add('hidden');
        projectContents.classList.add('hidden');
        exploreContainer.classList.add('hidden');

        homeNav.classList.add('focused');
        homeContents.classList.remove('hidden');
    }
});
aboutNav.addEventListener('click',()=>{
    if(!aboutNav.classList.contains('focused')) {
        if(!homeNav.classList.contains('focused')){
            projectsNav.classList.remove('focused');
            projectContents.classList.add('hidden');
            homeContents.classList.add('hidden');

            aboutNav.classList.add('focused');
            aboutContents.classList.remove('hidden');
            exploreContainer.classList.remove('hidden');
        }

        homeNav.classList.remove('focused');
        homeContents.classList.add('hidden');
        projectContents.classList.add('hidden');

        aboutNav.classList.add('focused');
        aboutContents.classList.remove('hidden');
        exploreContainer.classList.remove('hidden');
    }
});
projectsNav.addEventListener('click',()=>{
    if(!projectsNav.classList.contains('focused')) {
        if(!aboutNav.classList.contains('focused')){
            homeNav.classList.remove('focused');
            homeContents.classList.add('hidden');
            aboutContents.classList.add('hidden');
            exploreContainer.classList.add('hidden');

            projectsNav.classList.add('focused');
            projectContents.classList.remove('hidden');
        }

        aboutNav.classList.remove('focused');
        aboutContents.classList.add('hidden');
        homeContents.classList.add('hidden');
        exploreContainer.classList.add('hidden');

        projectsNav.classList.add('focused');
        projectContents.classList.remove('hidden');
    }
});



// ColorChanger Navbar
homeNav.addEventListener('click',()=>{

        if(!homeNav.classList.contains('colorButtonFocused')) {
            if(colorChanger.classList.contains('clicked')){
                if(!aboutNav.classList.contains('colorButtonFocused')){
                    projectsNav.classList.remove('colorButtonFocused');
                    projectContents.classList.add('hidden');
                    aboutContents.classList.add('hidden');
                    exploreContainer.classList.add('hidden');

                    homeNav.classList.add('colorButtonFocused');
                    homeContents.classList.remove('hidden');
                }

                aboutNav.classList.remove('colorButtonFocused');
                aboutContents.classList.add('hidden');
                projectContents.classList.add('hidden');
                exploreContainer.classList.add('hidden');

                homeNav.classList.add('colorButtonFocused');
                homeContents.classList.remove('hidden');
            }
        }
});
aboutNav.addEventListener('click',()=>{
        if(!aboutNav.classList.contains('colorButtonFocused')) {
            if(colorChanger.classList.contains('clicked')){
                if(!homeNav.classList.contains('colorButtonFocused')){
                    projectsNav.classList.remove('colorButtonFocused');
                    projectContents.classList.add('hidden');
                    homeContents.classList.add('hidden');

                    aboutNav.classList.add('colorButtonFocused');
                    aboutContents.classList.remove('hidden');
                    exploreContainer.classList.remove('hidden');
                }

                homeNav.classList.remove('colorButtonFocused');
                homeContents.classList.add('hidden');
                projectContents.classList.add('hidden');

                aboutNav.classList.add('colorButtonFocused');
                aboutContents.classList.remove('hidden');
                exploreContainer.classList.remove('hidden');
            }
        }
});
projectsNav.addEventListener('click',()=>{
    if(colorChanger.classList.contains('clicked')){
        if(!projectsNav.classList.contains('colorButtonFocused')) {
            if(!aboutNav.classList.contains('colorButtonFocused')){
                homeNav.classList.remove('colorButtonFocused');
                homeContents.classList.add('hidden');
                aboutContents.classList.add('hidden');
                exploreContainer.classList.add('hidden');

                projectsNav.classList.add('colorButtonFocused');
                projectContents.classList.remove('hidden');
            }

            aboutNav.classList.remove('colorButtonFocused');
            aboutContents.classList.add('hidden');
            homeContents.classList.add('hidden');
            exploreContainer.classList.add('hidden');

            projectsNav.classList.add('colorButtonFocused');
            projectContents.classList.remove('hidden');
        }
    }
});



// Link opener Footer
twitterDiv.addEventListener('mouseenter', () => {
    twitterIcon.style.transition = 'color 0.3s ease';
    twitterIcon.style.color='#ffffff';
});
twitterDiv.addEventListener('mouseleave', () => {
    twitterIcon.style.transition = 'color 0.3s ease';
    twitterIcon.style.color='#1d9bf0';
});
twitterDiv.addEventListener('click',()=>{
    window.open('https://twitter.com/Ravencrest_01');
});


gitDiv.addEventListener('mouseenter', () => {
    gitIcon.style.transition = 'color 0.3s ease';
    gitIcon.style.color='#ffffff';
});
gitDiv.addEventListener('mouseleave', () => {
    gitIcon.style.transition = 'color 0.3s ease';
    gitIcon.style.color='#93ac32';
});
gitDiv.addEventListener('click',()=>{
    window.open('https://github.com/Ravencrest-01');
});


linkedDiv.addEventListener('mouseenter', () => {
    linkedIcon.style.transition = 'color 0.3s ease';
    linkedIcon.style.color='#ffffff';
});
linkedDiv.addEventListener('mouseleave', () => {
    linkedIcon.style.transition = 'color 0.3s ease';
    linkedIcon.style.color='#0A66C2';
});
linkedDiv.addEventListener('click',()=>{
    window.open('https://www.linkedin.com/in/ritik-kumar-17a225221/')
})


// Function to update the time
function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  timeElement.textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);


container1.addEventListener('click', () => {
    if (!container1.classList.contains('projectFocused')) {
        container2.classList.remove('projectFocused');
        container2.classList.add('projectUnfocused');
  
      container1.classList.remove('projectUnfocused');
      container1.classList.add('projectFocused');
      container1.style.transition = 'transform 0.7s ease, filter 0.7s ease, opacity 0.7s ease';
    }
  });
  
container2.addEventListener('click', () => {
    if (!container2.classList.contains('projectFocused')) {
        container1.classList.remove('projectFocused');
        container1.classList.add('projectUnfocused');

      container2.classList.remove('projectUnfocused');
      container2.classList.add('projectFocused');
      container2.style.transition = 'transform 0.7s ease, filter 0.7s ease, opacity 0.7s ease';
    }
});


uiDropper.addEventListener('click', ()=>{
    if(!uiDropper.classList.contains('dropped')) {
        uiDropper.classList.add('dropped');
        uiArrowDown.classList.remove('fa-chevron-right');
        uiArrowDown.classList.add('fa-chevron-down');
    }

    else{
        uiDropper.classList.remove('dropped');
        uiArrowDown.classList.remove('fa-chevron-down');
        uiArrowDown.classList.add('fa-chevron-right');
    }
});

threeDropper.addEventListener('click', ()=>{
    if(!threeDropper.classList.contains('dropped')) {
        threeDropper.classList.add('dropped');
        threeArrowDown.classList.remove('fa-chevron-right');
        threeArrowDown.classList.add('fa-chevron-down');
    }

    else{
        threeDropper.classList.remove('dropped');
        threeArrowDown.classList.remove('fa-chevron-down');
        threeArrowDown.classList.add('fa-chevron-right');
    }
});

adobeDropper.addEventListener('click', ()=>{
    if(!adobeDropper.classList.contains('dropped')) {
        adobeDropper.classList.add('dropped');
        adobeArrowDown.classList.remove('fa-chevron-right');
        adobeArrowDown.classList.add('fa-chevron-down');
    }

    else{
        adobeDropper.classList.remove('dropped');
        adobeArrowDown.classList.remove('fa-chevron-down');
        adobeArrowDown.classList.add('fa-chevron-right');
    }
});


languageDropper.addEventListener('click', ()=>{
    if(!languageDropper.classList.contains('dropped')) {
        languageDropper.classList.add('dropped');
        languageArrowDown.classList.remove('fa-chevron-right');
        languageArrowDown.classList.add('fa-chevron-down');
    }

    else{
        languageDropper.classList.remove('dropped');
        languageArrowDown.classList.remove('fa-chevron-down');
        languageArrowDown.classList.add('fa-chevron-right');
    }
});

dsaDropper.addEventListener('click', ()=>{
    if(!dsaDropper.classList.contains('dropped')) {
        dsaDropper.classList.add('dropped');
        dsaArrowDown.classList.remove('fa-chevron-right');
        dsaArrowDown.classList.add('fa-chevron-down');
    }

    else{
        dsaDropper.classList.remove('dropped');
        dsaArrowDown.classList.remove('fa-chevron-down');
        dsaArrowDown.classList.add('fa-chevron-right');
    }
});

webDropper.addEventListener('click', ()=>{
    if(!webDropper.classList.contains('dropped')) {
        webDropper.classList.add('dropped');
        webArrowDown.classList.remove('fa-chevron-right');
        webArrowDown.classList.add('fa-chevron-down');
    }

    else{
        webDropper.classList.remove('dropped');
        webArrowDown.classList.remove('fa-chevron-down');
        webArrowDown.classList.add('fa-chevron-right');
    }
});

freeDropper.addEventListener('click', ()=>{
    if(!freeDropper.classList.contains('dropped')) {
        freeDropper.classList.add('dropped');
        freeArrowDown.classList.remove('fa-chevron-right');
        freeArrowDown.classList.add('fa-chevron-down');
    }

    else{
        freeDropper.classList.remove('dropped');
        freeArrowDown.classList.remove('fa-chevron-down');
        freeArrowDown.classList.add('fa-chevron-right');
    }
});
