
import { useState } from 'react'
import './App.css'

function App() {
  const[name,setName]=useState('')
  const[datatime,setDatetime]=useState('')
  const[description,setDescription]=useState('')
  const newTransaction =(ev)=>{
    ev.preventDefault();
    fetch('/api/transaction',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({name,description,datatime})
    })
    .then((response)=>response.json())
    .then((json)=>console.log(json))
    .catch((error)=>console.log(error))
  }
  return (
    <>
      <main>
        <h1>$400<span>.00</span></h1>
        <form onSubmit={newTransaction}>
          <div className='basics'>
            <input 
            type='text' 
            placeholder='+200 on samsung' 
            value={name} 
            onChange={ev=>setName(ev.target.value)}>
            </input>
            <input 
            type='datetime-local'
            value={datatime} 
            onChange={ev=>setDatetime(ev.target.value)}>
            </input>
          </div>
          <div className='description'>
            <input 
            type='text' 
            placeholder='description'
            value={description}
            onChange={ev=>setDescription(ev.target.value)}>
            </input>
          </div>
          <button type='submit'>Add new transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">Acer Tv</div>
              <div className="description">It was time for new TV</div>
            </div>
            <div className="right">
              <div className="price plus">+$400<span>.00</span></div>
              <div className="datetime">2023-12-10 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Acer Tv</div>
              <div className="description">It was time for new TV</div>
            </div>
            <div className="right">
              <div className="price sub">-$400<span>.00</span></div>
              <div className="datetime">2023-12-10 15:45</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">GFG job new website</div>
              <div className="description">It was time for new TV</div>
            </div>
            <div className="right">
              <div className="price sub">-$400<span>.00</span></div>
              <div className="datetime">2023-12-10 15:45</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
