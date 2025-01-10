import { useState } from 'react'
import './App.css'
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Harolito { count } </p>
      <Button onClick={() => setCount(count +1 )} type="primary">Button</Button>
    </>
  )
}

export default App
