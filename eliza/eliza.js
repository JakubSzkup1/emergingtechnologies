const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
};

function reflect(text){
    return text.toLowerCase().split(" ").map(word => reflections[word] || word).join(" ");

}

