/**
 * Функция для получения случайной активности с сервера и отображения на странице.
 * @returns {Promise<void>} Промис без возвращаемого значения.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error('Failed to fetch activity');
        }
        const data = await response.json();
        updateActivity(data.activity);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('activity').textContent = 'К сожалению, произошла ошибка';
    }
}

/**
 * Функция для обновления отображаемой активности на странице.
 * @param {string} activity Текст активности для отображения.
 */
function updateActivity(activity) {
    document.getElementById('activity').textContent = activity;
}
