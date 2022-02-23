const advice = document.querySelector('#advice');
const adviceNumber = document.querySelector('#number');
const button = document.querySelector('button')
function triger(){
    button.addEventListener('click', ()=>{
        const rand = Math.ceil(Math.random()* 224)
        fetch(`https://api.adviceslip.com/advice/${rand}`)
        .then(response => response.json())
        .then(data => {
            adviceNumber.innerHTML = `Number ${data.slip.id}`;
            advice.innerHTML = data.slip.advice;
        })
    })
}
triger();