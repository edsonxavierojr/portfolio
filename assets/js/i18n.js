document.documentElement.classList.add('i18n-loading');

async function applyLanguage(lang) {
    document.documentElement.classList.add('i18n-loading');
    localStorage.setItem('preferredLang', lang);

    try {
        const isProjectPage = window.location.pathname.includes('selfrecyclabletrashcan');
        const prefix = isProjectPage ? 'selfrecyclabletrashcan-' : 'main-';
        const basePath = isProjectPage ? '../../assets/i18n/' : './assets/i18n/';
        
        const response = await fetch(`${basePath}${prefix}${lang}.json`);
        if (!response.ok) throw new Error(`Não foi possível carregar: ${prefix}${lang}.json`);
        
        const translations = await response.json();

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), translations);

            if (translation) {
                element.innerHTML = translation;
            }
        });
        
        document.documentElement.lang = lang === 'pt-br' ? 'pt-BR' : 'en';
        
        document.documentElement.classList.remove('i18n-loading');

    } catch (error) {
        console.error("Erro ao carregar o arquivo de idioma:", error);
        document.documentElement.classList.remove('i18n-loading');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const savedLang = localStorage.getItem('preferredLang');
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLang = savedLang || (userLanguage.toLowerCase().startsWith('pt') ? 'pt-br' : 'en');

    applyLanguage(defaultLang);
});