const buttons = document.querySelectorAll('.application_icon')
const inputElem = document.querySelector('.application_input')
const formElem = document.querySelector('.application_form')
const submitButton = document.querySelector('.application_form__button')
const phoneHover = document.querySelectorAll('.anim')
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




const func = () =>{
    phoneHover.forEach((elem)=>{
        elem.classList.remove("aos-init")
        elem.classList.remove('aos-animate')
        elem.removeAttribute('data-aos')
        elem.classList.add('hvr-float')
    })


}

const del =() =>{
    phoneHover.forEach((elem)=>{
        setTimeout(()=>{
            elem.classList.add("aos-init")
            elem.classList.add('aos-animate')
            elem.setAttribute('data-aos', 'fade-up')
            elem.classList.remove('hvr-float')
        },300)

    })


}

phoneHover.forEach((elem)=>{
    elem.addEventListener("mouseover", func)
    elem.addEventListener("mouseout", del)
})


submitButton.addEventListener('click', handleSubmit)
