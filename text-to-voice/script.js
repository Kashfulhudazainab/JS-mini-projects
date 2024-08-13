
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // Call getVoices() to retrieve the voices
    speech.voice = voices[0]; // Set the default voice

    // Populate the select element with available voices
    voiceselect.innerHTML = ''; // Clear existing options
    voices.forEach((voice, i) => {
        voiceselect.options[i] = new Option(voice.name, i); // Use index as value
    });
};

// Update the selected voice when the user selects a different option
voiceselect.addEventListener('change', () => {
    let selectedIndex = voiceselect.selectedIndex;
    speech.voice = voices[selectedIndex]; // Set the selected voice
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value; // Set the text to be spoken
    window.speechSynthesis.speak(speech); // Speak the text
});
