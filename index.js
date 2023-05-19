const buttons = document.querySelectorAll('.application_icon')
const inputElem = document.querySelector('.application_input')
const formElem = document.querySelector('.application_form')
const submitButton = document.querySelector('.application_form__button')
let clickButton= ""
const defaultState = ()=>{
    buttons[0].classList.add('button_active')
    let clickButton= 'WhatsApp'
}



for (let button of buttons){
    defaultState()
    button.addEventListener('click',()=>{
        let activeButton= document.querySelector('.application_icon.button_active')
        if(activeButton){
            activeButton.classList.remove('button_active')
        }
        button.classList.add('button_active')
    })
}

const checkResponse =(res)=>{
    if (res.ok){
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
    }
}

const handleSubmit =(event)=>{
    event.preventDefault()
    const contact = inputElem.value
    const active = document.querySelectorAll('.application_icon.button_active')
    if(active){
        active.forEach(elem=>{
            clickButton=elem.textContent
        })
    }

    fetch('https://upkeep.kz/api/v1/call', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "type": `${clickButton}`,
            "value":`${contact}`,
        })
    })

        .then (res=>checkResponse(res))

}


submitButton.addEventListener('click', handleSubmit)
