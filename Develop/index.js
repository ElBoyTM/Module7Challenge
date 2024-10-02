// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write usage information for your project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Write contribution guidelines for your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write test instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which license you would like to use',
        choices: ['None','MIT'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
