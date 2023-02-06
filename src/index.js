import './style/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import {header} from './components/header';
import {main} from './components/main';
function app() {
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.appendChild(header());
    element.appendChild(main());
    return element;
}
document.body.appendChild(app());