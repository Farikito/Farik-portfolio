var myTogglebutton = document.getElementById('toggle'),
    myNavlinks = document.getElementById('navlinks')

myTogglebutton.onclick = function (){
    myNavlinks.classList.toggle('active')
};