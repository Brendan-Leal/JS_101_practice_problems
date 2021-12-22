/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of 
Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift 
value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' 
corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to 
its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 
0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift 
value to a Caesar Cipher for that particular character. To make this more concrete, let's look at 
the following example:


INPUT: plain text string and key word string
OUTPUT:  a single string

Explicit Rules:
Spaces are preserved in their original places according to index
Punctuations are left in their original places according to index

Implicit Rules:

Questions:

-----------------------------Examples------------------------------
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. 
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in 
other words, the resulting encryption won't change depending on the case of the keyword's letters 
(e.g., 'MEat' === 'mEaT').


Pineapples don't go on pizzas!
meatmeatme atm e at me atmeat



M   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    MNOPQRSTUVWXYZABCDEFGHIJKL

E   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    EFGHIJKLMNOPQRSTUVWXYZABCD

A   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    ABCDEFGHIJKLMNOPQRSTUVWXYZ

T   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    TUVWXYZABCDEFGHIJKLMNOPQRS

------------------------------

P   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    PQRSTUVWXYZABCDEFGHIJKLMNO

H   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    HIJKLMNOPQRSTUVWXYZABCDEFG

O   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    OPQRSTUVWXYZABCDEFGHIJKLMN

N   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    NOPQRSTUVWXYZABCDEFGHIJKLM

E   ABCDEFGHIJKLMNOPQRSTUVWXYZ
    EFGHIJKLMNOPQRSTUVWXYZABCD

We come in peace.
ph onep ho nepho
ll qbqt pb cipjs



------------------Data Structures and Algorithm--------------------
Clean the plain text by removing puncuations and spaces
Create an array that will hold the values and indices of punctuation and spaces
Ex: pT: "We come in peace." > [[2, " "]. [7, " "]. [10, " "], [16, "."]]

Once cleaned the pT will look like "Wecomeinpeace"

Create the look up table for each letter in the key
Iterate over each char in the key word.
the shift value is the index of the letter - 1

{
    M: {
        A: "M"
        B: "N"
    }

    E: {
        A: "E",
        B: "F"
    }
}

Break up the text into groups of chars that are the same length as the key word
Ex: text = "Wecomeinpeace" KEY = "Phone"  
    - Phone is 5 chars in length so the plain text should be broken into 5 char pieces
    > Wecom einpe ace
    > PHONE PHONE PHO




*/
//---------------------------Code with Intent----------------------
const ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

function createCipherTable(keyWord) {
    let cipherTable = {};

    for (let keyWordIdx = 0; keyWordIdx < keyWord.length; keyWordIdx++) {
        let alphabetCopy = ALPHABET.slice();
        let kw_char = keyWord[keyWordIdx].toUpperCase();
        let shiftValue = ALPHABET.indexOf(kw_char);
        let removedPortion = alphabetCopy.splice(0, shiftValue);
        let newAlphabet = alphabetCopy.concat(removedPortion);

        let shiftedAlph = ALPHABET.reduce((acc, stdChar, stdIdx) => {
            acc[stdChar] = newAlphabet[stdIdx];
            return acc;
        }, {});
        cipherTable[kw_char] = shiftedAlph;
    }
    return cipherTable;
}

function ancillaryCharPositions(text) {
    let charAndIndex = [];
    let ancillaryChars = /[^a-z]|(\s)/i;
    for (let index = 0; index < text.length; index++) {
        let currChar = text[index];
        if (currChar.match(ancillaryChars)) {
            charAndIndex.push([index, currChar]);
        }
    }
    return charAndIndex;
}

function encode(cleanText, cipherTable, keyWord) {
    let kwIdx = 0;
    let encoding = true;
    let encryptedText = "";

    while (encoding) {
        for (let textIdx = 0; textIdx < cleanText.length; textIdx++) {
            if (kwIdx === keyWord.length) {
                kwIdx = 0;
            }
            let kw_char = keyWord[kwIdx].toUpperCase();
            kwIdx += 1;

            let currentChar = cleanText[textIdx];
            let replacementChar = cipherTable[kw_char][currentChar.toUpperCase()];

            if (currentChar.toLowerCase() === currentChar) {
                encryptedText += replacementChar.toLowerCase();
            } else if (currentChar.toUpperCase() === currentChar) {
                encryptedText += replacementChar.toUpperCase();
            } else {
               throw new console.error("Some thing went wrong");
            }
   
            encoding = false;
        }
    }
    return encryptedText;
}

function insertAncillaryChars(encryptedMessage, ancillaryChars) {
    let arrOfChars = encryptedMessage.split("");
    ancillaryChars.forEach(charPosition => {
        let index = charPosition[0];
        let char = charPosition[1];

        arrOfChars.splice(index, 0, char);
    });

    return arrOfChars.join("");
}

function vigenereCipher(plainText, keyWord) {
    let cipherTable = createCipherTable(keyWord);
    let ancillaryChars = ancillaryCharPositions(plainText);
    let cleanText = plainText.replace(/[^a-z]|(\s)/ig, "");
    let encryptedMessage = encode(cleanText, cipherTable, keyWord);
    encryptedMessage = insertAncillaryChars(encryptedMessage, ancillaryChars);

    console.log(encryptedMessage);
    return encryptedMessage;

}

//Test Cases:
console.log(vigenereCipher("We come in peace.", "phone") === "Ll qbqt pb cipjs.");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
// console.log();