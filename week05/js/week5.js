// const quiz = [
//     { name: "Superman",realName: "Clark Kent" },
//     { name: "Wonder Woman",realName: "Diana Prince" },
//     { name: "Batman",realName: "Bruce Wayne" },
// ];

// const game = {
//     start(quiz){
//         this.questions = [...quiz];
//         this.score = 0;
//         // main game loop
//         for(const question of this.questions){
//         this.question = question;
//         this.ask();
//         }
//         // end of main game loop
//         this.gameOver();
//     },
//     ask(){
//         const question = `What is ${this.question.name}'s real name?`;
//         const response =  prompt(question);
//         this.check(response);
//     },
//     check(response){
//         const answer = this.question.realName;
//         if(response === answer){
//         alert('Correct!');
//         this.score++;
//         } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//         }
//     },
//     gameOver(){
//         alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//     }
// }

function amIOldEnough(age){
    console.log(age);
        if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
        } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
        } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}

function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}

amIOldEnough(15);
console.log(imaginarySquareRoot(4));
