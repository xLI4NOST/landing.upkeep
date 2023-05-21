const buttons = document.querySelectorAll('.application_icon')
const inputElem = document.querySelector('.application_input')
const formElem = document.querySelector('.application_form')
const submitButton = document.querySelector('.application_form__button')
const applicationForm = document.querySelector('.application_form')
const phoneHover = document.querySelectorAll('.anim')
const loading = document.querySelector('.load')

let clickButton= ""
const defaultState = ()=>{
    buttons[0].classList.add('button_active')
    let clickButton= 'WhatsApp'
}

const setLoading =(callback)=>{
    if (callback === true){
        loading.classList.add('loader-active')
    }
    if(callback=== false){
        loading.classList.remove('loader-active')
    }
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
    console.log(res)
    }
}

const checkButtons =()=>{
    const active = document.querySelectorAll('.application_icon.button_active')
    if(active){
        active.forEach(elem=>{
            clickButton=elem.textContent
            if(clickButton=='Email'){
                inputElem.setAttribute('type', 'email')
            }
            if (clickButton !='Email'){
                inputElem.setAttribute('type', 'text')
            }
        })
    }
}

buttons.forEach((elem)=>{
    elem.addEventListener('click', checkButtons)
})

const handleSubmit =(evt)=>{
    evt.preventDefault()
    const contact = inputElem.value

    setLoading(true)

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

        .then (res=>{checkResponse(res)
            if (res.status == 200){
                alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
            }
        }

        )
        .catch((err)=>
            alert('Произошла ошибка, проверьте подключение к интернету или повторите попытку позднее')
        )
        .finally((res)=>{
            inputElem.value=""
            setLoading(false)
        })

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


applicationForm.addEventListener('submit', handleSubmit)
