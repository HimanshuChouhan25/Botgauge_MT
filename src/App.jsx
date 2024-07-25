import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EditableDropdown from './Components/EditableDropdown'
import Dropdown from './Components/Dropdown'

function App() {
  const [count, setCount] = useState(0)
  

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('step')
  const options = ['Click on "Text"', 'Click on "Text" after "Text"', 'Click on "Text" for "Text"']
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  return (
  <>


    <EditableDropdown/>
    {/* <Dropdown/> */}
    </>
  )
}

export default App
