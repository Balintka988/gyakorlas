/**
 * @callback NextQuestionCallback
 * @callback NextAnswersCallback
 * @callback FinishCallback
 */
class Manager{
    #array;
    #currentQuestionNumber
    /**
     * @type {NextAnswersCallback}
     */
    #nextAnswersCallback
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback
    /**
     * @type {FinishCallback}
     */
    #finishCallback
    /**
     * @type {obj}
     */
    #selectedAnswer

    /**
     * 
     * @param {Question[]} Question
     */
    constructor(array = []){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#selectedAnswer ={};
    }

    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }

    setNextAnswersCallback(callback){
        this.#nextAnswersCallback = callback;
    }

    setFinishCallback(callback){
        this.#finishCallback = callback;
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer;
        this.#currentQuestionNumber++;
        if(this.#currentQuestionNumber < this.#array.length){
            this.#nextQuestionCallback(this.#array[this.#currentQuestionNumber].questionText);
            this.#nextAnswersCallback(this.#array[this.#currentQuestionNumber].answers);
        }
        else{
            let counter = 0;
            for (let i = 0; i < this.#array.length; i++) {
                if (this.#array[i].rightAnswer === this.#selectedAnswer[i]) {
                    counter++;
                }
            }
            this.#finishCallback(`A helyesen megválaszoltak száma: ${this.#array.length}/${counter}`)
        }
    }
    //EZ más
    start(){
        this.#nextQuestionCallback(this.#array[0].questionText);
        this.#nextAnswersCallback(this.#array[0].answers);
    }
}