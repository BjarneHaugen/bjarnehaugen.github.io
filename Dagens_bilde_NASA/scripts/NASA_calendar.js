function fetchPhotoByDate() {
    const date = document.getElementById('datePicker').value;
    if (!date) {
        alert('Please select a date.');
        return;
    }

    window.location.href = `index.html?date=${date}`;
}
