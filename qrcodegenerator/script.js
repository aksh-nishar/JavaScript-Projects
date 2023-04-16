const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrInput = wrapper.querySelector(".form input");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value; // if the input is empty, then return
    if (!qrValue) {
        return;
    } else {
        // getting a QR code of user entered value using the qrserver
        // api and passing the api returned img src to qrImg
        generateBtn.innerText = "Generating QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    }
    qrImg.addEventListener("load", () => {  // once QR code img loaded
        wrapper.classList.add("active");

        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});