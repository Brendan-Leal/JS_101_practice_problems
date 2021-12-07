let partsOfSpeech = {
  noun: ["man", "building", "cat", "dog", "ocean", "milk", "rain", "house"],
  verb: ["coughs", "reads", "sleeps", "runs", "sees", "thinks", "loves", "ate"],
  adjective: ["angry", "blue", "clear", "itchy", "evil", "nice", "odd", "salty"],
  adverb: ["lazily", "quietly", "gracefully", "never", "boldly", "safely"],
};

function madlibs(template) {
  template.forEach((word, i) => {
    switch (word) {
      case "noun":
        template[i] = selectRandomWordFrom(partsOfSpeech["noun"]);
        break;
      case "verb":
        template[i] = selectRandomWordFrom(partsOfSpeech["verb"]);
        break;
      case "adjective":
        template[i] = selectRandomWordFrom(partsOfSpeech["adjective"]);
        break;
      case "adverb":
        template[i] = selectRandomWordFrom(partsOfSpeech["adverb"]);
        break;
    }
  });
  console.log(template.join(" "));
}

function selectRandomWordFrom(array) {
  let randomIndex = getRandomIntInclusive(0, array.length - 1);

  return array[randomIndex];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let template1 = [ "The", "adjective", "noun", "adverb", "verb", "and", "the",
  "adjective", "noun", "adverb", "verb"];
let template2 = ["\"A'Hoy!\"", "said", "the", "noun", "as", "they", "verb",
  "adverb"];

madlibs(template1);
madlibs(template2);
