// words to swap when reflecting
const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
    "was": "were", 
    "i'm": "you're", 
    "i've": "you've", 
    "we": "you all", 
    "us": "you all"
};

// function to reflect words in a sentence
function reflect(text){
    return text
    .toLowerCase() // convert to lowercase
    .split(" ") // split into words
    .map(word => reflections[word] || word) // replace words with reflections
    .join(" "); // join words back into a sentence

}

// patterns and responses for chatbot
const responses = [
    // greeting patterns and responses
    { pattern: /hello|hi|hey/i, responses: [
        "Hello! How are you feeling today?",
        "Hi there! What's on your mind?",
        "Hey! How can I help you?"
    ]},

    // patterns and responses for asking about feelings
    { pattern: /(?:i feel|i'm feeling|i am feeling) (.*)/i, responses: [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ]},

    // asking about family
    { pattern: /(.*\b(mother|father|family|parent)\b.*)/i, responses: [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ]},

    // user talks about being happy
    { pattern: /(.*\b(I feel|I'm feeling|I am feeling))(.*)\b.*)/i, responses: [
        "That's wonderful! What makes you feel happy?",
        "How long have you felt this way?",
        "Can you share more about what brought this happiness?"
    ]},

    // identity
    { pattern: /(.*)\bI am (.*)/i, responses: [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ]},

     // apology
     { pattern: /(.*)\b(sorry|apologize)\b(.*)/i, responses: [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "Its okay to feel that way."
    ]},

     // goodbye
     { pattern: /\b(bye|goodbye|exit)\b/i, responses: [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I'm here if you need to talk again."
    ]},

    // fallback response for anything else
    { pattern: /.*/, responses: [
        "Can you tell me more?",
        "Why do you say that?",
        "Interesting... go on."
    ]}
];

// function to respond to user input
function respond(userInput) {
    for (const { pattern, responses: responseList } of responses) {
        const match = userInput.match(pattern); // check if user input matches pattern
        if (match) {
            const randomResponse = responseList[Math.floor(Math.random() * responseList.length)]; // pick a random response
            const reflectedGroups = match.slice(1).map(reflect); // reflect matched groups
            return randomResponse.replace(/\{(\d+)\}/g, (_, index) => reflectedGroups[index] || ""); // replace placeholders 
        }
    }
    return "I'm not sure I understand. Can you elaborate?";
}

// select elements from DOM
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearChatButton = document.getElementById("clear-chat-button");

// function to add message to the chat log
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    message.textContent = text;
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; // scroll to the bottom of chat log to show latest message
}

// event listener for the send button
sendButton.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (input) {
        addMessage(input, "user");
        const response = respond(input);
        setTimeout(() => addMessage(response, "bot"), 500);
        userInput.value = "";
    }
});

// event listner for the enter key
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});

// clear chat
clearChatButton.addEventListener("click", () => {
    chatLog.innerHTML = ""; // clears all messages in the chat log
});


