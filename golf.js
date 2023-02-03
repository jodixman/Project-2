let menuBurger = document.querySelector("#menu-burger")
let menuBurgerSpan = document.querySelector("#menu-burger i")
let navbar = document.querySelector('.header .botom ul')

menuBurger.onclick = () =>{
    menuBurgerSpan.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/*bikin lingkaran*/

const text = document.querySelector('.academy .circle .text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9.1}deg)">${char}</span>`
).join('');

