const navMain = document.querySelector('.sidebar-main-links ul');
const navExtra = document.querySelector('.sidebar-extra-links ul')
const mobileNav = document.querySelector('.mobile-nav')

mobileNav.appendChild(navMain.cloneNode(true));
mobileNav.appendChild(navExtra.cloneNode(true));

const openMenu = document.getElementById('mobile-menu-open')
const closeMenu = document.getElementById('menu-close')

openMenu.addEventListener('click', ()=> {
    mobileNav.classList.remove('hidden')
})

closeMenu.addEventListener('click', ()=> {
    mobileNav.classList.add('hidden')
})