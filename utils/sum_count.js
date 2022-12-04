let totalDonate = document.querySelector('#total-amount')

export function reloadSumDonate (arr) {
    let lastDonate = arr[arr.length-1];
    let actualSum = totalDonate.textContent.split('$')[0];

    let sum = Number(lastDonate.amountMoney) + Number(actualSum);
    totalDonate.textContent = `${sum}$`
}