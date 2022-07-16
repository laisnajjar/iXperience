console.log('hello');
const target = Math.floor(Math.random() * 11);
console.log(target);
const cardBody = document.getElementById('card-body');
const guessInput = document.getElementById('guess-input');
const btn = document.getElementById('button');

btn.addEventListener('click', (event) => {
    const guess = guessInput.value;
    if(guess != target){
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'incorrect, try again';
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');      
        cardBody.append(resultDiv);
        }
    else {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'correct';
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');      
        cardBody.append(resultDiv);
    }
});
