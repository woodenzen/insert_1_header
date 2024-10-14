"use strict";

// Log the input object to debug its structure
console.log('Input object:', JSON.stringify(input, null, 2));

// Ensure input and input.text.selected are defined
if (!input || !input.text || typeof input.text.selected !== 'string') {
  throw new Error('Invalid input structure. Expected input.text.selected to be a string.');
}

// Capture the entire line on which the cursor is located
const selectedText = input.text.selected.trim();
let first_level_header;

if (selectedText === "") {
  first_level_header = '# ';
} else {
  first_level_header = `# ${selectedText}`;
}

// Ensure output and output.replace are defined
if (!output) {
  output = {};
}
if (!output.replace) {
  output.replace = {};
}

// Replace the entire line with the Fourth Level Header
// output.replace.line = first_level_header;
// Replace selection with link to extracted note.
output.insert.text = `# ${selectedText}`;
