// Codage parti product en JS
console.log("connect product OK");

// Méthode fetch récup des éléments avec API et creation chemin de la structure HTML
let url = window.location.href;
let idParams = new URL(url).searchParams.get('id');
let promise = fetch('http://localhost:3000/api/products/' + idParams)
    .then(response => response.json())
    .then(product => {
        //console.log("objets tableaux", product);
        const itemImg = document.querySelector('.item__img');
        let img = document.createElement('img');
        img.src = product.imageUrl
        img.alt = product.altTxt
        itemImg.appendChild(img);

        // Insertion text dans la balise h1 "Nom du produit"
        let h1 = document.getElementById('title')
        h1.textContent = product.name

        // Insertion prix dans balise p -->  <span id="price">...</span>
        let price = document.getElementById('price');
        price.textContent = product.price

        // Insertion text balise de --> <p id=description>...</P>
        let description = document.getElementById('description');
        description.textContent = product.description

        for( let i = 0; i < product.colors.length; i++){
            //console.log("Afficher les produits", product);
            // Insertion des choix value color balise <option>
            const select = document.getElementById('colors');
            let option = document.createElement('option');
            option.value = product.colors[i];
            option.textContent = product.colors[i];
            select.appendChild(option);
        }
    })

//----------------------------------------------------------//
// creation objets pour les products canapes.

const btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let stockage = JSON.parse(localStorage.getItem('panier'));
    //Création du produit
    let products = {
        "products": [
            {
                "color": document.getElementById('colors').value,
                "id": idParams,
                "name": document.getElementById('title').innerText,
                "price": document.getElementById('price').price,
                "imageUrl": document.querySelector('.item__img').children[length].src,
                "description": document.getElementById('description').innerText,
                "altTxt": document.querySelector('.item__img').children[length].alt,
                "quantity": parseInt(document.getElementById('quantity').value)
            }
        ]
    };
    let isExist = false;
    let totalQuantity = parseInt('0')
    if(stockage == null){
        console.log('null');
        localStorage.setItem('panier', JSON.stringify(products));
    } else {
        console.log('not null');
        let product = {
            "color": document.getElementById('colors').value,
            "id": idParams,
            "name": document.getElementById('title').innerText,
            "price": document.getElementById('price').price,
            "imageUrl": document.querySelector('.item__img').children[length].src,
            "description": document.getElementById('description').innerText,
            "altTxt": document.querySelector('.item__img').children[length].alt,
            "quantity": parseInt(document.getElementById('quantity').value)
        };
            for(let i = 0; i < stockage.products.length; i++) {
                //console.log("Boucle stockage", stockage);
                console.log(i);
                if (stockage.products[i].color == product.color && stockage.products[i].id == product.id) {
                    /*totalQuantity = parseInt(stockage.products[i].quantity) + parseInt(product.quantity);
                    stockage.products[i].quantity = totalQuantity;*/
                    stockage.products[i].quantity += product.quantity;
                    console.log("Quantity", stockage.products[i].quantity);
                    isExist = true;
                    break;
                }

            }    // Faire boucle for sur stockage.products
        // si stockage.products.color == product.color && stockage.products.id == product.id
        // alors stockage.products.quantity += product.quantity
        // mettre in boolean à false !
        if(!isExist){
            stockage.products.push(product);
        }

        console.log(stockage);
        localStorage.setItem('panier', JSON.stringify(stockage));
        /*let panierId = localStorage.getItem('panier');
        if(panierId){
            //console.log("resultat du storage" + panier);
            panierId.remove;
        } else {
            console.log("Le stockage n'existe pas");
        }*/
        window.location.href = "http://localhost:63342/Nayl.Didier-P5-19102021/P5-Dev-Web-Kanap/front/html/cart.html";
    }
});
//console.log(localStorage.length);



