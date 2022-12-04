let donateContainer = document.querySelector('.donates-container__donates');

export function createHTMLElement (arr) {
    const newDonateHTMLElement = document.createElement('div');
    newDonateHTMLElement.classList = 'donate-item';

    let lastDonate = arr[arr.length-1];

    let contentDonate = `
    ${lastDonate.monthDonate} 
    ${lastDonate.dayDonate}
    ${lastDonate.yearDonate}
    ${lastDonate.timeDonate} -
    ${String(lastDonate.amountMoney)}$
    `

    newDonateHTMLElement.textContent = contentDonate;   
    donateContainer.insertAdjacentElement('afterbegin',newDonateHTMLElement)
}