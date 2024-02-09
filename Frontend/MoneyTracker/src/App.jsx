
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [datetime, setDatetime] = useState('')
  const [description, setDescription] = useState('')
  const [transactions, setTransactions] = useState([])
  const [value, setValue] = useState(10)
  console.log(value)
  useEffect(() => {
    getTransactions()
      .then(setTransactions)
  }, [name, datetime, description])
  const getTransactions = async () => {
    const response = await fetch('/api/');
    return await response.json();
  }
  const newTransaction = (ev) => {
    ev.preventDefault();
    // console.log(name,datetime,description)
    const price = name.split(' ')[0];
    fetch('/api/transaction', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name: name.substring(price.length + 1), price, description, datetime })
    })
      .then((response) => response.json().then(
        ((json) => {
          setDatetime('');
          setDescription('');
          setName('');
          setValue(10);
        })
      ))
      .catch((error) => console.log(error))

  }
  let balance = 0;
  for (let transaction of transactions) {
    balance += transaction.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];
  return (
    <>
      <main>
        <h1>${balance}<span>{fraction}</span></h1>
        <form onSubmit={newTransaction}>
          <div className='basics'>
            <input
              type='text'
              placeholder='+200 on samsung'
              value={name}
              onChange={ev => setName(ev.target.value)}>
            </input>
            <input
              type='datetime-local'
              value={datetime}
              onChange={ev => setDatetime(ev.target.value)}>
            </input>
          </div>
          <div className='description'>
            <input
              type='text'
              placeholder='description'
              value={description}
              onChange={ev => setDescription(ev.target.value)}>
            </input>
          </div>
          <button type='submit'>Add new transaction</button>
        </form>

        <div className='dropdown'>
          <select className='dropdownschema' value={value} onChange={ev=>setValue(ev.target.value)}>
            {(() => {
              const options = [];
              for (let i = 10; i < Math.max(50,transactions.length); i +=10) {
                options.push(<option key={i} value={i}>{i}</option>);
              }
              return options;
            })()}
          </select>
        </div>

        <div className="transactions">
          {transactions.length > 0 && transactions.slice(0,Math.min(transactions.length,value)).map((transaction) =>
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div className={"price " + (transaction.price > 0 ? 'plus' : 'sub')}>{transaction.price}<span>.00</span></div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>

          )}

        </div>
      </main>
    </>
  )
}

export default App
