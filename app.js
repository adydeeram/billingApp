// getting elements 


const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const itemQuantity = document.querySelector('#item-quantity');
const addCartBtn = document.querySelector('#add-to-cart');
const totalAmount = document.getElementById('display-area');
const clearBtn = document.querySelector('#clearBtn');
const alret = document.getElementById('toast-warning');
const displayDiv = document.getElementById('displayArea');
const alretCloseBtn = document.querySelector('#alret-close');



addCartBtn.addEventListener('click',cartBtn);

let anArray = [];   

function cartBtn(e){
    const listCard = document.querySelector('#listCard');

    
    const item = document.createElement('div');
    item.className = 'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800';
    
    // creating display feild 
    const span = document.createElement('span');
    span.className = 'font-medium pr-1 mr-4';
    span.style.borderRight = '1px gray solid'
    item.appendChild(span);
    const span2 = document.createElement('span');
    span2.className = 'font-medium pr-1 mr-4';
    span2.style.borderRight = '1px gray solid'

    item.appendChild(span2)
    const span3 = document.createElement('span');
    item.appendChild(span3)

    
    

  
    const multiply =   parseFloat(itemPrice.value) * parseFloat(itemQuantity.value)

    // adding item to display section
    span.innerText = itemName.value;
    span2.innerText = `No of items "${itemQuantity.value}"`;
    span3.innerText = `Total amount for this item : ${multiply} PKR`;
     
    
    // total amount display 
    
        anArray.push(multiply)


    
    // Making sure that only numbers will be inserted to array 


    let numbersOnly = (val) =>{
        if(typeof(val) === 'number'){
            return val
        }
    }
    let numbers = anArray.filter(numbersOnly);
    console.log(numbers);



    // adding to tatal value

     const total = numbers.reduce((acc, cur) =>{
             return cur + acc;
         }, 0)    
 


    // error for empty feild

    if(itemName.value === '' && itemPrice.value === '' && itemQuantity.value === ''){
        alret.style.display = 'flex';
     }else{
          listCard.appendChild(item);
         displayDiv.style.display = 'block';
        totalAmount.innerText = `Total Amount : ${total}PKR`; 
     }

     

     setTimeout(alretRemove,2000);

     function alretRemove(){
        alret.style.display = 'none';   

                }



    // empty feild on submit 

    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';


    

    

    
    
}


// clearing feild 

clearBtn.addEventListener('click',clearCart);

function clearCart(){

    document.querySelector('#listCard').innerHTML = '';
     displayDiv.style.display = 'none';
     anArray.length = 0;    

    
}


// removing alret on close click

alretCloseBtn.addEventListener('click',function(){
    alret.style.display = 'none';
    anArray.length = 0;    


})







