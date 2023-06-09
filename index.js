
const smallNavItems = document.querySelectorAll('.smallNav div:not(.empty)');

const twitterDiv = document.querySelector('.twitter');
const twitterIcon = document.querySelector('.fa-twitter');

const gitDiv = document.querySelector('.git');
const gitIcon = document.querySelector('.fa-github');

const linkedDiv = document.querySelector('.linked');
const linkedIcon = document.querySelector('.fa-linkedin-in');


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


gitDiv.addEventListener('mouseenter', () => {
    gitIcon.style.transition = 'color 0.3s ease';
    gitIcon.style.color='#ffffff';
});
gitDiv.addEventListener('mouseleave', () => {
    gitIcon.style.transition = 'color 0.3s ease';
    gitIcon.style.color='#93ac32';
});


linkedDiv.addEventListener('mouseenter', () => {
    linkedIcon.style.transition = 'color 0.3s ease';
    linkedIcon.style.color='#ffffff';
});
linkedDiv.addEventListener('mouseleave', () => {
    linkedIcon.style.transition = 'color 0.3s ease';
    linkedIcon.style.color='#0A66C2';
});


// Get the time element
const timeElement = document.querySelector('.time');

// Function to update the time
function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

