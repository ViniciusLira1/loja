let id = window.location.search.substr(1).replace('id=','');

catalogoProdutos.forEach(produto => {
    if(produto.id == id){
        document.getElementById('product-name').innerHTML = produto.title;
        document.getElementById('product-price').innerHTML = produto.price;
        document.getElementById('product-description').innerHTML = produto.description;
        document.getElementById('imagem-grande').src = produto.poster[0];
        produto.poster.forEach(images => {
            let cod2 = `
            <div>
                <img src="${images}" class="carrossel-image">
            </div>
            `
            var elem = document.getElementById("hover-container");
            elem.innerHTML += cod2
        });
    }else{}
});


let carrossel = document.querySelectorAll(".carrossel-image");
carrossel.forEach(function(elem) {
    elem.addEventListener("click", function() {
        document.getElementById('imagem-grande').src = elem.src;
    });
});

const input = id;
function add(){
    carrinho = localStorage.getItem('carrinho')
    if(carrinho !== null){
        car = carrinho.split(',');
        car.push(id);
        localStorage.setItem('carrinho', car);
    }else{
        localStorage.setItem('carrinho', id);
    }
}