const buttons = document.querySelectorAll('.application_icon')
const inputElem = document.querySelector('.application_input')


for (let button of buttons){
    button.addEventListener('click',()=>{
        let activeButton= document.querySelector('.application_icon.button_active')
        if(activeButton){
            activeButton.classList.remove('button_active')
        }
        button.classList.add('button_active')
    })
}




