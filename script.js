document.addEventListener("DOMContentLoaded", loadItems);

function addItem() {
    let name = document.getElementById("itemName").value;
    let category = document.getElementById("itemCategory").value;
    let image = document.getElementById("itemImage").value || "https://via.placeholder.com/50";

    if (!name || !category) {
        alert("Please fill in both fields.");
        return;
    }

    let newItem = { name, category, image };
    let items = JSON.parse(localStorage.getItem("pcItems")) || [];
    items.push(newItem);
    localStorage.setItem("pcItems", JSON.stringify(items));

    displayItems();
}

function displayItems() {
    let items = JSON.parse(localStorage.getItem("pcItems")) || [];
    let list = document.getElementById("equipmentList");
    list.innerHTML = "";

    items.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p><strong>${item.name}</strong></p>
                <p>${item.category}</p>
            </div>
            <button class="delete-btn" onclick="deleteItem(${index})">X</button>
        `;
        list.appendChild(div);
    });
}

function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem("pcItems")) || [];
    items.splice(index, 1);
    localStorage.setItem("pcItems", JSON.stringify(items));
    displayItems();
}

function loadItems() {
    displayItems();
}