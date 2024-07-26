import './style.css';
import anime from 'animejs';
import data from './data';

type Data = {
    year: number
    name: string
    message: string
}

let viewed:number[] = [];
function randomData(): Data {
    let random = Math.floor(Math.random() * data.length);
    while (viewed.includes(random)) {
        random = Math.floor(Math.random() * data.length);
    }

    viewed.push(random);
    if (viewed.length === data.length) {
        viewed = [];
    }

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
        easing: 'easeInQuad',
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
    }, '-=200')
    dataOutTl.add({
        targets: '.year',
        opacity: 0,
        translateX: '200%',
        easing: 'easeOutQuad'
    }, '-=500')

    const dataInTl = anime.timeline({
        autoplay: false,
        duration: 800,
        easing: 'easeOutQuad',
    })
        .add({
            targets: '.year',
            opacity: [0, 0.1],
            translateX: ['-100%', 0],
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
            const spiralWrapperEl = document.querySelector('.spiral-wrapper') as HTMLElement;
            const dataContainerEl = document.querySelector('.result-container') as HTMLElement;

            if (spiralWrapperEl) spiralWrapperEl.style.display = 'none';
            if (dataContainerEl) dataContainerEl.style.display = 'block';

            dataRandomStart = true;
        }
    })
    const introTl = anime.timeline({
        autoplay: false,
        complete: () => {
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
        targets: '.input-wrapper',
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

        let timeout = 3000;
        timeout += (data.message?.length ?? 0) * 50;

        setTimeout(dataOutTl.restart, timeout);

        requestAnimationFrame(startRandom);
    };

    requestAnimationFrame(startRandom);

}, false);
