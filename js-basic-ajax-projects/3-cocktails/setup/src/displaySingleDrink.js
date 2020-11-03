import get from "./getElement.js";
import {hideLoading} from "./toggleLoading.js";
const displaySingle = (value)=>{
    hideLoading();
    const drink = value.drinks[0]
    const {strDrinkThumb: image, strDrink: name, strInstructions: text} = drink;

    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ]

    const drinkName = get('.drink-name')
    const drinkDesc = get('.drink-desc')
    const drinkIng = get('.drink-ingredients')
    const img = get('.drink-img')
    
    img.src = image;
    drinkName.textContent = name;
    drinkDesc.textContent = text;
    document.title = name;

    drinkIng.innerHTML = list.map((item)=>{
        if(!item) return
        return  `<li><i class="far fa-check-square"></i>${item}</li>`
    }).join('');

}
export default displaySingle;