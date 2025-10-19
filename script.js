
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const maxLength = parseInt(textarea.maxLength);
textarea.addEventListener('input', updateCounter);

function updateCounter() {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxLength} characters`;

    if (currentLength >= maxLength) {
        warning.textContent = 'Character limit exceeded!';
        textarea.value = textarea.value.substring(0, maxLength);
    } else {
        warning.textContent = '';
    }
}
