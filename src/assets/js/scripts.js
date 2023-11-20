document.addEventListener('alpine:init', () => {
    Alpine.store('elva', {
        init() {
            this.theme = localStorage.getItem('theme') === null ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : localStorage.getItem('theme')
            this.scrollPosition = window.scrollY
        },
        theme: null,
        scrollPosition: 0,
        scrollPercent: 0,
        themeToggle() {
            (this.theme === 'light') ? this.theme = 'dark' : this.theme = 'light'
            localStorage.setItem('theme', this.theme)
        },
        scrollPositionUpdate() {
            this.scrollPosition = window.scrollY
            this.scrollPercent = Math.round(((document.body.scrollTop || document.documentElement.scrollTop) / ( document.documentElement.scrollHeight - document.documentElement.clientHeight )) * 100)
        }
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
             mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
