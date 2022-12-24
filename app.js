document.getElementById("button").addEventListener("click", changeColor);

function changeColor() {
    const randomHexCode = "1234567890ABCDEF";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
       let code = randomHexCode[Math.floor(Math.random() * 16)];    
       hexCode = hexCode + code;
    }

    let element =  document.getElementById("canvas");
    element.style.backgroundColor = hexCode;
    console.log(hexCode);
}