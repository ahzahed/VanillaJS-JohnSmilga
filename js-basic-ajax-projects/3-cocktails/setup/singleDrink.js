import fetchDrinks from './src/fetchDrinks.js'
import displaySingle from './src/displaySingleDrink.js'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getId = localStorage.getItem('drink')

const singleDrink = async()=>{
    if(!getId){
        window.location.replace('./index.html')
    }
    const element = await fetchDrinks(`${url}${getId}`)
    displaySingle(element)
}
window.addEventListener('DOMContentLoaded',singleDrink)