import './style.css';
import anime from 'animejs';
import data from './data';

type Data = {
    year: number
    name: string
    message: string
}

function randomData(): Data {
    const random = Math.floor(Math.random() * data.length);
    return data[random];
}

function setData(data: Data): void {
    const yearEl = document.querySelector('.year');
    const nameEl = document.querySelector('.name');
    const messageEl = document.querySelector('.message');

    if (yearEl) yearEl.textContent = data.year.toString();
    if (nameEl) nameEl.textContent = data.name;
    if (messageEl) messageEl.textContent = data.message;
}

document.addEventListener('DOMContentLoaded', () => {
    let dataOutCompleted = true;
    let dataRandomStart = false;
    const dataOutTl = anime.timeline({
        autoplay: false,
        duration: 500,
        easing: 'easeOutQuad',
        complete: () => dataOutCompleted = true,
    })
    dataOutTl.add({
        targets: '.message',
        opacity: [1, 0],
        translateX: [0, 0],
        translateY: [0, '100%'],
    })
    dataOutTl.add({
        targets: '.name',
        opacity: [1, 0],
        translateX: [0, 0],
        translateY: [0, '100%'],
    }, '-=300')
    dataOutTl.add({
        targets: '.year',
        opacity: 0,
        translateX: '200%'
    }, '-=500')

    const dataInTl = anime.timeline({
        autoplay: false,
        duration: 800,
        easing: 'easeOutQuad',
    })
        .add({
            targets: '.year',
            opacity: [0, 0.1],
            translate: ['-100%', 0],
        })
        .add({
            targets: '.name',
            opacity: [0, 1],
            translateX: ['50%', 0],
            translateY: [0, 0],
        }, '-=600')
        .add({
            targets: '.message',
            opacity: [0, 1],
            translateX: ['50%', 0],
            translateY: [0, 0],
        }, '-=600')
        .add({
            targets: '.year',
            translateX: '250%',
            duration: 100000,
            easing: 'linear',
        }, '-=300')

    const introOutTl = anime({
        autoplay: false,
        targets: '#spiral-text',
        opacity: {
            value: 0,
            easing: 'linear',
            delay: 200,
            duration: 800,
        },
        scale: {
            value: 10,
            easing: 'easeInCubic',
            delay: 200,
            duration: 800,
        },
        rotate: {
            value: '75deg',
            easing: 'easeInCubic',
            duration: 1000,
        },
        complete: () => {
            document.querySelector('.spiral-wrapper').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';

            dataRandomStart = true;
        }
    })
    const introTl = anime.timeline({
        autoplay: false,
        complete: (anime) => {
            console.log(anime);
            setTimeout(introOutTl.play, 5500);
        }
    });
    introTl.add({
        targets: '#spiral-text',
        opacity: {
            value: [0, 1],
            duration: 3000,
            easing: 'linear',
        },
        scale: {
            value: [7, 1],
            duration: 6000,
            easing: 'easeOutCubic',
        },
        rotate: {
            value: ['-75deg', '0deg'],
            duration: 8000,
            easing: 'easeOutQuad',
        },
    });
    introTl.add({
        targets: '.header-text > span',
        opacity: [0, 1],
        scale: [1.2, 1],
        duration: 700,
        delay: anime.stagger(400),
        easing: 'easeOutQuad',
    }, '-=1000');
    introTl.add({
        targets: 'hr.top-line',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    }, '-=300');
    introTl.add({
        targets: '#search',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    }, '-=300')
    introTl.add({
        targets: 'hr.bottom-line',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    });


    setTimeout(introTl.play, 500);

    const startRandom = () => {
        if (!dataRandomStart || !dataOutCompleted) {
            requestAnimationFrame(startRandom);
            return;
        }

        dataOutCompleted = false;

        const data = randomData();
        setData(data);
        dataInTl.restart();
        let timeout = data ? 4000 : 10000;
        setTimeout(dataOutTl.restart, timeout);

        requestAnimationFrame(startRandom);
    };

    requestAnimationFrame(startRandom);

}, false);
