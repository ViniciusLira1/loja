comprados = localStorage.getItem('compras');
comprados = JSON.parse(comprados);

comprados.forEach(compra => {
    cod = `
    <tr>
        <td>${compra.id}</td>
        <td>${compra.nome}</td>
        <td>${compra.cep}</td>
        <td>${compra.titulo}</td>
        <td>${compra.preco}</td>
    </tr>
    `;

    var elem = document.getElementById("table");
    elem.innerHTML += cod;
});

function limparAdmin(){
    localStorage.removeItem('compras');
    location.reload();
}