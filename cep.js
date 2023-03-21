function getEndereco() {
    fetch('https://viacep.com.br/ws/60430005/json/');
    .then(response => responde.json());
    ,then(data => console.log(data));

}

getEndereco();