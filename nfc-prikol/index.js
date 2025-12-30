const urlPPPPPP = new URLSearchParams(window.location.search);
const sounds_base = urlPPPPPP.get('sounds_base');

if (sounds_base == "default") {
  loadAndInsertContent('https://winnigames2024-original.github.io/api-k/nfc-prikol/random-sound/', 'content-container');
}


async function loadAndInsertContent(url, targetDivId) {
  try {
    const response = await fetch(url);
    const htmlContent = await response.text(); // Получаем HTML как текст

    const targetDiv = document.getElementById(targetDivId);

    targetDiv.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
    console.error('Ошибка при загрузке или вставке контента:', error);
    }
}
