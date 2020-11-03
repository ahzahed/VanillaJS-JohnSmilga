const getElement = (section)=>{
    const elemnet = document.querySelector(section)
    if(elemnet) return elemnet;
    throw new Error("Thik moto class/id de beta")
}

export default getElement;