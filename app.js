// Grab input off
const fileUpload = document.querySelector('#fileUpload');
const fileContent = document.querySelector('#myText');
fileContent.style.display = 'none';
const wordCount = document.getElementById('myCount');
const searchField = document.querySelector('#wordSearch')
const searchedWord = document.getElementById('myWord');
let textCount = 0;

// Set the current year for the footer
const date = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = date;

// Grab Modals off the DOM.
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const btn2 = document.getElementById('myBtn2');
const span = document.getElementsByClassName('close')[0];

/**
 * Click to open the modal.
 */
btn.onclick = () => {
    modal.classList.add('show');
}

/**
 * Click to open the modal.
 */
btn2.onclick = () => {
    modal.classList.add('show');
}

/**
 * Click the 'x' button on the modal.
 */
span.onclick = () => {
    modal.classList.remove('show');
}

/**
 * Click anywhere outside the modal.
 * 
 * @param {*} event 
 */
window.onclick = (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
}

/**
 * Handles reading the contents of the file that has been uploaded.
 */
const readFileContents = () => {
    textCount = 0;
    fileContent.value = '';
    for (const file of fileUpload.files) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            fileContent.innerHTML = fileReader.result.toString();
            const wordBank = fileContent.innerHTML.split(/[\s.]+/);
            wordBank.forEach((word) => {
                // Leave trim as a mistake.
                // Demo how to update the deployed app after initial deployment.
                if (word.toLowerCase().trim() === searchField.value.toLowerCase().trim()) {
                    textCount++;
                }
            });
            wordCount.innerHTML = textCount.toString();
        }
        // Close up the file
        fileReader.readAsText(file);
        // Render the results
        fileContent.style.display = 'flex';
    }
}

/**
 * Handles setting the searched keyword.
 */
const setSearchedWord = () => {
    searchedWord.innerHTML = searchField.value;
}

/**
 * Event listeners.
 * 
 * Note: The methods being called need to be declared first.
 */
fileUpload.addEventListener('change', readFileContents);
searchField.addEventListener('change', setSearchedWord);
