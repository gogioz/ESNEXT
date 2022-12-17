let products = document.querySelector(".products");

async function getProducts() {
    try {
        let res = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
        let data = await res.json();
        data.forEach((product) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <p>EGP${product.price}</p>
            `;
            products.appendChild(card);
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();
