# NodeJs-README-file-generator
A node JS command line application with prompts to generate a README file

## Application Description
This application uses node js inquirer to collect user responses to prompts through the command line. You will need to install node package manager to run it. 

## Application Notes
I attempted to condense the logic for the command line interface into a constructor function, but was only able to get inquirer to work with recursion. Ultimately, I switched back to a more basic program structure that calls the prompts in-line. See below for some references I used in the attempt. I was able to condense the code related to document creation by using a template file with delimiters and field markers that allowed me to use string.Replace to set user values, instead of interpolation.

## References
https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
https://www.reddit.com/r/node/comments/9q3chw/looping_inquirerjs_prompts/
https://stackoverflow.com/questions/287903/what-is-the-preferred-syntax-for-defining-enums-in-javascript
https://www.geeksforgeeks.org/javascript-callbacks/
https://stackoverflow.com/questions/55959659/return-answer-of-inquirer-prompt-inside-of-another-function
https://stackoverflow.com/questions/47665616/how-to-run-for-loop-asynchronously-with-inquirer-prompt

## Link to Github Repository
https://github.com/geotecdev/NodeJs-README-file-generator

## License

Copyright (c) 2021 Mike Ruane (geotecdev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
