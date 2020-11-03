// take in user input
// compare to hidden word
  // hidden word displays length and spaces and punctuation

  //  hidden word will display correct letters when guessed

  let solution = 'i want to fight monsters! how about you?'

  let arrayOfSolution = solution.split('')
  
  let lengthSolution = arrayOfSolution.length
  
  let emptyBoard = []
  
  let wrongCounter = 0
  
  for(i = 0; i <= arrayOfSolution.length - 1; i++){ 
    if (  arrayOfSolution[i] == ('!') || (arrayOfSolution[i] == ('?'))
    || (  arrayOfSolution[i] ==('.')) || (arrayOfSolution[i] == (' '))
    || (  arrayOfSolution[i] ==(',')) ){
      emptyBoard.push(arrayOfSolution[i])
    } else {
      emptyBoard.push('_')
  }
  }
  
  //console.log(arrayOfSolution)
  console.log(emptyBoard)
  
  let hangman = (userGuess) => {
    //userGuess.toLowercase()
    //userGuess.trim()
    let found = 0
    found = arrayOfSolution.find(element => element == userGuess)
  
    if(found == undefined){
      wrongCounter++
      console.log(userGuess, 'is wrong!')
      }
    if(wrongCounter >= 7){
      console.log("YOU LOST! :P")
    }
  
    for(i = 0; i <= arrayOfSolution.length - 1; i++){ 
      if (userGuess == arrayOfSolution[i]){
        console.log(arrayOfSolution[i],' is correct!')
        emptyBoard[i] = userGuess
        console.log(emptyBoard)
        }
      }
      let underscoreChecker = emptyBoard.find(element => element == '_')
      if(underscoreChecker == undefined){
        console.log("YOU WIN!")
      }
    }
  
  // hangman('a')
  // hangman('i')
  // hangman('o')
  // hangman('b')
  // hangman('y')
  // hangman('u')
  // hangman('t')
  // hangman('n')
  // hangman('w')
  // hangman('h')
  // hangman('g')
  // hangman('f')
  // hangman('e')
  // hangman('r')
  // hangman('s')
  // hangman('m')
  // hangman('x')
  // hangman('x')
  
  
  // make array into real string
  // previous guesses
  
  console.log('a, i, o, b, y, u, t, n, w, h, g, f, e')