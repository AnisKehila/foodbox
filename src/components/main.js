import {home} from './main-section/home';
import {services} from './main-section/services';
export function main() {
    const main = document.createElement('main');
    main.appendChild(home());
    main.appendChild(services());
    return main;
}