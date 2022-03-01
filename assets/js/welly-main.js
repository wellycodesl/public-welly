console.log('Welly v1.0.0');

const menuMoblie = (trigger, menu) => {
    console.log('menuMobile');
    const btnTrigger = document.querySelectorAll(trigger);
    const contentMenu = document.querySelector(menu);

    console.log({ btnTrigger, contentMenu });

    const toggleMenu = () => {
        const state = contentMenu.getAttribute('aria-hidden');
        if (state === 'true') {
            contentMenu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        } else {
            contentMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    }

    btnTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleMenu();
        })
    });

}


window.addEventListener('load', () => {
    menuMoblie('[data-welly-js="trigger__menu"]', '#main__menu');
}) 
