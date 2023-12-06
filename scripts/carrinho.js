let carrinho = localStorage.getItem('carrinho').split(',');

catalogoProdutos.forEach(produto => {
    carrinho.forEach(idCarrinho => {
        if(produto.id == idCarrinho){
            let cod = ` 
            <a href="produto.html?id=${produto.id}" class="linkCard">
                <div class="produtoCarrinhoUnit d-flex" id=${produto.id}>
                        <img src="${produto.poster[0]}" id=${produto.id}>
                    <div class="my-auto px-3">
                        <p class="d-flex">${produto.title}</p>
                        <h5 class="d-flex">${produto.price}</h5>
                    </div>
                
                        <ion-icon name="cart"></ion-icon>
                </div>
            </a>`;

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

