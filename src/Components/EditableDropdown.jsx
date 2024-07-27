import { useRef, useState } from "react"

export default function EditableDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [secondDrop, setsecondDrop] = useState(false)
  const [selectedOption, setSelectedOption] = useState('step')
  const [secondSelectedOption, setSecondSelectedOption] = useState('')
  const [editingOption, setEditingOption] = useState(null)
  const [search, setSearch] = useState("")
  const [options, setOptions] = useState(['Click on "Text"', 'Click on "Text" after "Text"', 'Click on "Text" for "Text"'])
  const [option2, setOption2] = useState([
    
    { value: 'hii', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#aa8ed6" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" /></svg> },
    { value: 'hello', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#aa8ed6" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" /></svg> },
    { value: 'car', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#aa8ed6" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" /></svg> },
    { value: 'train', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#aa8ed6" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" /></svg> },
    
    ])
  // , 'hello','car', 'train'])
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setOptions(options)
  }
  const toggleSecondDropdown = () => {
    setIsOpen(!secondDrop)
  }

  // const search=(keyword)=>{
  //   option2.filter((element)=>{
  //     element.contains(keyword);
  //   })
  // }

  const inputRef = useRef()
  const btnTxt = useRef()
  const handleOptionEdit = () => {
    inputRef.current.classList.remove('hidden');
    inputRef.current.focus();
    // inputRef.current.value = selectedOption
    btnTxt.current.classList.add('hidden');

    // setEditingOption(option)
  }
  const handleOptionSave = (option, newText) => {
    const updatedOptions = options.map((opt) => (opt === option ? newText : opt))
    setOptions(updatedOptions)
    setSelectedOption(newText)
    console.log(option, updatedOptions);

    // setOptions(updatedOptions)
    // options=updatedOptions
    // setEditingOption(null)
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          onDoubleClick={() => handleOptionEdit()}
          className=" items-center min-w-64 inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
        >

          {selectedOption.split('"').map((text, i) =>
            (i % 2 === 1 && i < 3) ? (

              <span className="">  {console.log(i)}

                {/* <span className={`text-orange-500`}>"</span> */}
                <input key={i}
                  ref={inputRef}
                  onChange={(e) => {
                    if (e.target.value != 'Text') {
                      e.target.classList.remove('text-orange-500')
                      e.target.classList.add('text-green-500')
                    }
                    if (e.target.value == 'Text') {
                      e.target.classList.remove('text-green-500')
                      e.target.classList.add('text-orange-500')
                    }
                  }}
                  type="text"
                  defaultValue={text}
                  className="text-orange-500 text-bold focus:outline-none  text-md w-10 overflow-hidden whitespace-nowrap resize-none"

                // onChange={(e)=>{setSelectedOption(e.target.value)}}
                // onBlur={(e) => {
                //   // handleOptionSave(selectedOption, e.target.value)
                //   // e.target.classList.add('hidden')
                //   // btnTxt.current.classList.remove('hidden')
                // }}

                />
                {/* <span className="text-orange-500">"</span> */}
              </span>
            ) : (i % 2 === 1 && i > 2) ? (
              <span className="text-orange-500 flex items-center gap-1"
                onDoubleClick={() => {
                  setsecondDrop(true)
                }}
                onClick={() => {
                  setsecondDrop(false)
                }}
              >"{secondSelectedOption ? <span className="flex gap-1 items-center">
                {secondSelectedOption.svg}
                {secondSelectedOption.value}</span>
                : text} "</span>
              //  #######-----------//OnClick Functionality To Be Implemented------#####
            ) : (text)
          )}




          {/* <div ref={btnTxt}>{selectedOption}</div> */}

          {selectedOption === 'step' ? <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600" onClick={() => setSelectedOption('step')} width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z" /></svg>
          }
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <div key={index} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">

                <>
                  <svg
                    className="w-6 h-6 text-green-500 bg-green-100 rounded-full p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700" onClick={() => setSelectedOption(option)} >
                    {option.split('"').map((text, i) =>
                      i % 2 === 1 ? (
                        <span key={i} className="text-orange-500">
                          {text}
                        </span>
                      ) : (
                        text
                      ),
                    )}
                  </span>
                </>

              </div>
            ))}
          </div>
        </div>
      )}
      {secondDrop && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="border border-3 mx-2 my-1 border-transperent w-11/12  flex items-center">
              <input type="text" className="focus:outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <span onClick={() => {
                setSearch("")

              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0" /></svg>
              </span>
            </div>
            {option2.filter((element) => element.value.includes(search)).map((option, index) => (
              <div key={index} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">

                <>

                  <span className="ml-2 text-gray-700" onClick={() => {
                    setSecondSelectedOption(option)
                    setsecondDrop(false)
                  }
                  } >
                    {/* {option.split('"').map((text, i) =>
                     ( */}
                    <div className="flex items-center gap-3">
                      {option.svg}

                      {option.value}</div>
                    {/* ),
                    )} */}
                  </span>
                </>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}