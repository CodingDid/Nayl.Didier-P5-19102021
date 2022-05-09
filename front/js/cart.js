console.log("connect cart OK")
//-------------------------------------------------------------//


// recuperation de la balise section et création de la balise div1

        const section1 = document.getElementById('cart__items');

        // creation balise image avec class="cart__item__img"
        let img1 = document.createElement('img');
        img1.src = "../images/product01.jpg";
        img1.alt = "Photographie d'un canapé";

        // création de div1
        let div1 = document.createElement('div');
        div1.className = "cart__item__img";
        //div1.appendChild(img1);
        //section1.appendChild(div1);
        //--------------------------------------------------//

        // création balise titre h2 "Nom du produit"
        let h2 = document.createElement('h2');
        h2.textContent = "Nom du produit";

        // création balise p couleur "Vert"
        let p1 = document.createElement('p');
        p1.textContent = "Vert";

        // création balise p "prix"
        let p2 = document.createElement('p');
        p2.textContent = "42,00 €";

        // Création de div3
        const div3 = document.createElement('div');
        div3.className = "cart__item__content__description";

        // Creation de div2
        let div2 = document.createElement('div');
        div2.className = "cart__item__content";
        //div3.appendChild(h2);
        //div3.appendChild(p1);
        //div3.appendChild(p2);
        //div2.appendChild(div3);

        // création p3
        let p3 = document.createElement('p');
        p3.innerText = "Qté :";

        // création balise input "input1
        let input1 = document.createElement('input');
        input1.type = "number";
        input1.className = "itemQuantity";
        input1.name = "itemQuantity";
        input1.min = "1";
        input1.max = "100";
        input1.value = "42";
        // console.log("Résultat input", input1);

        // création de div5
        let div5 = document.createElement('div');
        div5.className = "cart__item__content__settings__quantity";
        // console.log("result div5", div5);

        // création de div4
        let div4 = document.createElement('div');
        div4.className = "cart__item__content__settings";
        //div5.appendChild(input1);
        //div4.appendChild(div5);
        //div2.appendChild(div4);

        // création p4
        let p4 = document.createElement('p')
        p4.className = "deleteItem";
        p4.innerText = "Supprimer";

        // création de div6
        let div6 = document.createElement('div');
        div6.className = "cart__item__content__settings__delete";
        //div6.appendChild(p4);
        //div4.appendChild(div6);

        // création balise article
        let article = document.createElement('article');
        article.className = "cart__item";
        article.setAttribute('data-id', "{}");
        article.setAttribute('data-color', "{}");
        console.log("résultat article", article);
        // Attache de "img et div1" à la balise article.
        div1.appendChild(img1);
        article.appendChild(div1);
        // Attache div2 "class = cart__item__content à la balise article.
        article.appendChild(div2);
        // Attache h2, p1, p2, div3 à "div3 et div2".
        div3.appendChild(h2);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div2.appendChild(div3);
        // Attache p3, input1, div4 à "div5 et div2".
        div5.appendChild(p3);
        div5.appendChild(input1);
        div2.appendChild(div4);
        //
        div4.appendChild(div5);

        div6.appendChild(p4);
        div4.appendChild(div6);
        section1.appendChild(article);

        // Attache de la balise "span id=totalQuantity et ajout quantité.
        let spanQuantity = document.getElementById('totalQuantity');
        spanQuantity.textContent = '2';
        console.log(spanQuantity);

        // Attache
        let messageError = document.getElementById('firstNameErrorMsg');
        messageError.textContent = "ci est un message d'erreur";
        console.log(messageError);






