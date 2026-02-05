function changeLanguage(lang) {
    setLanguage(lang);
}

function initLanguage() {
    const storedLang = localStorage.getItem('preferredLang');
    const userLang = navigator.language.slice(0, 2);
    
    const langToSet = storedLang || (userLang === 'ru' ? 'ru' : 'en');
    setLanguage(langToSet);
}