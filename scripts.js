const Modal = {
  open(){
    //Abrir modal
    //Adicionar a class active no modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')

  },
  close(){
    //Fechar modal
    //Remover a class active no modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const Transactions = [
    {
      id:1,
      description:'Luz',
      amount: -50000,
      date:'23/01/2021',
    },
    {
      id:2,
      description:'Website',
      amount: 500000,
      date:'23/01/2021',
    },
    {
      id:3,
      description:'Internet',
      amount: -20000,
      date:'23/01/2021',
    },
    {
      id:4,
      description:'App',
      amount: 200000,
      date:'23/01/2021',
    },
]

// Eu preciso somar as entradas
// depois eu preciso somar as saídas
// remover das entradas o valor da saídas
// assim, eu terei o total

const Transaction = {
  incomes(){
    // somar as entradas
  },
  expenses(){
    // somar as saídas
  },
  total(){
    // entradas - saídas
  }
}

// Substituir os dados do HTML com os dados do JS

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'), 
  
  addTransaction(transaction,index){
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {

    const html = `
    
      <td class="description">${transaction.description}</td>
      <td class="expense">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação">
      </td>
    `
    return html
  }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])

transactions.forEach(function(transaction){})



