//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? Hints: #44, #7 7 7, #732


// question 1:
function isUnique(str){ 
    let hash = {};
    for(let i = 0; i < str.length; i++){
        if(hash[str[i]]){
            return false;
        }
        hash[str[i]] = true;
    }
    return true;
}

// question 2:
//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let hash = {};
    for(let i = 0; i < str1.length; i++){
        if(hash[str1[i]]){
            hash[str1[i]]++;
        }else{
            hash[str1[i]] = 1;
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(hash[str2[i]]){
            hash[str2[i]]--;
        }else{
            return false;
        }
    }
    return true;
}




const URLifyInput = "Mr John Smith";
function URLify(str){
    return str.split(' ').join('%20');
}
// console.log(URLify(URLifyInput));

//Palindrome Permutation
//Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function palindromePermutation(str){ // very good qustion 
    let hash = {}
    str = str.toLowerCase().split(' ').join('');
    for (let i=0;i < str.length; i++){
        if(hash[str[i]]){
            hash[str[i]]++;
        } else {
            hash[str[i]] = 1;
        }
    }

    let oddCount = 0;
    for (let key in hash){
        if(hash[key] % 2 !== 0){
            oddCount++;
        }
    }

    if(oddCount > 1){
        return false;
    }
    return true;
}

const palindromePermutationInput = "Tact Coa";
// console.log(palindromePermutation(palindromePermutationInput))


// 
function oneWay( str1, str2) {
    let lengthDiff = Math.abs(str1.length - str2.length);
    if( lengthDiff > 1){
        return false;
    }


    if (lengthDiff === 0 ) {
        let diffNum = 0
        for (let i = 0 ; i < str1.length; i++){
            if (str1[i] !== str2[i]){
                if (diffNum < 1){
                    return false
                }
                diffNum = diffNum + 1 // thats wird i can just do diffNum = 1 
            } 
        }
    }
    

    if (lengthDiff === 1 ){
        let diffNum = 1
        for (let i = 0 ; i < str1.length; i++){
            for (let j = 0 ; j < str2.length; j++){
            }
            // i think i need map it into hash table.

        }
    }
    
}


console.log(oneWay('ple',"pale"))