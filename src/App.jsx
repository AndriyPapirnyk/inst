import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password
      })
      console.log('Успішна відповідь:', response.data)
    } catch (error) {
      console.error('Помилка при надсиланні:', error)
    }
  }

  return (
    <>
      <main>
        <header>
          <img
            className='logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt=""
          />
        </header>
        <form onSubmit={handleSubmit}>
          <p className='p1'>Увійти в Instagram</p>
          <div className='holder'>
            <input
              type="text"
              placeholder="Номер мобільного телефону, або ім'я користувача"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Увійти</button>
          </div>
          <p className='p2'>Забули пароль?</p>
        </form>
        <div className='holder2'>
          <button className='btn2'>Створити обліковий запис</button>
          <img className='logo2' src="https://pngimg.com/d/meta_PNG5.png" alt="" />
        </div>
      </main>
    </>
  )
}

export default App
