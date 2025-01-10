import { useState } from 'react'
import './App.css'
import { Button } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Harolito { count } </p>
      <Button onClick={() => setCount(count +1 )} type="primary">Button</Button>
      
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </>
  )
}

export default App
