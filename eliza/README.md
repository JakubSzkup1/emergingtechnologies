# ELIZA Chatbot

ELIZA is a simple chatbot that mimics a psychotherapist. The concept was created by Joseph Weizenbaum in the 60s,
this implementation of this chatbot is a modernized version coded in JavaScript for the web.

# Table of Contents
1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Customization](#customization)
6. [Technologies Used](#technologies-used)
7. [Acknowledgments](#acknowledgments)

## About the Project

This project implements a basic ELIZA chatbot that engages users in a chat-based conversation. It uses pattern matching and basic reflection techniques to respond to user inputs with a personal and conversational feel.

### Purpose

- Create an interactive chatbot that is capable of replicating basic conversation patterns.
- Demonstrate the use of patterns matching with regular expressions and dynamic response generation.

## Features

- **Dynamic Responses:** Chat bot reacts to user input by using regular expressions and dynamic response generation.
- **Reflection Mechanism:** Reflects user input for more natural responses.
- **Clear Chat Log:** Allows users to reset the conversation by clearing the chat log.
- **Customizable Patterns:** Easily extendable with additional patterns and responses.
- **User-Friendly Interface:** Simple chat window where users can type and send messages.
- **Responsive Design:** Compatible with various devices and browsers.

## Getting started

### Prerequisites

- A modern web browser such as Chrome, Firefox, Safari.
- Basic knowledge in HTML, CSS, and JavaScript (For customization)

### Installation

1. **Clone the Repository**:  
   Open a terminal and run the following command:
   ```bash
   git clone https://github.com/yourusername/eliza-chatbot.git

2. **Navigate to the Project Directory**:
   Change to the cloned directory:
   ```bash
   cd eliza-chatbot

## Live Demo

You can try out the ELIZA chatbot live on GitHub Pages:  
[ELIZA Chatbot Demo](https://jakubszkup1.github.io/emergingtechnologies/)

## Usage

1. Type your message in the input box.
2. Click "Send" or press `Enter` to interact with ELIZA.
3. Observe the chatbot's responses and continue the conversation.
4. Use the "Clear Chat" button to reset the conversation history.

## Customization 

### Adding New Responses
You can extend the chatbot by adding new patterns and responses in the `eliza.js` file:

```javascript
const responses = [
    { pattern: /(.*) new-pattern(.*)/i, responses: [
        "Response 1 for new pattern.",
        "Response 2 for new pattern."
    ]},
    // Existing patterns...
];
```

### Modifying Reflection Rules

Update the `reflections` object to handle additional word transformations:

```javascript
const reflections = {
    "i": "you",
    "we": "you all",
    "can't": "cannot",
    // Add more rules here...
};
```

## Technologies Used

- **HTML5**: For structuring the chatbot interface.
- **CSS3**: For styling and layout.
- **JavaScript**: For chatbot logic and interactivity.

---

## Acknowledgement

- Inspired by Joseph Weizenbaum’s original ELIZA chatbot.
- Regular Expression documentation: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).
- Thanks to The Guardian for the article on ELIZA: *[Weizenbaum's Nightmares](https://www.theguardian.com)*.

---


