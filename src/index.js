import './main';

const popup = document.querySelector('.popup');
const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.popup__section');
const bgContainer = document.querySelector('.popup__background');
const arrow = document.querySelector('.popup__arrow');
const sectionsProperty = {
    products: {
        width: 470,
        height: 300,
        left: 150
    },
    developers: {
        width: 500,
        height: 280,
        left: 280
    },
    company: {
        width: 280,
        height: 340,
        left: 400
    }
};

let activeSection;

const openPopup = (e) => {
    const {target} = e;
    const section = target.dataset.section;
    popup.classList.add('open');

    sections.forEach(item => {
        if (item.classList.contains(section)) {
            activeSection = item;
            activeSection.classList.add('active')
        }
    });

    for (const item in sectionsProperty) {
        if (item === section) {
            activeSection.style.width = sectionsProperty[item].width + 'px';
            activeSection.style.height = sectionsProperty[item].height + 'px';
            bgContainer.style.width = sectionsProperty[item].width + 'px';
            bgContainer.style.height = sectionsProperty[item].height + 'px';

            activeSection.style.transform = `translateX(${sectionsProperty[item].left}px)`;
            bgContainer.style.transform = `translateX(${sectionsProperty[item].left}px)`;
            arrow.style.transform = `translateX(${sectionsProperty[item].left}px) rotate(45deg)`;
        }
    }
};

const closePopup = (e) => {
    const {target} = e;
    popup.classList.remove('open');
    activeSection.classList.remove('active');
};

links.forEach(item => {
    item.addEventListener('mouseenter', openPopup);
    item.addEventListener('mouseleave', closePopup);
});
