var product = document.getElementById('product');
var amount = document.getElementById('amount');
var datManufa = document.querySelector('#dateProd');
var btnRegister = document.querySelector('input[type=submit]');
var indice = 0;

btnRegister.addEventListener('click', (e) => {
    //evitar envio dos dados por padrao que é a função do botao

    e.preventDefault();

    let inProduction = document.getElementById('inProduction');

    let line = document.createElement('tr');

    let celId = document.createElement('th');
    celId.innerText = ++indice;

    let celProduct = document.createElement('td');
    celProduct.innerText = product.value;

    let celAmount = document.createElement('td');
    celAmount.innerText = amount.value;

    let celDate = document.createElement('td');
    let dataFormatada = new Date(datManufa.value).toLocaleDateString('pt-br',{timeZone:'utc'});
    celDate.innerText = dataFormatada;

    let celInsumo = document.createElement('td');
    let insumo = document.createElement('input')
    insumo.type = 'checkbox';
    celInsumo.appendChild(insumo);

    let celProduzido = document.createElement('td');
    let manufacture = document.createElement('input');
    manufacture.type = 'checkbox';
    manufacture.id = 'man'+ indice;
    celProduzido.appendChild(manufacture);


    line.appendChild(celId);
    line.appendChild(celProduct);
    line.appendChild(celAmount);
    line.appendChild(celDate);
    line.appendChild(celInsumo);
    line.appendChild(celProduzido);

    inProduction.appendChild(line);


    insumo.addEventListener('change', ()=>{

        let resposta = confirm ('Confirmar com o almoxarifado os insumos para liberar a fabricação do produto.');
        if(resposta){
            line.style.backgroundcolor = 'green';
        }else{line.style.backgroundColor = 'yellow';
    }
    });

    manufacture.addEventListener('change',()=>{
        //console.log('clicou no ' + manufacture.id)
        let resposta = confirm ('Deseja liberar a entrega do produto fabricado?');
        if(resposta){
            line.style.backgroundColor = 'green';
            line.style.textDecoration = 'line-through';
            //line.remove();
        }
        
    })

});