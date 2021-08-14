
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
});



// somooth scroll
const anchors = document.querySelectorAll('a[href*="#"]');
const arrowDown = document.querySelectorAll('arrow-dwn');
anchors.forEach(link => {
    const blockID = link.getAttribute('href');
    $(link).on('click', function (e) {
        e.preventDefault()
        $('html,body').stop().animate({ scrollTop: $(blockID).offset().top }, 1000);
        e.preventDefault();
    });
});




// scroll 

const headerTop = document.querySelector('.header__top');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const WscrollTop = window.scrollY;

    // const headerTopHeight = headerTop.offsetHeight;
    const headerHeight = header.offsetHeight / 2;

    (WscrollTop > headerHeight) ? headerTop.classList.add('fixed') : headerTop.classList.remove('fixed')

    if (WscrollTop > headerHeight) {
        bookTableModal.style.display = 'none';
    }

});



// modal frame

const bookTB = document.querySelector('.bookTB');
const bookTableModal = document.querySelector('.booktable__modal');
const bookTableCrestik = document.querySelector('.crestik');
bookTB.addEventListener('click', (e) => {
    e.preventDefault();
    bookTableModal.style.display = 'flex';
    document.querySelector('body').classList.add('lock')

});
bookTableCrestik.addEventListener('click', (e) => {
    e.preventDefault();
    bookTableModal.style.display = 'none';
    document.querySelector('body').classList.remove('lock')


});


// sorting menu

const listOFmenu = document.querySelector('.delicious__menu-items'),
    bloksItem = document.querySelectorAll('.delicious__menu-products-item');


function filter() {
    listOFmenu.addEventListener('click', (e) => {
        const tgID = e.target.dataset.id;
        console.log(tgID)
        switch (tgID) {
            case 'all':
                getItems('delicious__menu-products-item');
                break
            case 'soupe':
                getItems(tgID);
                break
            case 'pizza':
                getItems(tgID);
                break
            case 'pasta':
                getItems(tgID);
                break
            case 'desert':
                getItems(tgID);
                break
            case 'wine':
                getItems(tgID);
                break
            case 'beer':
                getItems(tgID);
                break
            case 'drinks':
                getItems(tgID);
                break

        }

    });
}

function getItems(classname) {
    bloksItem.forEach(item => {
        if (item.classList.contains(classname)) {
            item.style.display = 'block';

        } else {
            item.style.display = 'none';
        }


    });
}
filter();

