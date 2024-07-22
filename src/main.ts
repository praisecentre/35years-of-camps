import './style.css';
import anime from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const timeline = anime.timeline();
    timeline.add({
        targets: '#spiral-text',
        opacity: {
            value: [0, 1],
            duration: 3000
        },
        scale: {
            value: [7, 1],
            duration: 6000
        },
        rotate: {
            value: ['-75deg', '0deg'],
            duration: 8000
        },
        easing: 'easeOutQuad',
    });
    timeline.add({
        targets: '.intro-text > span',
        opacity: 1,
        scale: [1.5, 1],
        duration: 500,
        delay: anime.stagger(300),
        easing: 'easeOutQuad',
    }, '-=1000');
    timeline.add({
        targets: 'hr',
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
    }, '-=500')
}, false);
