import {langArr} from "./langsArr.js";
let hash = window.location.hash
hash = hash.substring(1)
const languageBlock = document.querySelector('.language_block')
const langImg = document.querySelector('.kz_lang')
const langText = document.querySelector('.language_text')
const buttonsTl = document.querySelectorAll('.tl')
const allLang = ['ru','kz']
const titels = document.querySelectorAll('.large_block__title')
const subTitles = document.querySelectorAll('.large_block__subtitle')
const applicationTitle = document.querySelector('.application_title')
const inputPlaceholder = document.querySelector ('.application_input')



let lang = navigator.language.substring(3).toLowerCase()

console.log(lang)
location.href = window.location.pathname + '#' + lang

const changeLangUrl = () => {
    if(lang === 'kz'){
        lang= 'ru'
        langText.innerHTML= 'Қазақ тілінде'
        location.href = window.location.pathname + '#' + lang
        langImg.src = '/images/vector/kzLang.svg'
        transliteTitle(lang)
    }else{
        lang='kz'
        langText.innerHTML= 'На русском'
        location.href = window.location.pathname + '#' + lang
        langImg.src = '/images/vector/russianLang.svg'
        transliteTitle(lang)
    }

}


const transliteTitle = (hash) =>{
    const translationsTitle = langArr['large_block_title'][hash];
    const count = Math.min(titels.length, translationsTitle.length);
    for(let x = 0; x < count; ++x) {
        titels[x].innerHTML = translationsTitle[x];
    }
    const tarnslationSubtitle = langArr ['large_block_subtitle'] [hash];
    const countSubTitle = Math.min(titels.length, tarnslationSubtitle.length);
    for(let x = 0; x < countSubTitle; ++x) {
        subTitles[x].innerHTML = tarnslationSubtitle[x];
    }
    const translateButtons = langArr ['large_block_button'] [hash];
    const buttonCount = Math.min (buttonsTl.length, translateButtons.length);
    for (let x = 0; x < buttonCount; ++x){
        buttonsTl[x].innerHTML = translateButtons[x]
    }
    applicationTitle.innerHTML = langArr ['application_title'] [hash]
    inputPlaceholder.placeholder = langArr ['application_input'] [hash]

}





// const changeLang = () =>{
//     if(!allLang.includes(hash)){
//         location.href = window.location.pathname + '#ru'
//         location.reload()
//     }
//     transliteTitle(hash)
//
// }

languageBlock.addEventListener('click', changeLangUrl)