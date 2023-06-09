
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
const skillsNav = document.querySelector('.skills');
const homeContents = document.querySelector('.homeContent');
const aboutContents = document.querySelector('.aboutContent');
const skillsContents = document.querySelector('.skillsContent');

// Navbar EventListners
homeNav.addEventListener('click',()=>{
    if(!homeNav.classList.contains('focused')) {
        if(!aboutNav.classList.contains('focused')){
            skillsNav.classList.remove('focused');
            skillsContents.classList.add('hidden');

            homeNav.classList.add('focused');
            homeContents.classList.remove('hidden');
        }

        aboutNav.classList.remove('focused');
        aboutContents.classList.add('hidden');

        homeNav.classList.add('focused');
        homeContents.classList.remove('hidden');
    }
});
aboutNav.addEventListener('click',()=>{
    if(!aboutNav.classList.contains('focused')) {
        if(!homeNav.classList.contains('focused')){
            skillsNav.classList.remove('focused');
            skillsContents.classList.add('hidden');

            aboutNav.classList.add('focused');
            aboutContents.classList.remove('hidden');
        }

        homeNav.classList.remove('focused');
        homeContents.classList.add('hidden');

        aboutNav.classList.add('focused');
        aboutContents.classList.remove('hidden');
    }
});
skillsNav.addEventListener('click',()=>{
    if(!skillsNav.classList.contains('focused')) {
        if(!aboutNav.classList.contains('focused')){
            homesNav.classList.remove('focused');
            homesContents.classList.add('hidden');

            skillsNav.classList.add('focused');
            skillsContents.classList.remove('hidden');
        }

        aboutNav.classList.remove('focused');
        aboutContents.classList.add('hidden');

        skillsNav.classList.add('focused');
        skillsContents.classList.remove('hidden');
    }
});


smallNavItems.forEach(item => {
    item.addEventListener('click', () =>{
        smallNavItems.forEach(item => {
            item.classList.remove('focused');
        });
        item.classList.add('focused'); 
    });
});


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
    //   if (container1.classList.contains('projectFocused')) {
        container1.classList.remove('projectFocused');
        container1.classList.add('projectUnfocused');
    //   }

      container2.classList.remove('projectUnfocused');
      container2.classList.add('projectFocused');
      container2.style.transition = 'transform 0.7s ease, filter 0.7s ease, opacity 0.7s ease';
    }
});