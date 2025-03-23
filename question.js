class Question{
    #questionText
    //string tömb lesz
    #answers
    #rightAnswer

    get questionText(){
        return this.#questionText;
    }

    get answers(){
        return this.#answers;
    }

    get righAnswers(){
        return this.#rightAnswer;
    }

    constructor(questionText, answers, righAnswers){
        this.#questionText = questionText;
        this.#answers = answers;
        this.#rightAnswer = righAnswers;
    }
}