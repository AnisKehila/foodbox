import imag from '../../img/about-us-fram.svg';
export function about() {
    const about = document.createElement('section');
    about.className = 'about-us section';
    about.setAttribute('id', 'about-us-section');
    const txtSection = document.createElement('div');
    txtSection.className = 'section-text';
    const title = document.createElement('h1');
    title.className = 'section-title';
    title.innerHTML = 'Get to know us!';
    txtSection.appendChild(title);
    const firstP = document.createElement('p');
    firstP.className = 'section-paragraph';
    firstP.innerHTML = 'we are company engaged in the field food services with a very wide range throughout Boumerdes province. Foodbox is a company with a proud past and an even brighter future.';
    txtSection.appendChild(firstP);

    const sndP = document.createElement('p');
    sndP.className = 'section-paragraph';
    sndP.innerHTML = 'This is a type of restaurant which typpically serves food and drinks, in addiction to liht refreshments such as baked goods or snacks. The term comes from the rench word meaning food.';
    txtSection.appendChild(sndP);
    
    const btns = document.createElement('div');
    btns.className = 'section-buttons';
    const btn = document.createElement('a');
    btn.setAttribute('href', '#');
    btn.className = 'button-border';
    btn.innerHTML = 'Know more';
    btns.appendChild(btn);
    txtSection.appendChild(btns);
    const imgSection = document.createElement('div');
    imgSection.className = 'section-img';
    const img = new Image();
    img.src = imag;
    imgSection.appendChild(img);
    about.appendChild(txtSection);
    about.appendChild(imgSection);
    return about;
}