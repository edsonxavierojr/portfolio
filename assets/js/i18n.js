async function applyLanguage(lang) {
    // 1. Salva a preferência para as próximas páginas
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
        
        // 2. Mostra o body apenas após a tradução (opcional, evita o flash)
        document.body.style.visibility = 'visible';

    } catch (error) {
        console.error("Erro ao carregar o arquivo de idioma:", error);
        document.body.style.visibility = 'visible';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Esconde o body inicialmente para evitar o erro visual de duplicidade
    document.body.style.visibility = 'hidden';

    // 3. Tenta primeiro o LocalStorage, depois o navegador
    const savedLang = localStorage.getItem('preferredLang');
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLang = savedLang || (userLanguage.toLowerCase().startsWith('pt') ? 'pt-br' : 'en');
    
    applyLanguage(defaultLang);
});