// Import the readline module
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return str;
    }
}

function handleInput(input) {
    const transformedString = transformString(input);
    console.log('Transformed String:', transformedString);
    rl.close();
}

rl.question('Enter a string (word): ', handleInput);
