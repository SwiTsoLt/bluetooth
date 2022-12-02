const buttonElem = document.getElementById("btn")

buttonElem.addEventListener("click", bluetothConnectHandler)

function bluetothConnectHandler(event) {
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
    })
        .then(device => {
            console.log(device);
        })
        .catch(console.log);
}