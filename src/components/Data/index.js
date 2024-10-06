const Data = (props) =>{
    const data = {
       
         quiz : [
            {
              question: "What is the capital of France?",
              choices: ["Berlin", "Madrid", "Paris", "Rome"],
              correctAnswer: "Paris"
            },
            {
              question: "Who wrote the play 'Hamlet'?",
              choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
              correctAnswer: "William Shakespeare"
            },
            {
              question: "What is the largest planet in our solar system?",
              choices: ["Earth", "Jupiter", "Mars", "Saturn"],
              correctAnswer: "Jupiter"
            },
            {
              question: "Which element has the chemical symbol 'O'?",
              choices: ["Oxygen", "Gold", "Silver", "Helium"],
              correctAnswer: "Oxygen"
            },
            {
              question: "Which year did the Titanic sink?",
              choices: ["1912", "1915", "1905", "1920"],
              correctAnswer: "1912"
            }
          ]
          
      }
      return data
      
}
export default Data