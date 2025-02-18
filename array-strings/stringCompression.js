// the qustion 

// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z). Hints:#92, #110


// answer brute force  
// so im going to create a function that can get goes over the string and count the number of same 

function stringCompression(str) {
    let currentChar = ''
    let stringToReturn = ''
    for (let i = 0; i< str.length; i ++) {
        if (str[i] !== currentChar){
            currentChar = str[i]
            
        } else {

        }
    }


        
}


console.log(stringCompression('aabcccccaaa'))