// words to swap when reflecting
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
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ]},
    // patterns and responses for asking about feelings
    { pattern: /(.*) I feel (.*)/i, responses: [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
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

const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearChatButton = document.getElementById("clear-chat-button");

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    message.textContent = text;
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight;
}

sendButton.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (input) {
        addMessage(input, "user");
        const response = respond(input);
        setTimeout(() => addMessage(response, "bot"), 500);
        userInput.value = "";
    }
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});

clearChatButton.addEventListener("click", () => {
    chatLog.innerHTML = ""; // clears all messages in the chat log
});


