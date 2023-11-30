catalogoProdutos.forEach(produto => {
    let cod = ` 
        <div class="roupa" id=${produto.id}>
            <a href="produto.html?id=${produto.id}">
                <img src="${produto.poster[0]}" id=${produto.id}>
            </a>
            <p>${produto.title}</p>
            <h5>R$ ${produto.price}</h5>
            <ion-icon name="cart"></ion-icon>
        </div>
        `;
    if(produto.brand == 'adidas' && produto.departament == 'female'){
        var elem = document.getElementById("roupas-adidas");
        elem.innerHTML += cod
    }else if(produto.brand == 'nike' && produto.departament == 'female'){        
        var elem = document.getElementById("roupas-nike");
        elem.innerHTML += cod
    }else{
        console.log('')
    }
});