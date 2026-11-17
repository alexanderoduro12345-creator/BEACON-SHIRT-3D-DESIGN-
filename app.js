const STORAGE_KEY = 'beacon-design-state';

const state = {
  shirtColor: '#dfe7ff',
  accentColor: '#8bb7ff',
  text: 'BEACON',
};

const shirtModel = document.getElementById('shirtModel');
const shirtColorInput = document.getElementById('shirtColor');
const accentColorInput = document.getElementById('accentColor');
const graphicTextInput = document.getElementById('graphicTextInput');
const graphicText = document.getElementById('graphicText');
const saveDesignButton = document.getElementById('saveDesignButton');

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  } catch (error) {
    console.warn('Unable to read saved Beacon design state.', error);
  }
}

function updatePreview() {
  shirtModel.style.setProperty('--shirt-color', state.shirtColor);
  shirtModel.style.setProperty('--print-color', state.accentColor);
  shirtModel.style.setProperty('--accent-color', state.accentColor);
  shirtColorInput.value = state.shirtColor;
  accentColorInput.value = state.accentColor;
  graphicTextInput.value = state.text;
  graphicText.textContent = state.text.toUpperCase();
}

function bindControls() {
  shirtColorInput.addEventListener('input', (event) => {
    state.shirtColor = event.target.value;
    saveState();
    updatePreview();
  });

  accentColorInput.addEventListener('input', (event) => {
    state.accentColor = event.target.value;
    saveState();
    updatePreview();
  });

  graphicTextInput.addEventListener('input', (event) => {
    state.text = event.target.value.trim() || 'BEACON';
    saveState();
    updatePreview();
  });

  saveDesignButton.addEventListener('click', () => {
    saveState();
    saveDesignButton.textContent = 'Saved';
    setTimeout(() => {
      saveDesignButton.textContent = 'Save concept';
    }, 1200);
  });
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
    } catch (error) {
      console.warn('Service worker registration failed.', error);
    }
  }
}

loadState();
bindControls();
updatePreview();
registerServiceWorker();
