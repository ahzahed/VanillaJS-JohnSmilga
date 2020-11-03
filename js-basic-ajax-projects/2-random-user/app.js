import getElement from "./utilities/getElement.js";
import getUser from "./utilities/fetchUser.js";

const btn = getElement(".btn");
const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const icon = [...document.querySelectorAll(".icon")];

const displayUser = (user)=> {
    img.src = user.img
    value.textContent = user.name
    icon[0].classList.add('active')
    icon.forEach((item)=>{
        item.addEventListener('click',()=>{
            const label = item.dataset.label;
            title.textContent = `My ${label} is`;
            value.textContent = user[label];
            icon.forEach((selected)=>{
                selected.classList.remove("active")
                item.classList.add('active')
            })
        })
    })
}

const showUser = async()=>{
    const eachUser = await getUser()
    displayUser(eachUser);
}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)

