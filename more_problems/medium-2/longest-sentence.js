/*
iterate through each character in the string untill you find a punctuation
(.,?,!)

Remove the portion of the string from the beginning of the string to the
punctuation, inclusivly.

Set the beginning of the string to the same spot that the previous string ended
extraction.

Repeat until the end of the string or there is no string.
*/
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

function longestSentence(text) {
  let sentencesArray = extractSentencesFrom(text);
  trimSentencesInArray(sentencesArray);
  let longestSentenceByWords = findLongestSentence(sentencesArray);
  let wordCountInSentence = findWordCountIn(longestSentenceByWords);

  console.log(longestSentenceByWords);
  console.log(`The longest sentence has ${wordCountInSentence} words\n`);
}

function findWordCountIn(longestSentenceByWords) {
  return longestSentenceByWords.split(" ").length;
}

function findLongestSentence(sentencesArray) {
  sentencesArray.sort((a,b) => {
    return b.split(" ").length - a.split(" ").length;
  });
  return sentencesArray[0];
}

function trimSentencesInArray(sentencesArray) {
  for (let i = 0; i < sentencesArray.length; i++) {
    sentencesArray[i] = sentencesArray[i].trim();
  }
}

function extractSentencesFrom(text) {
  const PUNCTUATIONS = [".", "!", "?"];
  let charArray = text.split("");
  let extractionStart = 0;
  let extractionEnd = 0;
  let sentences = [];

  charArray.forEach((char, i) => {
    if (PUNCTUATIONS.includes(char)) {
      extractionEnd = i + 1;
      sentences.push(text.slice(extractionStart, extractionEnd));
      extractionStart = extractionEnd;
    }
  });
  return sentences;
}
longestSentence("This, is a test. Hello friend! What's your name?")

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
