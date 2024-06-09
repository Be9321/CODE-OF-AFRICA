import prompt from 'prompt-sync';

function subarraySum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

const input = prompt('Enter a list of numbers separated by commas (e.g: "," 2,4,7,8,9,0,3): ');
const target = parseInt(prompt('Enter the target sum of your choice: '), 10);

const arr = input.split(',').map(Number);

const result = subarraySum(arr, target);

console.log(result ? 'True' : 'False');
