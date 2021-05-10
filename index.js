const checkbox = document.getElementById('checkbox');
const label = document.getElementById('label-check');

checkbox.addEventListener('change', () => {
    //change the theme website
 
    document.body.classList.toggle('dark');
    
});

