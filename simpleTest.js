document.querySelector('.empty-seat').onclick = changeColor;

function changeColor() {
    document.querySelector('.seatNo').style.backgroundColor = "#1d3d70";
    document.querySelector('.seatNo').style.color = "#fff";
    return false;
}