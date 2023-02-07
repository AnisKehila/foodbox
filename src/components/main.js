import {home} from './main-section/home';
import {services} from './main-section/services';
import {about} from './main-section/about';
export function main() {
    const main = document.createElement('main');
    main.appendChild(home());
    main.appendChild(services());
    main.appendChild(about());
    return main;
}