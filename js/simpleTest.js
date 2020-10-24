const changeBtn = () => {
    const selectMe = document.querySelector(".select-me");

    selectMe.addEventListener('click', ()=> {
        selectMe.classList.toggle("chagua-me")
    })
}

changeBtn();