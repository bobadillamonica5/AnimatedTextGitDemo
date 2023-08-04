function rgb(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

let letters = document.querySelectorAll('.letter')
let colorChange = setInterval( function(){
    for (let letter of letters){
        letter.style.color = rgb();
    }
}, 1000);