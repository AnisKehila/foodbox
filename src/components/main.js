import {home} from './main-section/home';
export function main() {
    const main = document.createElement('main');
    main.appendChild(home());
    return main;
}