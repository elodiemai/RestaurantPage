export function createElement({ type, className, idName, innerText }) {
    const newElement = document.createElement(type);
    if (className) newElement.classList.add(className);
    if (idName) newElement.setAttribute('id', idName);
    if (innerText) newElement.innerHTML = innerText;
    return newElement;
}

export function createUl(...args) {
    const ul = document.createElement('ul');
    for (let [text, id] of args) {
        const li = document.createElement('li');
        li.innerHTML = text;
        li.setAttribute('id', id);
        ul.appendChild(li);
    }
    return ul;
}

export function createImageDiv(className, idName, src) {
    const imageDiv = createElement({ type: 'div', className, idName });
    const img = new Image(100, 11);
    img.src = src;
    imageDiv.appendChild(img);
    return imageDiv;
}

export function createMenuItem(title, items) {
    const divDish = createElement({ type: 'div', className: 'dish' });
    const titleP = createElement({ type: 'p', className: 'title', innerText: title });
    divDish.append(titleP);
    for (let item of items) {
        const itemP = createElement({ type: 'p', className: 'menu-item', innerText: item });
        divDish.append(itemP);
    }
    return divDish;
}

export function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

export function getMenuItem(menuArray, item) {
    const currentDay = Math.floor(Math.random() * 6);
    return menuArray.filter(obj => obj.day === currentDay)[0][item];
}