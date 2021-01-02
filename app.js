/**
 * Copywrite Taylor Brauer | 2021
 */

// Search
const searchField = document.getElementById('searchField');
const searchedWord = document.getElementById('searchedWord');
// File
const fileField = document.getElementById('fileField');
const fileContent = document.getElementById('fileContent');
fileContent.style.display = 'none';
// Count
const numWords = document.getElementById('numWords');
let wordCount = 0;
// Copywrite Year
const date = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = date;
// Modal
const contactMeModal = document.getElementById('contactMeModal');
const navContactBtn = document.getElementById('navContactBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

/**
 * Sets the searched word.
 */
const setSearchedWord = (event) => {
    searchedWord.innerHTML = event.target.value;
}

/**
 * Handles the parsing of a file and counting the number of occurences for a searched word.
 */
const parseFileContents = (event) => {
    // Re-initialize values
    wordCount = 0;
    fileContent.value = '';
    for (const file of event.target.files) {
        console.log(file);
        // Get the contents of the file
        const fileReader = new FileReader();
        // Read the contents of the file
        fileReader.readAsText(file);
        // Operate on the contents of the file.
        fileReader.onload = () => {
            fileContent.innerHTML = fileReader.result;
            // Separate words in the file
            const wordBank = fileContent.innerHTML.split(/[\s.]+/);
            wordBank.forEach(word => {
                if (word.toLowerCase() === searchedWord.innerHTML.toLowerCase() &&
                    word.toLowerCase() !== '') {
                    wordCount++;
                }
            });
            // Assign the total word count.
            numWords.innerHTML = wordCount;
            // Display file contents if file has words
            fileContent.style.display = 'flex';
        }
    }
}

/**
 * ###### Event Listeners #########
 */
searchField.addEventListener('change', setSearchedWord);
fileField.addEventListener('change', parseFileContents);

/**
 * ##### Modal #######
 */

/**
 * Open the modal
 */
navContactBtn.onclick = () => {
    contactMeModal.classList.add('show');
}

/**
 * Close modal when clicking the 'x' in the top right.
 */
closeModalBtn.onclick = () => {
    contactMeModal.classList.remove('show');
}

/**
 * Close modal when clicking outside the modal.
 * 
 * @param {*} event 
 */
window.onclick = (event) => {
    if (event.target === contactMeModal) {
        contactMeModal.classList.remove('show');
    }
}