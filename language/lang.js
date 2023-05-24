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
const krystal = document.querySelector('.text_block_crystal')
const krystalImg = document.querySelector('.second_double_image_bottom')
const textBlockPhone = document.querySelector('.text_block_phone')
const textBlockBlue = document.querySelector('.text_block_blue')
const description = document.querySelector('meta[name="description"]')
const keyWords = document.querySelector('meta[name="keywords"]')
console.log(keyWords)

let lang = navigator.language.substring(3).toLowerCase()


console.log(navigator.language.substring(3).toLowerCase())

location.href = window.location.pathname + '#' + lang

const changeLangUrl = () => {
    if(lang === 'kz'){
        lang= 'ru'
        langText.innerHTML= 'Қазақ тілінде'
        location.href = window.location.pathname + '#' + lang
        langImg.src = 'images/vector/kzLang.svg'
        transliteTitle(lang)
        textBlockBlue.classList.remove('text_block_blue_kz')
        krystal.classList.remove ('text_block_krystal_kz')
        krystal.classList.remove ('.second_double_image_bottom_kz')
        textBlockPhone.classList.remove('text_block_phone_kz')
    }else{
        lang='kz'
        langText.innerHTML= 'На русском'
        location.href = window.location.pathname + '#' + lang
        langImg.src = 'images/vector/russianLang.svg'
        transliteTitle(lang)
        textBlockBlue.classList.add('text_block_blue_kz')
        krystal.classList.add ('text_block_krystal_kz')
        krystalImg.classList.add ('second_double_image_bottom_kz')
        textBlockPhone.classList.add('text_block_phone_kz')
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
    document.documentElement.setAttribute('lang', `${hash}`)
    document.querySelector('title').innerHTML = langArr ['title'] [hash]
    description.content = langArr ['description'] [hash]
    keyWords.content = langArr ['keywords'] [hash]
}

const defaultLang = (lang) =>{
    if(lang === 'kz'){
        langText.innerHTML= 'На русском'
        location.href = window.location.pathname + '#' + lang
        langImg.src = '/images/vector/russianLang.svg'
        transliteTitle(lang)
    } else {
        langText.innerHTML= 'Қазақ тілінде'
        location.href = window.location.pathname + '#' + lang
        langImg.src = '/images/vector/kzLang.svg'
        transliteTitle(lang)
    }
}


defaultLang(lang)



languageBlock.addEventListener('click', changeLangUrl)