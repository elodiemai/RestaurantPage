import { createElement, createUl, createImageDiv, createMenuItem, clearChildren, getMenuItem} from "./utils.js";
import favIco from './assets/favicon.ico';
import imgLogo from './assets/ratatouille.png';
import imgBg1 from './assets/paris_restaurant.jpeg';
import imgBg2 from './assets/critique.jpeg';
import imgAddress from './assets/address.jpeg';

const menuWeek = [
    {
        day: 0,
        appetizers: ['Potato Chips'],
        mains: ['Osso Bucco', 'Spaghetti Carbonara'],
        desserts: ['Crème brûlée', 'Macarons']
    },
    {
        day: 1,
        appetizers: ['Avocado Toasts'],
        mains: ['Ratatouille'],
        desserts: ['Key Lime Pie']
    },
    {
        day: 2,
        appetizers: ['Butternut Squash Soup'],
        mains: ['Goat Quiche'],
        desserts: ['Chocolate Brownie','Vanilla Ice Cream']
    },
    {
        day: 3,
        appetizers: ['Roasted Zuccini'],
        mains: ['Banh Cuon', 'Papaya Salad'],
        desserts: ['Mango Panna Cotta','London Shortbread']
    },
    {
        day: 4,
        appetizers: ['Breakfast Burrito'],
        mains: ['Tartiflette'],
        desserts: ['Pineapple Cake','Hazelnut Ice Cream']
    },
    {
        day: 5,
        appetizers: ['Vegan Eggrolls'],
        mains: ['Beef Lasagna','Roquette & Goat Salad'],
        desserts: ['English Banoffee','Tiramisu']
    },
    {
        day: 6,
        appetizers: ['Croque-Madame'],
        mains: ['Salmon Pokebowl'],
        desserts: ['New York Cheesecake','Strawberry Jam']
    }
]
    

function loadContent() {

    const content = document.getElementById('content');
    const link = document.createElement('link');

    link.rel = 'icon';
    link.href = favIco;
    document.head.appendChild(link);

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
                const pDescription = createElement({type:'p',className:'description',innerText:'Brought to you by the world reknown Chef from the Disney movie \'Ratatouille\.'});
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
                const pFooter = createElement({type:'p',className:'description',innerText:'Located at the heart of the city, Le Festin Restaurant is pleased to serve you with the most exquisite meals straight from the creative mind of its Chef.'});
                hours.append(pHours, ul);
                home.append(hours, pFooter);   
                divContent.append(home);
            break;
            case 'menu':
                const menu = createElement({type: 'div',className: 'menu',innerText: 'Menu'});
                 /* Appetizers */
                const appetizers = createMenuItem('Appetizers', getMenuItem(menuWeek, 'appetizers'));
                /* Mains */
                const mains = createMenuItem('Mains', getMenuItem(menuWeek, 'mains'));
                /* Desserts */
                const desserts = createMenuItem('Desserts', getMenuItem(menuWeek, 'desserts'));
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