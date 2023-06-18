function subscribed(){
 const subElm =  document.querySelector('.sub-button');

    if (subElm.innerText === 'Subscribe'){
        subElm.innerText = 'Subscribed';
        subElm.classList.add('is-subscribed');
    } else {
        subElm.innerText  = 'Subscribe';
        subElm.classList.remove('is-subscribed');   
    }
}

function calculateTotal(){

    const inputElement = document.querySelector('.js-cost-input');
    let cost =  Number(inputElement.value);

    if (cost < 40) {
        cost = cost + 10;
    }

    document.querySelector('.js-total')
    .innerHTML = `$${cost}`;
}

function handleCostKey(event){
    if (event.key === 'Enter'){
        calculateTotal();
      }
}
