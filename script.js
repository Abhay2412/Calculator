//Functions begin 




//Global variables begin 
let btn = document.querySelectorAll('button');
let chosenOperation = null;
let firstNumber = '';
let secondNumber = '';

//Event listeners
btn.forEach(btn => {
    btn.addEventListener('click', e => {
        //Creates all of the vars
        const keys = e.target;
        //This will look for the action which is being performed on the calculator
        const action = keys.dataset.action;
        const keyContent = keys.textContent;
        let totalScreen = document.getElementById('totalScreen');
        let topDisplay = document.getElementById('topDisplay');
        const numberDisplay = totalScreen.textContent;
        document.getElementById('totalScreen').style.cssText = "font-size:150%";
        if(keys.matches('button')) {
            if(!action) {
                if(numberDisplay == '0') {
                    totalScreen.textContent = keyContent;
                }
                else {
                    totalScreen.textContent = numberDisplay + keyContent;
                  }
            }
            if (numberDisplay.length >= 9 && !action) {
                totalScreen.textContent = numberDisplay;
              }
        }
    })
})