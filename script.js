const messages = [
    "como que no kaka de mrd",
    "te kagaste mrd nunca mas",
    "ok casate con erick pues mrd",
    "jodete total abierto ya estas",
    "con razon todo chupeteado mrd",
    "quedate con la alcahueta de tu amiga pues mrd",
    "ok mrd, igual ni aprietas",
    "quedate con tu panzon de mrd pues kaka",
    "te kagaste csm, hoy te meto plomo"
    
];

function showMessage(message) {
    document.getElementById('responseMessage').textContent = message;
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (randomX > containerRect.width / 2 - noButton.offsetWidth / 2 &&
             randomX < containerRect.width / 2 + noButton.offsetWidth / 2 &&
             randomY > containerRect.height / 2 - noButton.offsetHeight / 2 &&
             randomY < containerRect.height / 2 + noButton.offsetHeight / 2);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    if (messages.length === 0) {
        messages = [
            "como que no kaka de mrd",
            "te kagaste mrd nunca mas",
            "ok casate con erick pues mrd",
            "jodete total abierto ya estas",
            "con razon todo chupeteado mrd",
            "quedate con la alcahueta de tu amiga pues mrd",
            "ok mrd, igual ni aprietas",
            "quedate con tu panzon de mrd pues kaka",
            "te kagaste csm, hoy te meto plomo"
        ];
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    messages.splice(randomIndex, 1); // Remover el mensaje mostrado

    showMessage(randomMessage);

     // Agregar y luego remover la clase para la animación de crecimiento
     yesButton.classList.add('grow');
     setTimeout(() => {
         yesButton.classList.remove('grow');
     }, 500); // 300 milisegundos (0.3 segundos)
 }
