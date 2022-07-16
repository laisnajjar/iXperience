const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   
   const cardBody = document.getElementById('card-body');
   const movieNum = Math.floor(Math.random() * 10);
   const movieInput = document.getElementById('movie-input');
   const movie = movies[movieNum].explanation;
   movieInput.innerHTML = movie; 
   cardBody.append(movieInput);
   
   
   const guessInput = document.getElementById('guess-input');
   const submitButton = document.getElementById('submit-button');
   const showHintButton = document.getElementById('show-hint-button');

   submitButton.addEventListener('click', (event) => {
    const guess = guessInput.value;
    if(guess == movies[movieNum]){
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'correct';
        cardBody.append(resultDiv); 
    }
    else{
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'try again';
        cardBody.append(resultDiv);
    }
   });

   showHintButton.addEventListener('click', (event) => {
    const resultDiv = document.createElement('div');
        resultDiv.innerHTML = movie[movieNum].hint; 
        cardBody.append(resultDiv);
   });