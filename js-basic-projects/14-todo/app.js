// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const groceryForm = document.querySelector(".grocery-form");
const submitBtn = document.querySelector(".submit-btn");
const grocery = document.querySelector("#grocery");
const groceryCon = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
submitBtn.addEventListener("click", submitedTask);
window.addEventListener("DOMContentLoaded", reloadItems);
// ****** FUNCTIONS **********
function submitedTask(e) {
  e.preventDefault();
  const value = grocery.value;
  const uniqueId = new Date().getTime().toString();
  if (value !== "" && editFlag == false) {
    allItemLocalStorage(uniqueId, value);

    addToLocalStorage(uniqueId, value);
    //set to back
    setBackTo();
  } else if (value !== "" && editFlag == true) {
    editElement.innerHTML = value;
    alertStatus("Your value has edited", "success");
    editLocalStorage(editId, value);
    setBackTo();
  } else {
    alertStatus("Please add value", "danger");
  }
}
//display aleart
function alertStatus(text, status) {
  alert.textContent = text;
  alert.classList.add(`alert-${status}`);
  //remove aleart
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${status}`);
  }, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  groceryList.removeChild(element);
  if (groceryList.children.length == 0) {
    groceryCon.classList.remove("show-container");
  }
  alertStatus("Item Deleted", "danger");
  setBackTo();
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  submitBtn.textContent = "Edit";
  editFlag = true;
  editId = element.dataset.id;
}
//clear data
clearBtn.addEventListener("click", clearItem);
function clearItem() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (e) {
      groceryList.removeChild(e);
    });
  }
  groceryCon.classList.remove("show-container");
  alertStatus("Data has been cleared", "danger");
  localStorage.removeItem("list");
  setBackTo();
}
//set Back To
function setBackTo() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

//add local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function allItemLocalStorage(uniqueId, value) {
  const article = document.createElement("article");
  article.classList.add("grocery-item");
  const dataAttribute = document.createAttribute("data-id");
  dataAttribute.value = uniqueId;
  article.setAttributeNode(dataAttribute);

  article.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  groceryList.appendChild(article);
  groceryCon.classList.add("show-container");
  alertStatus("Your value added", "success");

  const deleteBtn = article.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = article.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
}

function reloadItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      allItemLocalStorage(item.id, item.value);
    });
  }
}
