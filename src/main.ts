import './style.css';
import anime from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const timeline = anime.timeline();
    timeline.add({
        targets: '#spiral-text',
        opacity: {
            value: [0, 1],
            duration: 3000,
            easing: 'easeOutQuad',
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
    timeline.add({
        targets: '.header-text > span',
        opacity: [0, 1],
        scale: [1.2, 1],
        duration: 700,
        delay: anime.stagger(400),
        easing: 'easeOutQuad',
    }, '-=1000');
    timeline.add({
        targets: 'hr.top-line',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    }, '-=300');
    timeline.add({
        targets: '#search',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    }, '-=300')
    timeline.add({
        targets: 'hr.bottom-line',
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
    })
}, false);
