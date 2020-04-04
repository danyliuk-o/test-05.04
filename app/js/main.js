// AOS.init();

const openModalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-window');
const closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    overlay.classList.add('open');
    modal.classList.add('open');
}

function closeModal() {
    overlay.classList.remove('open');
    modal.classList.remove('open');
}


function burgerMenu(selector) {
    const menu = document.querySelector(selector);
    const button = document.querySelector('.burger-menu_button');
    const links = document.querySelector('.burger-menu_link');
    const overlay = document.querySelector('.burger-menu_overlay');

    button.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    links.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const body = document.querySelector('body');
        menu.classList.toggle('burger-menu_active');
        body.classList.toggle('locked');

        if (menu.classList.contains('burger-menu_active')) {
            body.style('overlow', 'hidden');
        } else {
            body.style('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

var bar = new ProgressBar.Line(progress1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2500,
    color: '#27AE60',
    trailColor: 'transparent',
    trailWidth: 1,
    svgStyle: {
        width: '36%',
        height: '100%'
    },
    text: {
        style: {
            color: '#fff',
            position: 'absolute',
            left: '20px',
            top: '0',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: {
        color: '#27AE60'
    },
    to: {
        color: '#27AE60'
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 36) + ' %');
    }
});

bar.animate(1.0);

var bar = new ProgressBar.Line(progress2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2500,
    color: '#27AE60',
    trailColor: 'transparent',
    trailWidth: 1,
    svgStyle: {
        width: '70%',
        height: '100%'
    },
    text: {
        style: {
            color: '#fff',
            position: 'absolute',
            left: '20px',
            top: '0',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: {
        color: '#27AE60'
    },
    to: {
        color: '#27AE60'
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 70) + ' %');
    }
});

bar.animate(1.0);

var bar = new ProgressBar.Line(progress3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2500,
    color: '#27AE60',
    trailColor: 'transparent',
    trailWidth: 1,
    svgStyle: {
        width: '12%',
        height: '100%'
    },
    text: {
        style: {
            color: '#fff',
            position: 'absolute',
            left: '20px',
            top: '0',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: {
        color: '#27AE60'
    },
    to: {
        color: '#27AE60'
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 12) + ' %');
    }
});

bar.animate(1.0);


const element = document.querySelector('.country-choices');
const choices = new Choices(element, {
    removeItemButton: true,
    placeholderValue: 'USA'
});
