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
    

    function checkInputData() {

        if (!(attack && damageMax && damageMin && size && defence && hp)) {
            return output.textContent = "Заполни все ячейки для подсчета пробивки!";
        }

        const stats = [attack, damageMin, damageMax, size, defence, hp];
        for (let stat of stats) {
            for (let element of stat) {
                if ((isNaN(parseInt(element)))) {
                    return output.textContent = "Введены некорректные значения";
                }
            }
        }

    }

    if (checkInputData()) {
        return output.textContent
    }

    if (attack > defence) {
        totalDamageMin = Math.floor((damageMin * size * (1 + (attack - defence) * 0.05))/hp);
        totalDamageMax = Math.floor((damageMax * size * (1 + (attack - defence) * 0.05))/hp);
    } else {
        totalDamageMin = Math.floor((damageMin * size / (1 + (defence - attack) * 0.05))/hp);
        totalDamageMax = Math.floor((damageMax * size / (1 + (defence - attack) * 0.05))/hp);
    }

    output.innerHTML = `Будет убито от <span style="color: red; font-size: 45px;">${totalDamageMin}</span> до <span style="color: red; font-size: 45px;">${totalDamageMax}</span> существ`;
})