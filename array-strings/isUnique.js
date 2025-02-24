
//q

// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// Answer:
// im going to first check if the length of the string is longer then 0, if not return false.
// then im going to create hash var and iterate over the string. if the char is in the hash im going to return false. else im going to add this char to the hash  




function isUnique (str) {
    if ( str.length < 1) {
        return false 
    } 
    let hash = {}
    for (let i = 0; i < str.length; i++){
        if (hash[str[i]]){
            return false 
        } 
        hash[str[i]] = true
    }
    return true
}



let passTest = 'qwerty' // need to pass 
let noPassTest = 'qwertq' 




console.log(isUnique(noPassTest))

// seems to me that its ok and its working. now i can see the hints and see if i can improve it.
// #44 hit - used.
// #117 hint - bit vector is NOT USED ! NEED TO ADD IT AND IMPROVE IT
// #132 hint - time complexety - can i solve it with O(NlogN) ?  


