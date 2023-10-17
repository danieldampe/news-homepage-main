// *** *** *** Variables *** *** ***
const d = document,
    c = console;
// *** DOM ***
const $openMenuBtn = d.getElementById("open-menu-btn"),
    $closeMenuBtn = d.getElementById("close-menu-btn"),
    $menu = d.getElementById("menu");

// *** *** *** Funciones *** *** ***
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const addStateClass = (element, className) => element.classList.add(element.classList[0] + "--" + className);
const removeStateClass = (element, className) => element.classList.remove(element.classList[0] + "--" + className);
const clickElement = (element, evt) => evt.target === element || evt.target.matches("#" + element.id + " *");

// *** *** *** Ejecución *** *** ***
d.addEventListener("click", evt => {
    if(clickElement($openMenuBtn, evt)) {
        addStateClass($menu, "is-active");
    };
    if(clickElement($closeMenuBtn, evt)) {
        removeStateClass($menu, "is-active");
    };
});
