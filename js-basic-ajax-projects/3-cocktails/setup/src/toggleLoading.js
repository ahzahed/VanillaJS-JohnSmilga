import get from "./getElement.js";

const load = get(".loading")

export const showLoading = function showLoading(){
    load.classList.remove("hide-loading");
}

export const hideLoading = function hideLoading(){
    load.classList.add("hide-loading");
}
