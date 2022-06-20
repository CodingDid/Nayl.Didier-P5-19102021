// localstorage dans une variable = retranscription de la page Produits.js

//localStorage.setItem('commander' JSON.)


let panier = JSON.parse(localStorage.getItem('panier'));
for(let i = 0; i < panier.products.length; i++){
    const cartItems = document.getElementById('cart__items');

    // creation balise image avec class="cart__item__img"
    let imgProduct = document.createElement('img');
    imgProduct.src = panier.products[i].imageUrl;
    imgProduct.alt = panier.products[i].altTxt;

    // création de cartItemImage
    let cartItemImage = document.createElement('div');
    cartItemImage.className = "cart__item__img";
    //--------------------------------------------------//
    // création balise titre h2 "Nom du produit"
    let nomDuProduit = document.createElement('h2');
    nomDuProduit.textContent = panier.products[i].name;

    // création balise p couleur "Vert"
    let couleur = document.createElement('p');
    couleur.textContent = panier.products[i].colors;

    // getélément de balise p "prix"
    let prix = document.getElementById('totalPrice');
    //let prix = document.createElement('p');
    prix.textContent = panier.products[i].price;

    // Création de div3 cartItemContentDescription
    const cartItemContentDescription = document.createElement('div');
    cartItemContentDescription.className = "cart__item__content__description";

    // Creation de div2 cartItemContent
    let cartItemContent = document.createElement('div');
    cartItemContent.className = "cart__item__content";

    // création qTity p3
    let qTity = document.createElement('p');

    //qTity.innerText = "Qté :";
    qTity.innerText = panier.products[i].quantity;

    // création balise input "inputValue"
    let inputValue = document.createElement('input');
    inputValue.type = "number";
    inputValue.className = "itemQuantity";
    inputValue.name = "itemQuantity";
    inputValue.min = "1";
    inputValue.max = "100";
    inputValue.value = "42";
    inputValue.value = panier.products[i].quantity;

    // création de div5 cartItemContentSettingsQuantity
    let cartItemContentSettingsQuantity = document.createElement('div');
    cartItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

    // création de div4 cartItemContentSettings
    let cartItemContentSettings = document.createElement('div');
    cartItemContentSettings.className = "cart__item__content__settings";

    // création p4 deleteItem
    let deleteItem = document.createElement('p')
    deleteItem.className = "deleteItem";
    deleteItem.innerText = "Supprimer";

    // création de div6 cartItemContentSettingsDelete
    let cartItemContentSettingsDelete = document.createElement('div');
    cartItemContentSettingsDelete.className = "cart__item__content__settings__delete";

    // création balise article
    let article = document.createElement('article');
    article.className = "cart__item";
    article.setAttribute('data-id', "{}");
    article.setAttribute('data-color', "{}");
    //console.log("résultat article", article);
    // Attache de "img et cartItemImage" à la balise article.
    cartItemImage.appendChild(imgProduct);
    article.appendChild(cartItemImage);
    // Attache div2 "class = cart__item__content à la balise article.
    article.appendChild(cartItemContent);
    // Attache h2, p1, prix, div3 à "div3 et div2".
    cartItemContentDescription.appendChild(nomDuProduit);
    cartItemContentDescription.appendChild(couleur);
    cartItemContentDescription.appendChild(prix);
    cartItemContent.appendChild(cartItemContentDescription);
    // Attache p3, inputValue, div4 à "div5 et div2".
    cartItemContentSettingsQuantity.appendChild(qTity);
    cartItemContentSettingsQuantity.appendChild(inputValue);
    cartItemContent.appendChild(cartItemContentSettings);
    // Attache de la DIV5 à 4
    cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);

    cartItemContentSettingsDelete.appendChild(deleteItem);
    cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
    cartItems.appendChild(article);

    // Attache de la balise "span id=totalQuantity et ajout quantité.
    let spanQuantity = document.getElementById('totalQuantity');
    spanQuantity.textContent = '2';
    console.log(spanQuantity);

    // Attache de la balise "span id=
    let spanTotalPrice = document.getElementById('totalPrice');
    spanTotalPrice.textContent = '84'
    console.log(spanTotalPrice);
}

// Exemple function async sur internet
async function getPrice() {
        let response = await fetch('http://localhost:3000/api/products/');
        let datas = await response.json();
        for (let i = 0; i < datas.length; i++) {
            console.log(datas[i].price)
            //console.log(panier.products[i].quantity)
            //console.log(panier.products[i].name);
            //console.log(panier.products[i].price);
            let resultPrice = document.querySelector('.cart__price');
            let totalQt = document.getElementById('totalQuantity');
            let totalPrice = document.getElementById('totalPrice');
            //console.log(totalQt)
            console.log(totalPrice)
            //Test calcul local
            let resultGeneral = 2 * 84;
            console.log('somme', resultGeneral);
            return datas;
        }
    };
getPrice()
    //.then(datas => console.log(datas));


// TEST
// Exemple simple de fetch
/*const affichePrix = () => {
fetch('http://localhost:3000/api/products/')
    .then(reponse => reponse.json())
    .then(datas => {
            for (let i = 0; i < datas.length; i++) {
                console.log(panier.products[i].color)
                console.log(panier.products[i].quantity)
                document.querySelector('.cart__price');
                //console.log(panier.datas[i].quantity)
                //console.log(panier.data[i].name);
                //console.log(prix);
            }
        })
};
affichePrix()*/

// TEST
// Exemple d'une Function async await
/*async function foo(){
    const p1 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Action effectuée !'), 1000)
    });
       let resultat = await  p1;
       console.log(resultat);
}
foo()*/






//------------------- Obtention du prix et calcul sur ce dernier avec la quantité ------------------------------------------//
/*async function getPrice(price) {

    let reponse = await fetch('http://localhost:3000/api/products/');
    let data = await reponse.json();
        console.log(reponse, 'Response Javascript');
        document.querySelector('cart__price').price;
        //console.log(reponseJS, 'Object Javascript');
}
    //getPrice();


//.then(response => response.json())
        //.then(datas => {


            /*console.log('recup du fetch ', datas);
            for(let i = 0; datas.length; i++) {
                console.log('price', gPrice[i])
                const prix = document.getElementById('price')
                console.log(prix);
            }
            })
        }*/
        //getPrice()