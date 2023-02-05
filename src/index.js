import './style/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import {header} from './components/header';
function app() {
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.appendChild(header());
    return element;
}
document.body.appendChild(app());