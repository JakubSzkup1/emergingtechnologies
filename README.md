# Trigram Language Model Project - README

## Project Overview

This project implements a third-order letter approximation model(trigram model) of the English Language. I have used five public domain texts from Project Gutenberg. The tasks include text preprocessing, trigram model creation, text generation, model analysis and model export. There is four main tasks in this project,each building on the previous task.Python's standard library has been used for this project without any third-party libraries.

## Tasks Overview

### Task1: Third-order Letter Approximation model
For this task, I have used five English works from Project Gutenburg to create a trigram model. The text is cleaned up, making sure only uppercase letters, spaces and fullstops are kept. The model captures the occurence of each three-charcter sequence in the cleaned up text.

- **Function: 'preprocess_text(text)'**
- This function preprocesses the text by removing all the characters except for uppercase letters, spaces and full stops.

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



## Dependencies
The project only requires Python's standard library as stated in the Assignment Read me.
They are as follows:

- 're': For regular expression operations used in text preprocessing.
- 'random': For probability selection in text generation.
- 'collections': Used for efficiently counting the trigram occurrences. Specifically 'defaultdict'.
- 'json': For exporting the trigram model as a JSON file.

No external libraries or installations are needed to run this project.

## Files in the Repository


## How to Run



## Project Structure


## Research and References



