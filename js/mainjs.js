function SelectSeat () {
    var emptySeat = document.querySelector('.seat-row');
    var selectMe = document.querySelector('.select-me');

    selectMe.addEventListener('click', function () {
        emptySeat.classList.toggle('seat-empty')
    });
}

SelectSeat();