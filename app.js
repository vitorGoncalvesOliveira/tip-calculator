
window.onload = () =>{
    const price = document.getElementById('price-input')
    const numPerson = document.getElementById('person-input')
    const tipValuePorPerson = document.getElementById('tip-value')
    const total = document.getElementById('total-value')
    const customTip = document.getElementById('id-custom-tip')
    const erroMessage = document.getElementById('error-zero-value')
    erroMessage.style.display = 'none'

    const btnReset = document.getElementById('reset-total');

    const tipsButton = document.getElementsByClassName("calculator-tip")[0]    
    tipsButton.addEventListener('click', (e) =>{
        
            let selectedButton = e.target;        
            addClassSelectedButton(tipsButton.children, selectedButton,customTip)
            calculateAmount({price, numPerson, tipValuePorPerson, total, customTip})
        
    })

    numPerson.addEventListener('focusout', () =>{
         calculateAmount({price, numPerson, tipValuePorPerson, total, customTip })
    })
    price.addEventListener('focusout', () =>{
        calculateAmount({price, numPerson, tipValuePorPerson, total, customTip})
     
   })
    
  

    btnReset.onclick = () =>{

         price.value = '0.00' 
         numPerson.value = '0'
         tipValuePorPerson.textContent = '0.00'
         total.textContent = '0.00'
         customTip.value = 'none'
    }

    function addClassSelectedButton(elements, selectedButton, customTip){  
        for(element of elements){            
            element.classList.remove("special");
        }
        
        if(selectedButton.nodeName === 'BUTTON'){
            selectedButton.classList.add("special");    
            customTip.value = "none";
        }
    }
    
    function calculateAmount({ price, numPerson, tipValuePorPerson, total, customTip}){
        
        let tipSelected = parseInt(customTip.value) || document.getElementsByClassName('special')[0].value
        
        totalTip = price.value * (tipSelected /100)
        
        const persons = parseInt(numPerson.value);
        
        if(persons <= 0){            
            addErrorStyle();
        }else{        
            removeErrorStyle();
            tipValuePorPerson.textContent  = `$ ${(totalTip /persons).toFixed(2)}`        
            total.textContent = `$ ${((totalTip + parseFloat(price.value) ) / parseInt(numPerson.value)).toFixed(2)}`
        }   
        
    } 
    
    function addErrorStyle(){
        erroMessage.style.display = 'block'
        numPerson.style.border = '3px solid'
        numPerson.style.borderColor = 'red'; 

    }

    function removeErrorStyle(){        
        erroMessage.style.display = 'none'
        numPerson.style.border = 'none'
        numPerson.style.borderColor = 'none'; 
    }
    
}


