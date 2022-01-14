const modal = function() {
    const giftBtn = document.querySelector(".gift_button")
    const giftCloseBtn = document.querySelector(".modal_close")
    const giftSelection = document.querySelector(".modal")
    const giftModalWrapper = document.querySelector(".modal_wrapper")
    const ACTIVE_CLASS = "active"

    const name = giftModalWrapper.querySelector("input[name=name]")
    const INPUT_ACTIVE = "active-input" 
    const INPUT_ERROR = "error-input"


//открывает окно
    giftBtn.addEventListener("click", function() {
    giftModalWrapper.classList.add(ACTIVE_CLASS)
    name.focus()
    })
//закрывает окно
    giftCloseBtn.addEventListener("click", () => {
    giftModalWrapper.classList.remove(ACTIVE_CLASS)
    })

    name.addEventListener("change", () => {
        console.log(1);
    })

    inputs.forEach(input =>{
        input.addEventlistener('blur', () => {
            if(input.name = 'name'){
                
            }
            if(input.name = 'email'){
                if (!input.value.includes('@')) { // не email
                    input.classList.add('invalid');
                    error.innerHTML = 'Пожалуйста, введите правильный email.'
                  }
                };
                
                input.onfocus = function() {
                  if (this.classList.contains('invalid')) {
                    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
                    this.classList.remove('invalid');
                    error.innerHTML = "";
                  }
                };
       })
   })
}

modal()
