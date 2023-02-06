import hero from '../../img/hero-pic 2.png';
export function home() {
    const home = document.createElement('section');
    home.className = 'home section section-active';
    home.setAttribute('id', 'home-section');
    const divText = document.createElement('div');
    divText.className = 'section-text';
    const title = document.createElement('h1');
    title.className = 'section-title';
    title.innerHTML = 'Be The Fastest <br> Delivery <br> In <span style="color: #F54748;">Boumerdes</span>';
    divText.appendChild(title);
    const p = document.createElement('p');
    p.className = 'section-paragraph';
    p.innerHTML = 'Our job is to filling your tummy with delicious food and with fast and free delivery';
    divText.appendChild(p);
    const btns = document.createElement('div');
    btns.className = 'section-buttons';
    const login = document.createElement('a');
    login.href = '#';
    login.className = 'button';
    login.innerHTML = 'Order Now';
    const explore = document.createElement('a');
    explore.href = '#';
    explore.className = 'button-border';
    explore.innerHTML = 'Explore more';
    btns.appendChild(login);
    btns.appendChild(explore);
    divText.appendChild(btns)
    home.appendChild(divText);
    const imgSec = document.createElement('div');
    imgSec.className = 'section-img';
    const img = new Image();
    img.src = hero;
    imgSec.appendChild(img);
    home.appendChild(imgSec);
    return home;
}