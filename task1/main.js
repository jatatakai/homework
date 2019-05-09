money = +prompt('Ваш бюжет на месяц?');
timeData = prompt('Введите дату в формате YYYY-MM-DD');
ans1 = prompt('Введите обязательную статью расходов в этом месяце');
ans2 = +prompt('Во сколько обойдется?');
ans3 = prompt('Введите обязательную статью расходов в этом месяце');
ans4 = +prompt('Во сколько обойдется?');
let appData = {  
    money: money,
    timeData: timeData,
    expenses : {
        ans1:ans2,
        ans3:ans4
    },
    optionalExpenses: {},
    income: {},
    savings: false
}

alert(appData.money/30);
