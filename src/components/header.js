import logoImg from '../img/logo.svg';
import { home } from './main-section/home';

function logo() {
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.classList.add('nav_logo');
    const logo = new Image();
    logo.src = logoImg;
    logo.alt = 'food-box-logo';
    logoLink.appendChild(logo);
    return logoLink;
}
function menu() {
    const navMenu = document.createElement('div');
    navMenu.classList.add('nav_menu');
    navMenu.setAttribute('id', 'nav_menu');
    const navList = document.createElement('ul');
    navList.classList.add('nav_list');
    const nav_item_home = document.createElement('li');
    nav_item_home.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        const homeSection = document.querySelector('#home-section');
        sections.forEach(section => {
            section.classList.remove('section-active');
        });
        homeSection.classList.add('section-active');
    });
    nav_item_home.classList.add('nav_item');
    const link_home = document.createElement('a');
    link_home.href = '#';
    link_home.innerText = 'Home';
    link_home.className = 'nav_link active-link';
    link_home.setAttribute('id', 'home');
    nav_item_home.appendChild(link_home);
    navList.appendChild(nav_item_home);
    const nav_item_dishes = document.createElement('li');
    nav_item_dishes.classList.add('nav_item');
    const link_dishes = document.createElement('a');
    link_dishes.href = '#';
    link_dishes.innerText = 'Menu';
    link_dishes.className = 'nav_link';
    link_dishes.setAttribute('id', 'dishes');
    nav_item_dishes.appendChild(link_dishes);
    navList.appendChild(nav_item_dishes);
    const nav_item_services = document.createElement('li');
    nav_item_services.classList.add('nav_item');
    const link_services = document.createElement('a');
    link_services.href = '#';
    link_services.innerText = 'Services';
    link_services.className = 'nav_link active-link';
    link_services.setAttribute('id', 'services');
    nav_item_services.appendChild(link_services);
    nav_item_services.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        const servicesSection = document.querySelector('#services-section');        
        sections.forEach(section => {
            section.classList.remove('section-active');
        });
        servicesSection.classList.add('section-active');
    });
    navList.appendChild(nav_item_services);
    const nav_item_about = document.createElement('li');
    nav_item_about.classList.add('nav_item');
    const link_about = document.createElement('a');
    link_about.href = '#';
    link_about.innerText = 'About Us';
    link_about.className = 'nav_link active-link';
    link_about.setAttribute('id', 'about');
    nav_item_about.appendChild(link_about);
    nav_item_about.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        const aboutSection = document.querySelector('#about-us-section');
        sections.forEach(section => {
            section.classList.remove('section-active');
        });
        aboutSection.classList.add('section-active');
    });
    navList.appendChild(nav_item_about);
    navMenu.appendChild(navList);
    return navMenu;
}
function login() {
    const navLogin = document.createElement('div');
    navLogin.classList.add('nav-login');
    const searchIconLink = document.createElement('a');
    searchIconLink.setAttribute('id', 'search');
    searchIconLink.href = "";
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa-solid fa-magnifying-glass';
    searchIconLink.appendChild(searchIcon);
    navLogin.appendChild(searchIconLink);

    const shoppingIconLink = document.createElement('a');
    shoppingIconLink.setAttribute('id', 'shopping');
    shoppingIconLink.href = "";
    const shoppingIcon = document.createElement('i');
    shoppingIcon.className = 'fa-solid fa-bag-shopping';
    shoppingIconLink.appendChild(shoppingIcon);
    navLogin.appendChild(shoppingIconLink);
    const loginLink = document.createElement('a');
    loginLink.href = '#';
    loginLink.className = 'button button__header';
    const loginIcon = document.createElement('i');
    loginIcon.className = 'fa-solid fa-arrow-right-to-bracket';
    loginLink.appendChild(loginIcon);
    loginLink.innerHTML += 'Login';
    navLogin.appendChild(loginLink);
    return navLogin;
}
export function header() {
    const element = document.createElement('header');
    element.classList.add('header');
    element.setAttribute('id', 'header');
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.appendChild(logo());
    nav.appendChild(menu());
    nav.appendChild(login());
    element.append(nav);
    return element;
}