import './style.css';
import anime from 'animejs';
import data from './data';

type Data = {
    year: number
    name: string
    message: string
}

function debounce(func:any, delay:number) {
    let timeout:number|null = null
    return (...args:any[]) => {
        if(timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func(...args)
            timeout = null
        }, delay)
    }
}

let viewed:number[] = [];
function randomData(): Data {
    // Make sure we don't display the same data until we have gone through all the data
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
    const randomNotificationEl = document.getElementById('random-notification');

    let dataOutCompleted = true;
    let dataRandomStart = false;
    let userIsSearching = false;
    let timeoutId:number|null = null;

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
            setTimeout(introOutTl.play, 5000);

            if (!randomNotificationEl)
                return;

            let randomNotificationCount = 4;
            randomNotificationEl.style.opacity = '1';

            const randomNotificationInterval = setInterval(
                () => {
                    if (randomNotificationCount < 0) {
                        clearInterval(randomNotificationInterval);
                        return;
                    }

                    randomNotificationEl.textContent = `Start random in ${randomNotificationCount--}s`;
                },
                1000,
            )
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
        if (userIsSearching || !dataRandomStart || !dataOutCompleted) {
            requestAnimationFrame(startRandom);
            return;
        }

        dataOutCompleted = false;

        const data = randomData();
        setData(data);
        dataInTl.restart();

        let timeout = 3000;
        timeout += (data.message?.length ?? 0) * 60;

        timeoutId = setTimeout(dataOutTl.restart, timeout);

        requestAnimationFrame(startRandom);
    };
    requestAnimationFrame(startRandom);

    let displayingSearchResult: number = 0;
    let searchResult:Data[] = [];
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e:any) => {
            const value = e.target.value;
            if (value.length === 0) {
                userIsSearching = false;
                dataRandomStart = true;
                return;
            }

            userIsSearching = true;
            searchResult = data
                .filter((d) => {
                    return d.name.toLowerCase().search(value.toLowerCase()) >= 0
                        || d.year.toString().search(value.toLowerCase()) >= 0;
                });
            displayingSearchResult = 0;

            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
                dataOutTl.restart();
            }
        }, 500));
    }

    const displaySearchResult = () => {
        if (!userIsSearching || !dataOutCompleted) {
            requestAnimationFrame(displaySearchResult);
            return;
        }

        if (displayingSearchResult >= searchResult.length) {
            // loop back in after a period of time of nothingness
            displayingSearchResult = 0;
            timeoutId = setTimeout(() => requestAnimationFrame(displaySearchResult), 1500);
            return;
        }

        dataOutCompleted = false;
        const data = searchResult[displayingSearchResult++];
        setData(data);
        dataInTl.restart();

        let timeout = 3000;
        timeout += (data.message?.length ?? 0) * 60;
        timeoutId = setTimeout(dataOutTl.restart, timeout);
        requestAnimationFrame(displaySearchResult);
    }
    requestAnimationFrame(displaySearchResult);

}, false);
