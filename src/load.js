import { createElement, createUl, createImageDiv, createMenuItem, clearChildren} from "./utils.js";
import imgLogo from './assets/ratatouille.png';
import imgBg1 from './assets/paris_restaurant.jpeg';
import imgBg2 from './assets/critique.jpeg';
import imgAddress from './assets/address.jpeg';

function loadContent() {

    const content = document.getElementById('content');

    const createHeader = (() => {
        const header = createElement({type: 'div', className: 'header'});
        const pRestauName = createElement({type:'p'});
        pRestauName.innerText = 'Le Festin Restaurant';
        const imageDiv = createImageDiv('','image-logo',imgLogo)
        header.append(imageDiv, pRestauName);
        content.appendChild(header);
    })();

    const createNav = (()=> {
        const navDiv = createElement({type: 'div', className: 'nav'});
        const ul = createUl(['Home','nav-home'],['Menu','nav-menu'],['Contact','nav-contact']);
        navDiv.appendChild(ul);
        content.appendChild(navDiv);
    })();

    const createMain = (() => {
        const main = createElement({type: 'div', className: 'main'});
        const imgDiv1 = createImageDiv('image-restaurant','',imgBg1);
        const imgDiv2 = createImageDiv('image-restaurant','',imgBg2);
        const ardoise = createElement({type:'div',className: 'ardoise', idName:'ardoise'});
        const container = createElement({type:'div',className:'',idName:'container'});
        main.append(imgDiv1, imgDiv2, ardoise, container);
        content.append(main);
    })();


    const createContent = (divContent, type) => {
        clearChildren(divContent);
        switch(type) {
            case 'home':
                const home = createElement({type: 'div',className: 'home'});
                const pDescription = createElement({type:'p',className:'description',innerText:'Brought to you by the world reknown chef from the Disney movie \'Ratatouille\''});
                home.append(pDescription);
                const hours = createElement({type: 'div', idName: "hours"});
                const pHours = createElement({type: 'p', innerText:'Hours:'});
                const ul = createUl(
                    ['<span class="day">Monday:</span><span class="hours">Closed</span>',''],
                    ['<span class="day">Tuesday:</span><span class="hours">Closed</span>',''],
                    ['<span class="day">Wednesday:</span><span class="hours">7pm -10pm</span>',''],
                    ['<span class="day">Thursday:</span><span class="hours">7pm -10pm</span>',''],
                    ['<span class="day">Friday:</span><span class="hours">8pm -11pm</span>',''],
                    ['<span class="day">Saturday:</span><span class="hours">8pm -11pm</span>',''],
                );
                hours.append(pHours, ul);
                home.append(hours);   
                divContent.append(home);
            break;
            case 'menu':
                const menu = createElement({type: 'div',className: 'menu',innerText: 'Menu'});
                 /* Appetizers */
                const appetizers = createMenuItem('Appetizers',['Potato Chips']);
                /* Mains */
                const mains = createMenuItem('Mains',['Osso Bucco', 'Spaghetti Carbonara']);
                /* Desserts */
                const desserts = createMenuItem('Desserts',['Crème brûlée', 'Macarons']);
                menu.append(appetizers, mains, desserts);
                divContent.append(menu);
            break;
            case 'contact':
                const contact = createElement({type: 'div',className: 'contact'});
                const p = createElement({type: 'p', className:'reservations', innerText: 'For reservations:'});
                const address = createElement({type: 'address', innerText: '1234 rue des Champs Elysees<br>Paris, France<br>Tel: 01 23 45 67 89'});
                const imageDiv = createImageDiv('image-address','',imgAddress)
                contact.append(p, address,imageDiv);
                divContent.append(contact);
            break;
        }
        activateContainer();
        return divContent;

    }

    const createContainerContent = (() => {
        const container = document.getElementById('container');
        let divContent = createElement({type: 'div',className:'container-content', idName: 'container-content'});
        clearChildren(divContent);
        document.getElementById('nav-home').addEventListener('click',()=> (createContent(divContent, 'home')));
        document.getElementById('nav-menu').addEventListener('click',()=> (createContent(divContent, 'menu')));
        document.getElementById('nav-contact').addEventListener('click',()=> (createContent(divContent, 'contact')));
        container.append(divContent);
    })();

    function activateContainer() {
        const container = document.getElementById('container');
        const containerContent = document.getElementById('container-content');
        const ardoise = document.getElementById('ardoise');
        ardoise.classList.add('activate');
        container.classList.add('activate');
        containerContent.classList.add('activate');
    }

}

export {loadContent}