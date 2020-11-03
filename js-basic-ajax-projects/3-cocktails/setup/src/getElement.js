const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("Element thik moto de beda");
};

export default getElement;
