const urlPPPPPP = new URLSearchParams(window.location.search);
const sounds_base = urlPPPPPP.get('sounds_base');

if (sounds_base == "default") {
  loadAndInsertContent('https://winnigames2024-original.github.io/api-k/nfc-prikol/random-sound/', 'content-container');
}
