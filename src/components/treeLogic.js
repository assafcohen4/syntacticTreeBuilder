const treeLogic = (textInput = "") => {

    let text = textInput 
    let taggedSentence;
    let constituentsArray = []

    //turned the sentence into an array of LetterProfiles. outer brackets tagged 1 & -1, one level inner 2 & -2 etc...
    taggedSentence = _tagSentence(text)
       

    let currentConstituent = ''

    for (let i = 0; i < taggedSentence.length; i++) {
        
        if(taggedSentence[i].tag > 0){
           
            let currentLevel = taggedSentence[i].tag
            
            for (let j = i; j < taggedSentence.length; j++) {
               
                if(taggedSentence[j].tag !== -currentLevel){
                    currentConstituent += taggedSentence[j].value
                }
                if(taggedSentence[j].tag == -currentLevel){
                    currentConstituent += taggedSentence[j].value
                    constituentsArray.push(new ConstituentProfile(j, currentConstituent, currentLevel))
                    currentConstituent = ''
                    break;
                }
                
            }
        }
        
    }
    return constituentsArray
}


const _tagSentence = (textInput = "") => {
    
    let text = textInput;
    let letterProfileArray = []
    let counter = 0;
    
    for (let i = 0; i < text.length; i++) {

        if (text.charAt(i) == '[') { 
            counter++ 
            letterProfileArray.push(
                new LetterProfile(i, text.charAt(i), _addNumTag(text.charAt(i), counter))
            )
        }
        else if (text.charAt(i) == ']') { 
            
            letterProfileArray.push(
                new LetterProfile(i, text.charAt(i), _addNumTag(text.charAt(i), counter))
            )
            counter--
        }
        else {
            letterProfileArray.push(
                new LetterProfile(i, text.charAt(i), 0)
            )  
        }
               
    }
    return letterProfileArray
}

const _addNumTag = (char, num) => {

    if (char == '[') return num
    else if (char == ']') return -num
    else return 0

}

class LetterProfile {
    constructor(id, value, tag){
        this.id = id
        this.value = value
        this.tag = tag
    }
}

class ConstituentProfile {
    constructor(id, value, level){
        this.id = id
        this.value = value
        this.level = level
    }
}

export default treeLogic