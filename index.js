
const smallNavItems = document.querySelectorAll('.smallNav div:not(.empty)');

smallNavItems.forEach(item => {
    item.addEventListener('click', () =>{
        smallNavItems.forEach(item => {
            item.classList.remove('focused');
        });
        item.classList.add('focused'); 
    });
});
