var ul = document.getElementById("list-container")
var item = document.getElementById("input")

function additem() {
    if (item.value == '') {
        alert("please enter something")
        return
    }
    var listitem = document.createElement("li")
    listitem.innerHTML = item.value + `<div class="btn" ><button onclick='edititem(event)'>Edit</button>
    <button onclick='deleteitem(event)'>Delete</button></div>`
    ul.append(listitem)
    item.value = ''
}
function deleteitem(event) {
    event.target.parentElement.parentElement.remove()
}
function edititem(event) {
    var listItem = event.target.parentElement.parentElement
    var currentText = listItem.firstChild.textContent.trim();
    listItem.innerHTML = `
        <input type="text" value="${currentText}">
        <button onclick="saveitem(event)">Save</button>`
}

function saveitem(event) {
    var listItem = event.target.parentElement
    var saving = listItem.querySelector("input").value.trim();
    if (saving == '') {
        alert("please enter something")
        return
    }
    listItem.innerHTML = saving + `<div class="btn" ><button onclick='edititem(event)'>Edit</button>
    <button onclick='deleteitem(event)'>Delete</button></div>`
}