//declaration string called story
let story = "last weekend i wa in Paris beautifull ";

//word by word
let storyWords = story.split(' ');
console.log(storyWords);

//join word
console.log(storyWords.join(' '));

//removing word you want
storyWords = storyWords.filter((fill) => fill !== 'i');

//joining word after removing word
console.log(storyWords.join(' '));

//missspelling word
let missWord = 'wa';

//counting
let count=0;
    storyWords.forEach(word);
    function word (){
        count +=1;
    }

 //  Correct spelling      
const spellCheckedWords = storyWords.map(word => {
    if (word === missWord) {
        return 'was';  
    } else {
        return word;
    }
    
});
//declaration bad word
let badword='Paris';
let badwordindex=storyWords.findIndex(word => word === badword);

//replace bad word into really
storyWords[4]='really';

//if word length less than chacter dispaly false when length word is great or equal charter display true
const lengthCheck = storyWords.every(word => word.length <=10);
//check word have character is greater than or equal 10 replace good
const longWord = storyWords.find(word => word.length >= 10);
if (longWord) {
    const replaceWord = 'stunning'; 
    const index = storyWords.indexOf(longWord);
    storyWords[index] = replaceWord;
    
}

//calling
    console.log(count);
    console.log(storyWords.join(' '));
    console.log(spellCheckedWords.join(' '));
    console.log(badwordindex);
    console.log(lengthCheck);
    
    
    
    