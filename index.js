let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z',
];

let pronounce = [
    'ей', 'бі', 'сі', 'ді', 'i', 'еф', 'джи', 'ейч',
    'ай', 'джей', 'кей', 'ел', 'ем', 'ен', 'оу', 'пі',
    'кью', 'ер', 'ес', 'ті', 'ю', 'ві', 'дабл\'ю', 'екс',
    'вай', 'зет',
];

let resultContainer = getClassName('result-container');
let buttonsContainer = getClassName('buttons-container');

createButton();

createElement('button', 'gap', buttonsContainer, '',
    () => resultContainer.value += ' ');
createElement('button', 'clear', buttonsContainer, '&times;',
    () => resultContainer.value = '');



function createButton() {
    for (let i = 0; i < pronounce.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = pronounce[i];

        button.onclick = () => {
            resultContainer.value += alphabet[i].toUpperCase();
        };
        buttonsContainer.append(button)
    }
}

function createElement(tagName = 'div', className, parent, innerHTML, elementFunction) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    element.innerHTML = innerHTML;
    element.onclick = elementFunction;
    parent.append(element)
}

function getClassName(className) {
    return document.getElementsByClassName(className)[0]

}
