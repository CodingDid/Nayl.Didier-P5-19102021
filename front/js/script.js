// Request HTTP en directive GET vers API
fetch('http://localhost:3000/api/products/')
    .then(response => response.json())
    .then(datas => {
        console.log(datas);
        // Boucle for permettant de recuperer les datas de la request vers API
        for(let i = 0; i < datas.length; i++){
            const items = document.getElementById('items');
            let img = document.createElement('img');
            img.src = datas[i].imageUrl;
            img.alt = datas[i].altTxt;

            let h3 = document.createElement('h3');
            h3.className = "productName";
            h3.innerText = datas[i].name;

            let p = document.createElement('p');
            p.className = "productDescription";
            p.innerText = datas[i].description;

            let article = document.createElement('article');
            article.appendChild(img);
            article.appendChild(h3);
            article.appendChild(p);

            let a = document.createElement('a');
            a.href = "./product.html?id=" + datas[i]._id;
            a.appendChild(article);

            items.appendChild(a);
            //console.log("structure total", h3, img, p);

        }
    });



