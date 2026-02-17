addEventListener('scroll', () => {
    const element = document.querySelectorAll('.smallLogo');
    if (window.innerWidth > 1200) { // 786
        const currentScrollPos = window.scrollY;
        element.forEach(el => {
            el.classList.add('position-absolute');
            el.style.transform = `rotate(28deg) translateY(${currentScrollPos * -0.1}px)`;
        })
    } else {
        element.forEach(el => {
            el.classList.remove('position-absolute');
        })
    }
})

addEventListener('resize', () => {
    const element = document.querySelectorAll('.smallLogo');
    if (window.innerWidth > 1200) {
        element.forEach(el => {
            el.classList.add('position-absolute');
        })
    } else {
        element.forEach(el => {
            el.classList.remove('position-absolute');
        })
    }
})