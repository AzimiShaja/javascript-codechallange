const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){

    // if else method
    
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // } else{
    //     links.classList.add('show-links');
    // }
    

    //using toggle mehtod
    links.classList.toggle("show-links");
});