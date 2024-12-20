# Trigram Language Model and ELIZA Chatbot Projects - README

## Table of Contents
1. [Project Overview](#project-overview)
2. [Trigram Language Model](#trigram-language-model)
   - [Overview](#overview)
   - [Tasks Overview](#tasks-overview)
   - [Usage Instructions](#usage-instructions)
   - [Installation](#installation)
   - [Dependencies](#dependencies)
   - [Project Structure](#project-structure)
   - [Files in the Repository](#files-in-the-repository)
3. [ELIZA Chatbot](#eliza-chatbot)
   - [Overview](#overview-1)
   - [Features](#features)
   - [Getting Started](#getting-started)
   - [Usage](#usage)
   - [Customization](#customization)
   - [Technologies Used](#technologies-used)
4. [Research and References](#research-and-references)
5. [Conclusion](#conclusion)
6. [Acknowledgements](#acknowledgements)

## Project Overview

This document merges details from two separate projects: 
1. A **Trigram Language Model** that uses a third-order letter approximation to generate English-like text.
2. An **ELIZA Chatbot**, a web-based conversational agent inspired by Joseph Weizenbaum's 1960s psychotherapist chatbot.

Each project demonstrates unique aspects of natural language processing and interaction, showcasing different approaches to working with language models and conversational AI.

---

## Trigram Language Model

### Overview
This project implements a third-order letter approximation model(trigram model) of the English Language. I have used five public domain texts from Project Gutenberg. The tasks include text preprocessing, trigram model creation, text generation, model analysis, and model export. There are four main tasks in this project, each building on the previous task. Python's standard library has been used for this project without any third-party libraries.

## Tasks Overview

### Task1: Third-order Letter Approximation model
For this task, I have used five English works from Project Gutenburg to create a trigram model. The text is cleaned up, making sure only uppercase letters, spaces, and full stops are kept. The model captures the occurrence of each three-character sequence in the cleaned-up text.

- **Function: 'preprocess_text(text)'**
- This function preprocesses the text by removing all the characters except for uppercase letters, spaces, and full stops.

- **Function: 'create_trigram model(text)'**
- This function creates a dictionary where the keys are trigrams and values are the number of times they appear in the text.


### Task 2: Third-order Letter Approximation Text Generation
In this task, using Task's 1 trigram model, the task generates a sequence of 10,000 characters starting with the initial two characters ("TH"). Then the following character is chosen based on the previous two characters using weighted counts  based on the trigram.

- **Function: 'get_next_char(trigram_model, current_bigram')**
- This function selects the next character in the generated text based on the current two-character sequence.

- **Function: 'generate_text(trigram_model, length=10000'**
- This function just generates a sequence of 10,000 characters by selecting characters based on the trigram model.
  

### Task 3: Analyze the Generated Text

-**Function: 'analyze_generated_text(text, word_list)'**
-This function analyses the generated text which determines how many of its words are valid English words.


### Task 4: Export the Trigram Model as JSON

-**Function: 'export_trigram_model_to_json(trigram_model, filename="trigrams.json")'**
-This function exports the trigram model as JSON file for easy storage and use.

Each of these functions plays a big role in building and analyzing the trigram model to mimic English language patterns based on the input texts.

## Usage Instructions
To use this project, follow the steps below:

1. **Prepare the Text Files**:
   - Place five English text files in a folder named 'texts/'. (Texts can be taken from Project Gutenberg)
  
2. **Run the Code Cells**:
   - Run each task in order within the Jupyter Notebook.
  
3. **Check the Outputs**:
   -Take a look at the generated text, analysis results, and JSON file as specified in each of the tasks.

## Installation

1. **Install Python (3.7 or higher)**:  
   Download and install Python from [python.org](https://www.python.org/).

2. **Clone the Repository**:  
   Open a terminal and run:
   ```bash
   git clone https://github.com/JakubSzkup1/emergingtechnologies.git

3. **Navigate to the Project Directory**:
   Change to the repository directory:
   ```bash
   cd emergingtechnologies

4. **Launch the Jupyter Notebook**:
   Start the Jupyter Notebook interface:
   ```bash
   jupyter notebook

## Dependencies
The project only requires Python's standard library as stated in the Assignment Read Me.
They are as follows:

- 're': For regular expression operations used in text preprocessing.
- 'random': For probability selection in text generation.
- 'collections': Used for efficiently counting the trigram occurrences. Specifically 'defaultdict'.
- 'json': For exporting the trigram model as a JSON file.

No external libraries or installations are needed to run this project.

## Project Structure

The repository is organized as follows:

- **.github/**: Contains GitHub configuration files (e.g., workflows).
- **.vscode/**: Includes VSCode-specific settings.
- **eliza/**: Folder containing Eliza-related project files.
- **texts/**: Folder storing text files for processing.
- **venv/**: Virtual environment for dependency management.
- **.gitignore**: File to exclude unnecessary or sensitive files from the repository.
- **README.md**: Project documentation.
- **requirements.txt**: Lists the dependencies required for the project.
- **trigrams.ipynb**: Jupyter Notebook containing all tasks and code.
- **trigrams.json**: JSON file output for the trigram model.

## Files in the Repository
- **'trigrams.ipynb'**: Jupyter Notebook containing all code and tasks for the trigram model.
- **'texts/'**: Folder storing the five English text files from Project Gutenberg.
- **'words.txt'**: A list of valid English words used in Task 3 to analyze the generated text.
- **'trigrams.json'**: JSON file containing the exported trigram model.

## Usage Instructions

1. **Prepare the Text Files**:  
   Place five English text files in the `texts/` folder.

2. **Run the Jupyter Notebook**:  
   Open and run the `trigrams.ipynb` notebook step by step.

3. **Review the Outputs**:  
   Review the generated text, analysis results, and the exported JSON file (`trigrams.json`).

# ELIZA Chatbot

## Overview

ELIZA is a simple chatbot that mimics a psychotherapist. The concept was created by Joseph Weizenbaum in the 60s, and this implementation of the chatbot is a modernized version coded in JavaScript for the web.

## Purpose

- Create an interactive chatbot that is capable of replicating basic conversation patterns.
- Demonstrate the use of patterns matching with regular expressions and dynamic response generation.

## Features

- **Dynamic Responses:** Chat bot reacts to user input by using regular expressions and dynamic response generation.
- **Reflection Mechanism:** Reflects user input for more natural responses.
- **Clear Chat Log:** Allows users to reset the conversation by clearing the chat log.
- **Customizable Patterns:** Easily extendable with additional patterns and responses.
- **User-Friendly Interface:** Simple chat window where users can type and send messages.
- **Responsive Design:** Compatible with various devices and browsers.

## Getting Started

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

## Research and References

1. [Wikipedia - N-gram](https://en.wikipedia.org/wiki/N-gram): Provides background on n-grams, foundational to building trigram models for language processing.
2. [Real Python - Working with Text Files](https://realpython.com/python-string-split-concatenate-join/): Guide to text handling and string manipulation in Python, helpful for text preprocessing.
3. [Towards Data Science - Text Generation and Analysis](https://towardsdatascience.com/text-generation-with-python-and-nlp-23ff8ecf10f5): Insights on generating and analyzing text, relevant to building the language model.
4. [Python Docs - Sets](https://docs.python.org/3/tutorial/datastructures.html#sets): Explanation of set usage in Python, beneficial for efficient word lookups in Task 3.
5. [Medium - Language Modeling](https://medium.com/@roshmitadey/understanding-language-modeling-from-n-grams-to-transformer-based-neural-models-d2bdf1532c6d): Overview of language models and text generation, with context on probabilistic models.
6. [W3Schools - Python Convert From Python to JSON](https://www.w3schools.com/python/gloss_python_convert_into_JSON.asp#:~:text=Python%20Convert%20From%20Python%20to%20JSON,-%E2%9D%AE%20Python%20Glossary&text=If%20you%20have%20a%20Python,dumps()%20method): Guide on converting Python objects to JSON using `json.dumps()`, useful for exporting the trigram model in Task 4.
7. OpenAI. (2024). *ChatGPT* [Large language model]. https://chat.openai.com : This work was assisted by OpenAI’s ChatGPT to provide insights and clarify key concepts.

## Conclusion

This project demonstrates how trigram models can approximate English text patterns. Future improvements could involve using larger datasets, exploring higher-order n-grams, or integrating machine learning techniques. 

Additionally, the ELIZA Chatbot showcases how rule-based pattern matching and reflection can create an interactive and engaging user experience. Enhancements could include adding more complex response patterns, integrating modern NLP libraries, or transitioning to transformer-based models for more dynamic and human-like conversations.

Together, these projects highlight the potential of language modeling and conversational AI in understanding and mimicking natural language, paving the way for more advanced applications in the future.

## Acknowledgements

I would like to thank:

- My instructor for guidance on this project.
- **Trigram Language Model**: Thanks to [Project Gutenberg](https://www.gutenberg.org/) for public domain texts.
- **ELIZA Chatbot**: Inspired by Joseph Weizenbaum’s original concept.
- **Regular Expression Documentation**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).
- **The Guardian**: *[Weizenbaum's Nightmares](https://www.theguardian.com)*.



