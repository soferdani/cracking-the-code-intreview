
//q

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
// A permutation of a string is just a rearrangement of its characters.

// Answer:
// so im going to first check if the the 2 sring length is the same - if not return false.
// then im going to insert each char into hash table from the first string and make sure the outher string has is - if not return false. 
// if all test pass return true.

function checkPermutation(str1,str2){
    if ( str1.length !== str2.length) {
        return false 
    }

    let hash = {}
    for (let i = 0 ; i< str1.length; i++) {
        // hash[str1[i]] = 1 // this is cosing a problem that im not tracking duplication numbers! 
        hash[str1[i]] ++
    } 


    for (let i = 0 ; i< str1.length;i++) {
        if ( hash[str2[i]]){
            hash[str2[i]] --
        } else {
            return false
        }
    }

    return true

}


let str1pass = "abr"
let str2pass = "bac"

console.log(checkPermutation(str1pass,str2pass))

// seems to get working solution. lets go over the hints and see.
//hint #1 : check against the defenition
// so i can check the length and then see if each char is in the other string


function checkPermutation2(str1,str2){
    if ( str1.length !== str2.length) {
        return false 
    }

    for (let i = 0; i<str1.length; i++){
        if (! str1.include(str2[i])){ // this is not good ! include is an array method and not string method 
            return false 
        }
    }
    return true
}

// there is auther way in hint # 131 saying i can just make then the same order and then check...? 