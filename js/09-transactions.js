import transactionHistory from "./data/transactions.js";

{/* <tr>
    <td>ID транзакции</td>
    <td>Сумма</td>
    <td>Дата</td>
    <td>Кто</td>
    <td>Тип транзации</td>
    <td>Имя счёта</td>
    <td>Номер счёта</td>
</tr> */}

const makeTransactionTableRowMakup = transaction => {
    const {id, account, amount, business, date, name, type } = transaction;
    console.log(transaction)

    return`<tr>
            <td>${id}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td>${business}</td>
            <td>${type}</td>
            <td>${name}</td>
            <td>${account}</td>
        </tr>`
}

// console.log(makeTransactionTableRowMakup(transactionHistory[0]))

const tableEl = document.querySelector('.js-transaction-table');

// массив строк мы повесить не можем, поэтому добавим join что бы сделать одну огромную строку
const makeTransactionTableRow = transactionHistory.map(makeTransactionTableRowMakup).join('');

console.log(makeTransactionTableRow);

// insertAdjacentHTML принимает одну строку, и нельзя там распылять, поэтому сделали join
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRow)

