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
const ogTitle = document.querySelector('meta[property="og:title"]')
const keyWords = document.querySelector('meta[name="keywords"]')
const footerLinks = document.querySelectorAll('.contract')

const  dddd = document.querySelector('.large_block')

let lang = navigator.language.substring(0, 2)

location.href = window.location.pathname + '#' + lang

const changeLangUrl = () => {
    if(lang === 'kz' ){
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


export const transliteTitle = (lang) =>{
    const translationsTitle = langArr['large_block_title'][lang];
    const count = Math.min(titels.length, translationsTitle.length);
    for(let x = 0; x < count; ++x) {
        titels[x].innerHTML = translationsTitle[x];
    }
    const tarnslationSubtitle = langArr ['large_block_subtitle'] [lang];
    const countSubTitle = Math.min(titels.length, tarnslationSubtitle.length);
    for(let x = 0; x < countSubTitle; ++x) {
        subTitles[x].innerHTML = tarnslationSubtitle[x];
    }
    const translateButtons = langArr ['large_block_button'] [lang];
    const buttonCount = Math.min (buttonsTl.length, translateButtons.length);
    for (let x = 0; x < buttonCount; ++x){
        buttonsTl[x].innerHTML = translateButtons[x]
    }
    const trnansliteLinks = langArr['contract'] [lang];
    const linkCount = Math.min(footerLinks.length, trnansliteLinks.length)
    for(let x= 0; x<linkCount; ++x){
        footerLinks[x].innerHTML= trnansliteLinks[x]
    }

    applicationTitle.innerHTML = langArr ['application_title'] [lang]
    inputPlaceholder.placeholder = langArr ['application_input'] [lang]
    document.documentElement.setAttribute('lang', `${lang}`)
    document.querySelector('title').innerHTML = langArr ['title'] [lang]
    description.content = langArr ['description'] [lang]
    keyWords.content = langArr ['keywords'] [lang]
    ogTitle.content= langArr ['title'] [lang]
}


languageBlock.addEventListener('click', changeLangUrl)
