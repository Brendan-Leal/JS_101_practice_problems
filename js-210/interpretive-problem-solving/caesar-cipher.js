/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and 
simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a 
substitution cipher in which each letter in a plaintext is substituted by the letter located a 
given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 
3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as 
the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character 
is left as is. The substituted letters are in the same letter case as the original letter. If the 
key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.



INPUT: string to be encrypted and a int which is the shift value
OUTPUT: encrypted text as a string

Explicit Rules:
- only encrypt letters both lower and upper case
- If you replace a letter make sure the case is preserved
- Punctuations are left in original place.
- space are left in the original place.

Implicit Rules:

Questions:

-----------------------------Examples------------------------------
we come in peace 3
z

shift 29 - 26 = 3

53 - 26 = 



ABCDEFGHIJKLMNOPQRSTUVWXYZ

BCDEFGHIJKLMNOPQRSTUVWXYZA shift 53

DEFGHIJKLMNOPQRSTUVWXYZABC



ABCDE FGHIJKLMNOPQRSTUVWXYZ shift 5
FGHIJKLMNOPQRSTUVWXYZABCDE

The quick brown fox jumps over the lazy dog!
ymj


------------------Data Structures and Algorithm--------------------
calculate the correct shift:
If the shift value is greater than 26
subtract 26 from the shift value untill the resulting number is less than or equal to 26.


create a data structure to hold the alphabet and the corrosponding shifted letter.
Create the shiftedAlphabet
remove the first x number of chars save them
add the removed chars to the end of the remaing string

{
    A: ""
}

iterate over each key in the shiftedAlphabet obj
for that given index look at the value at that index in the shifted version
add it to the object


split the input text by words
iterate over each word
for each word iterate over each char
for each char find the corosponding value in the look up obj
    save that value and case 
    If the char is not in the look up obj
        then it must be a punctuation so keep it in place unchanged


*/
//---------------------------Code with Intent----------------------
function caesarEncrypt(message, shiftValue) {
    let shiftedAlphabet = {
        "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "", "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": ""
    };
    let alpha = Object.keys(shiftedAlphabet);

    if (shiftValue > 26) {
        while (shiftValue > 26) {
            shiftValue -= 26;
        }
    }

    let removedPortion = alpha.splice(0, shiftValue);
    alpha = alpha.concat(removedPortion);

    let keys = Object.keys(shiftedAlphabet);

    for (let stdAlphaIdx = 0; stdAlphaIdx < keys.length; stdAlphaIdx++) {
        let stdChar = keys[stdAlphaIdx];

        shiftedAlphabet[stdChar] = alpha[stdAlphaIdx];

    }

    let messageWords = message.split(" ");
    messageWords = messageWords.map(word => {
        let newWord = "";
        word.split("").forEach(char => {
            if (char.toLowerCase() === char && shiftedAlphabet[char.toUpperCase()]) {
                let newChar = shiftedAlphabet[char.toUpperCase()];
                newWord += newChar.toLowerCase();

            } else if (char.toUpperCase() === char && shiftedAlphabet[char.toUpperCase()]) {
                let newChar = shiftedAlphabet[char.toUpperCase()];
                newWord += newChar.toUpperCase();
            } else {
                newWord += char;
            }
        });
        return newWord;
    });
    console.log(messageWords.join(" "));
    return messageWords.join(" ");
}


//Test Cases:
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26); // ABCDEFGHIJKLMNOPQRSTUVWXYZ