import get from "./getElement.js"
import {hideLoading} from "./toggleLoading.js"
// import presentDrink from "./presentDrinks"

const title = get(".title")
const section = get(".section-center")

const displayDrinks = ({drinks})=>{
if(!drinks){
  hideLoading()
    title.textContent = "Something went wrong";
    section.innerHTML = null;
    return;
}


const allDrinks = drinks.map((drink)=>{
    const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
}).join('')
hideLoading()
title.textContent= ''
section.innerHTML=allDrinks
return section
}

export default displayDrinks;