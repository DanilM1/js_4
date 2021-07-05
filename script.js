// Алгоритм работы игры "Угадайка". Учебная версия. Модуль 11. Год 2021.

import {limitContent, question, answer, lessMore, true__, end, numbers} from './content.js';

let

buf = [0, '', '', 0, 0, 0],

bottom_ = document.querySelector('#bottom'),
top_ = document.querySelector('#top'),
button_start_ = document.querySelector('#button_start'),
bottom__ = document.querySelector('#bottom_'),
top__ = document.querySelector('#top_'),
error_1 = document.querySelector('#error_1'),
error_2 = document.querySelector('#error_2'),
start_ = document.querySelector('#start'),
game_ = document.querySelector('#game'),
question_ = document.querySelector('#question'),
questionN_ = document.querySelector('#questionN'),
less_ = document.querySelector('#less'),
true_ = document.querySelector('#true'),
more_ = document.querySelector('#more'),
end_ = document.querySelector('#end'),
button_ = document.querySelector('#button');

buf[0] = Math.round(Math.random() * 1);
bottom_.innerHTML = limitContent[buf[0]][0];
top_.innerHTML = limitContent[buf[0]][1];

bottom__.addEventListener('click', 
(event) => {
    top_.style.display = 'none';
    top__.style.display = 'none';
    top__.value = '';
    button_start_.style.display = 'none';
    error_2.style.display = 'none';
});

bottom__.addEventListener('input', 
(event) => {
    buf[1] = event.target.value;
    if (+buf[1] === -0) {
        top_.style.display = 'none';
        top__.style.display = 'none';
    }
    else {
        if (+buf[1] < -999 || +buf[1] > 999) {
            error_1.style.display = 'block';
            top_.style.display = 'none';
            top__.style.display = 'none';
        }
        else {
            error_1.style.display = 'none';
            top_.style.display = 'inline';
            top__.style.display = 'inline';
        }
    }
});

top__.addEventListener('input', 
(event) => {
    buf[2] = event.target.value;
    if (+buf[2] < +buf[1] || +buf[2] > 999) {
        error_2.style.display = 'block';
        button_start_.style.display = 'none';
    }
    else {
        error_2.style.display = 'none';
        button_start_.style.display = 'inline';
    }
});

button_start_.addEventListener('click', 
(event) => {
    event.preventDefault();

    start_.style.display = 'none';
    game_.style.display = 'grid';

    buf[0] = Math.round(Math.random() * 1);
    less_.innerHTML = lessMore[0][buf[0]];
    more_.innerHTML = lessMore[1][buf[0]];

    true_.innerHTML = true__[Math.round(Math.random() * 5)];

    end_.innerHTML = end[Math.round(Math.random() * 2)];

    buf[3] = 1;

    question_.innerHTML = question[Math.round(Math.random() * 2)] + ' ' + buf[3];

    buf[0] = Math.floor((+buf[1] + +buf[2]) + 999);
    buf[4] = Math.abs(buf[0] / 2);
    questionN_.innerHTML = 'Загаданное число больше или меньше ' + Math.floor(buf[0] - 999) + '?';

    less_.addEventListener('click', 
    (event) => {
        buf[3]++;
        question_.innerHTML = question[Math.round(Math.random() * 2)] + ' ' + buf[3];
        buf[0] -= buf[4];
        if (buf[5] === 2) {
            buf[4] /= 2;
        }
        buf[5] = 1;
        buf[4] = Math.max(buf[4], 1);
        questionN_.innerHTML = 'Загаданное число больше или меньше ' + Math.floor(buf[0] - 999) + '?';
    });

    more_.addEventListener('click',
    (event) => {
        buf[3]++;
        question_.innerHTML = question[Math.round(Math.random() * 2)] + ' ' + buf[3];
        buf[0] += buf[4];
        if (buf[5] === 1) {
            buf[4] /= 2;
        }
        buf[5] = 2;
        buf[4] = Math.max(buf[4], 1);
        questionN_.innerHTML = 'Загаданное число больше или меньше ' + Math.floor(buf[0] - 999) + '?';
    });

    true_.addEventListener('click', 
    (event) => {
        question_.innerHTML = answer[Math.round(Math.random() * 5)] + ' ' + buf[0];
        questionN_.innerHTML = 'Спасибо за игру!';
        button_.style.display = 'none';
    });

    end_.addEventListener('click', 
    (event) => {
        window.location.reload();
    });
});