if(window.SimpleAnime) {
    new SimpleAnime();
}
function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('input-valor').value
    let service = document.getElementById('select').value
    let numberOfPeople = document.getElementById('input-pessoas').value
    
    let total = Number(bill * service)
    total = Number(total.toFixed(2))
    
    let totalCada = total / parseInt(numberOfPeople).toFixed(2)
    totalCada = Number(totalCada.toFixed(2))

    let divRes = document.querySelector('.res')
    let html = `<p>Gorjeta total: R$ ${total}</p>`
    var html1 = `<p>Gorjeta para cada R$ ${totalCada}</p>`


    
    if (bill == '' | bill <= 0 ){
        // alert('Por favor, preencha os campos com valores')
        bill.value = ""
        document.getElementById('input-valor').focus()
        
    }

    else if (service == "Escolha uma opção"){
        divRes.innerHTML = `<p>Escolha uma opção acima`
        
    }

    else if (numberOfPeople == '' | numberOfPeople <= 1){
        numberOfPeople = 1;
        divRes.innerHTML = html
    }

    else {
        divRes.innerHTML = html + html1
    }

    
}

document.querySelector('.tipsForm').addEventListener('submit', calculateTip);



