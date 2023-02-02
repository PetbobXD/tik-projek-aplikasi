// Get a reference to the textarea
const notepad = document.getElementById("notepad");

// Save the content of the notepad to local storage every 1 seconds
setInterval(() => {
  localStorage.setItem("notepadContent", notepad.value);
}, 1000);

// Load the content of the notepad from local storage on page load
window.addEventListener("load", () => {
  notepad.value = localStorage.getItem("notepadContent") || "";
});
