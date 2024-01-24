let output = document.querySelector('.output p');
const playButton = document.getElementById("playButton");

playButton.addEventListener('click', () => {
    const attack = document.querySelector("#attack").value;
    const damageMin = document.querySelector('#damageMin').value;
    const damageMax = document.querySelector('#damageMax').value;
    const size = document.querySelector('#size').value;
    const defence = document.querySelector('#defence').value;
    const hp = document.querySelector('#hp').value;
    let totalDamageMin = 0;
    let totalDamageMax = 0;

    if (attack > defence) {
        totalDamageMin = Math.floor((damageMin * size * (1 + (attack - defence) * 0.05))/hp);
        totalDamageMax = Math.floor((damageMax * size * (1 + (attack - defence) * 0.05))/hp);
    } else {
        totalDamageMin = Math.floor((damageMin * size / (1 + (defence - attack) * 0.05))/hp);
        totalDamageMax = Math.floor((damageMax * size / (1 + (defence - attack) * 0.05))/hp);
    }
    
    output.textContent = `Будет убито от ${totalDamageMin} до ${totalDamageMax} существ`;

})