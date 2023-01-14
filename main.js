let numberInput = document.querySelector('.number');
let factorialBtn = document.querySelector('.factorial');

factorialBtn.addEventListener('click', function() {
    let num = numberInput.value;
    num = Number(num);

    if (num != NaN && num > 0) {
        return alert(`Le number ${num} factorielle est ${factorialize(num)}`);
    }
});

/**
 * 
 * @param {int} num
 * @returns {int}
 */

function factorialize(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
};