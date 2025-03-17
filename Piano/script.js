// script.js
const keys = document.querySelectorAll(".key");

// Map keys to their corresponding audio files
const keySounds = {
  C: "sounds/a6.mp3",
  "C#": "sounds/c3.mp3",
  D: "sounds/c6.mp3",
  "D#": "sounds/c61.mp3",
  E: "sounds/d6.mp3",
  F: "sounds/la.mp3",
  "F#": "sounds/fa.mp3",
  G: "sounds/g6.mp3",
  "G#": "sounds/do.mp3",
  A: "sounds/re.mp3",
  "A#": "sounds/si.mp3",
  B: "sounds/sol.mp3",
};

// Play sound when a key is clicked
keys.forEach((key) => {
  key.addEventListener("click", () => playSound(key.dataset.note));
});

// Play sound when a key is pressed on the keyboard
document.addEventListener("keydown", (e) => {
  const keyMap = {
    a: "C",
    w: "C#",
    s: "D",
    e: "D#",
    d: "E",
    f: "F",
    t: "F#",
    g: "G",
    y: "G#",
    h: "A",
    u: "A#",
    j: "B",
  };

  const key = keyMap[e.key];
  if (key) {
    playSound(key);
    const keyElement = document.querySelector(`[data-note="${key}"]`);
    keyElement.classList.add("active");
  }
});

// Remove active class when key is released
document.addEventListener("keyup", (e) => {
  const keyMap = {
    a: "C",
    w: "C#",
    s: "D",
    e: "D#",
    d: "E",
    f: "F",
    t: "F#",
    g: "G",
    y: "G#",
    h: "A",
    u: "A#",
    j: "B",
  };

  const key = keyMap[e.key];
  if (key) {
    const keyElement = document.querySelector(`[data-note="${key}"]`);
    keyElement.classList.remove("active");
  }
});

// Function to play sound
function playSound(note) {
  const audio = new Audio(keySounds[note]);
  audio.play();
}
