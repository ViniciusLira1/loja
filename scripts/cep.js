// API to fill the spaces with CEP data
function pegarCep() {
    let cep = document.getElementById('cep').value;
    
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let address = JSON.parse(req.response)
                document.getElementById('street').value = address.street;
                document.getElementById('neighborhood').value = address.neighborhood;
                document.getElementById('city').value = address.city;
                document.getElementById('state').value = address.state;
            }
            else if (req.status === 404) {
                alert("CEP inválido");
            }
            else {
                alert("Erro ao fazer a requisição");
            }
        }
    }
}


// Function to fill when blur the space
window.onload = function () {
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", pegarCep);
}