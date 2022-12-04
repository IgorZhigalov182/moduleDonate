import { createHTMLElement } from './create_HTML_model'
import { reloadSumDonate } from './sum_count'

let arrayDonates = [];
let objectDonat = {};

class Donate {
    constructor(amountMoney, monthDonate, dayDonate, yearDonate, timeDonate) {
        this.amountMoney = amountMoney
        this.monthDonate = monthDonate
        this.dayDonate = dayDonate
        this.yearDonate = yearDonate
        this.timeDonate = timeDonate
    }
}

    const form = document.querySelector('.donate-form');
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        let arrMonth = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    
        const dataMoneyToAdd = new Date();
        
        let dataMoneyToAddMonth = dataMoneyToAdd.getMonth();
        let monthToString = arrMonth[dataMoneyToAddMonth];
    
        let dataMoneyToAddDay = dataMoneyToAdd.getDate()
    
        let dayToString = `${dataMoneyToAddDay}th`
    
        let dataMoneyToAddYear = dataMoneyToAdd.getFullYear()
    
        let dataMoneyToAddTime = dataMoneyToAdd.toLocaleTimeString('en-US').toLocaleLowerCase()
    
        const amountMoneyToAdd = event.target.elements.amount.value;
    
        objectDonat = {
            donationAmount: amountMoneyToAdd,
            monthDonate: monthToString,
            dayDonate: dayToString,
            yearDonate: dataMoneyToAddYear,
            timeDonate: dataMoneyToAddTime,
        }
        
        const donate = new Donate  (objectDonat.donationAmount,
                                    objectDonat.monthDonate,
                                    objectDonat.dayDonate,
                                    objectDonat.yearDonate,
                                    objectDonat.timeDonate);
                                    
        arrayDonates.push(donate)

        createHTMLElement (arrayDonates)
        reloadSumDonate(arrayDonates)
})