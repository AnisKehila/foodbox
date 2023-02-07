import imag from '../../img/hero-pic 2.png';
export function services() {
    const services = document.createElement('section');
    services.className = 'services section';
    services.setAttribute('id', 'services-section');
    const txtSection = document.createElement('div');
    txtSection.className = 'section-text';
    const title = document.createElement('h1');
    title.className = 'section-title';
    title.innerHTML = 'Discover Our  Service!';
    txtSection.appendChild(title);
    const p = document.createElement('p');
    p.className = 'section-paragraph';
    p.innerHTML = 'See why our costumers love and use Foodbox service. Discover and enjoy. And don\'t forget to rate us and give feedback to improve foodbox services.';
    txtSection.appendChild(p);
    const btns = document.createElement('div');
    btns.className = 'section-buttons';
    const spans = [];
    for(let i=0; i<6; i++) {
        spans[i] = document.createElement('span');
        spans[i].className = 'text-card';
    }
    spans[0].innerHTML = '24/7 Service';
    spans[1].innerHTML = 'Best Cheft';
    spans[2].innerHTML = 'Fast Delivery';
    spans[3].innerHTML = 'Table Reservation';
    spans[4].innerHTML = 'Free Delivery';
    spans[5].innerHTML = 'Special Offers';
    spans.forEach(span => {
        btns.appendChild(span)
    })
    txtSection.appendChild(btns);
    const imgSection = document.createElement('div');
    imgSection.className = 'section-img';
    const img = new Image();
    img.src = imag;
    imgSection.appendChild(img);
    services.appendChild(txtSection);
    services.appendChild(imgSection);
    return services;
}