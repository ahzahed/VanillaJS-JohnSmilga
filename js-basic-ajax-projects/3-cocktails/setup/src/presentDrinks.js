import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'
import setDrink from './setDrink.js'
const presentDrink = async (url)=>{
    const getData = await fetchDrinks(url);
    const section = await displayDrinks(getData);
    if(section){
        setDrink(section)
    }
}

export default presentDrink;