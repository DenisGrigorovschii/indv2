import { getRandomActivity } from './activity.js';

document.addEventListener('DOMContentLoaded', () => {
    getRandomActivity();
    setInterval(getRandomActivity, 60000); // Обновление данных каждую минуту
});
