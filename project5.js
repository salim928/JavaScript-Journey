//Quiz App

const prompt = require("prompt-sync")()
const fs = require("fs")  //importing a file system that allows loading of files


function loadQuestions(){
    try {
        const data = fs.readFileSync("questions.json", "utf8")  //reading a file
        const questions = JSON.parse(data).questions  //this line takes the file and convert it to js object
        return questions

    } catch (error) {
        console.log("Error occured loading file", error)
    }
    return []
}

//Getting random questions
function getRandomQuestions(questions, numQuestions) {
    if(numQuestions > questions.length){
        numQuestions = questions.length
    }

    const shuffled = questions.sort(() => {
        //do this
        return 0.5 - Math.random()
    })
    return shuffled.slice(0, numQuestions)
}

function askQuestion(question) {
    console.log(question.question) //Retreiving the questions
    for(let i = 0; i < question.options; i++){
        const option = question.options[i]
        console.log(`${i + 1}.${option}`)
    }
}

