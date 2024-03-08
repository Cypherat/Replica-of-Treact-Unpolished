function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function toggleAnswer(wrapper) {
    const answer = wrapper.querySelector('.faq__describe');
    wrapper.classList.toggle('open');
}