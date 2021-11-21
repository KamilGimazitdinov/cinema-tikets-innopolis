const modal = function() {
    const giftBtn = document.querySelector(".gift_button")
    const giftCloseBtn = document.querySelector(".modal_close")
    const giftSelection = document.querySelector(".modal")
    const giftModalWrapper = document.querySelector(".modal_wrapper")

    giftBtn.addEventListener("click", function() {
    giftSelection.style.display = "block"
    giftModalWrapper.style.display = "block"
    })

    giftCloseBtn.addEventListener("click", () => {
    giftSelection.style.display = "none"
    giftModalWrapper.style.display = "none"
    })
}

modal()