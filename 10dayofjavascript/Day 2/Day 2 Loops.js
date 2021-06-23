	'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


const vowelsAndConsonants = str =>{
    const vowels=['a','e','i','o','u'];
    const str_array=str.replace(/[^a-zA-Z]/g, '').split('');
    const vowels_final=str_array.filter( a => vowels.includes(a.toLowerCase()));
    const consonant_final=str_array.filter( a => !vowels.includes(a.toLowerCase()));
    return console.log(vowels_final.join('\n') + '\n' + consonant_final.join('\n'));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}