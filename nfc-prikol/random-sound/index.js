// Массив путей к вашим аудиофайлам
const audioFiles = [
    'https://winnigames2024-original.github.io/api-k/nfc-prikol/diadia-sasha.mp3',
    'https://winnigames2024-original.github.io/api-k/nfc-prikol/bobr-kurva.mp3',
    'https://winnigames2024-original.github.io/api-k/nfc-prikol/!!!PONOS!!!.mp3',
    'https://winnigames2024-original.github.io/api-k/nfc-prikol/pam-pam-pam.mp3'
];

const playButton = document.getElementById('playButton');

function playRandomPrikolinyiySound() 
{
    // 1. Получаем случайный индекс
    const randomIndex = Math.floor(Math.random() * audioFiles.length);

    // 2. Получаем путь к файлу
    const randomAudioFile = audioFiles[randomIndex];

    // 3. Создаем новый Audio объект
    const audio = new Audio(randomAudioFile);

    // 4. Воспроизводим звук
    audio.play()
        .then(() => {
            console.log(`Воспроизведен: ${randomAudioFile}`);
        })
        .catch(error => {
            console.error(`Ошибка при воспроизведении: ${error}`);
        });
};
