let carrinho = localStorage.getItem('carrinho').split(',');

catalogoProdutos.forEach(produto => {
    carrinho.forEach(idCarrinho => {
        if(produto.id == idCarrinho){
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

            var elem = document.getElementById("carrinho");
            elem.innerHTML += cod;
        }else{}
    });
});


function limparCarrinho(){
    localStorage.removeItem('carrinho');
    location.reload();
}


function comprar(){
    nome = document.getElementById('nome').value;
    cep = document.getElementById('cep').value;

    local = localStorage.getItem('compras');
    compras = JSON.parse(local) ? JSON.parse(local) : [];

    carrinho.forEach(item => {
        catalogoProdutos.forEach(catalogo => {
            if(catalogo.id == item){
                itemArr = {
                    "id": item,
                    "nome": nome,
                    "cep": cep,
                    "titulo": catalogo.title,
                    "preco": catalogo.price
                };
                compras.push(itemArr);
            }else{}
        });
    });

    localStorage.setItem('compras', JSON.stringify(compras));
}

