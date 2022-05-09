// Codage parti product en JS
console.log("connect product OK");
// création de la balise img avec attribut
let url = window.location.href;
let idParams = new URL(url).searchParams.get('id');
let promise = fetch('http://localhost:3000/api/products/' + idParams)
    .then(response => response.json())
    .then(product => {
        console.log("objets tableaux", product);
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
            // Insertion des choix value color balise <option>
            const select = document.getElementById('colors');
            let option = document.createElement('option');
            option.value = product.colors[i];
            option.textContent = product.colors[i];
            select.appendChild(option);
        }
    })

// creation tableau pour les produits canapés.
const descriptifKanap  = [
        'altTxt',
        'colors',
        'description',
        'imageUrl',
        'name',
        'price',
        'id'
]
console.log(descriptifKanap);
const btn = document.querySelector('button');
const alerte = () => {
    //promise.then;
    alert("Rajout d'un nouveau Kanap !", descriptifKanap);
}
btn.addEventListener("click", function (){
    const listProduct = [
        "12",
        "titi"
    ]
    const stockage = JSON.parse(localStorage.getItem('panier'));
    if(stockage == undefined){
        stockage.push(listProduct);
        localStorage.setItem('panier', JSON.stringify(stockage));
        alert('add')
    }else {
        const newProduct = [
            "11",
            "toto"
        ]
        stockage.push(newProduct);
        localStorage.setItem('panier', JSON.stringify(stockage));
        alert("coucou");
    }
});
//console.log(btn);

