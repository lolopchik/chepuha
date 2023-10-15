let labelNode = document.querySelector (`#label`);
let nextNode = document.querySelector (`#next`);
let answerNode = document.querySelector (`#answer`);
let storyNode = document.querySelector (`#story`);
let count = 1;
let istory = ``;
nextNode.addEventListener(`click`, function () {
    if (count == 1) {
        istory = answerNode.value;
        count++;
        labelNode.innerHTML = `Где?`;
        answerNode.value = ``;
    } else if ( count == 2) {
        istory = istory + ` ` + answerNode.value;
        count++;
        labelNode.innerHTML = `С кем?`
        answerNode.value = ``;
    } else if (count == 3) {
        istory = istory + ` ` + answerNode.value;
        count++;
        labelNode.innerHTML = `Что делали?`
        answerNode.value = ``;
    } else if (count ==4 ) {
        istory = istory + ` ` + answerNode.value;
        count++;
        labelNode.innerHTML = `Зачем?`;
        answerNode.value = ``;
    } else if (count== 5) {
        istory = istory + ` ` + answerNode.value;
        count++;
        labelNode.innerHTML = `Чем дело кончилось?`
        answerNode.value = ``;
    } else if (count == 6) {
        istory = istory + ` ` + answerNode.value;
        count= 1;
        labelNode.classList.add(`d-none`);
        answerNode.classList.add(`d-none`);
        nextNode.classList.add(`d-none`);
        storyNode.classList.add(`important`)
        storyNode.innerHTML=istory;
        
    }
});
