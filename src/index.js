import './style/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import {header} from './components/header';
import {main} from './components/main';
import favImg from './img/icon.svg';
function setFavicon(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
function app() {
    document.querySelector('head title').innerHTML = 'Foodbox'
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.appendChild(header());
    element.appendChild(main());
    return element;
}
setFavicon(favImg);
document.body.appendChild(app());