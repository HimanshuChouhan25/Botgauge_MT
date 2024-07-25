import { useRef, useState } from "react"

export default function Dropdown() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('step')
  const [editingOption, setEditingOption] = useState(null)
  const [options,setOptions] = useState(['Click on "Text"', 'Click on "Text" after "Text"', 'Click on "Text" for "Text"'])

  const dynamicData=[
    {option1:'Text',option2:''},
    {option1:'Text1',option2:'for "Text"'},
    {option1:'Text2',option2:'after "Text"'},
  ]
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const inputRef=useRef()
  const btnTxt=useRef()
  const handleOptionEdit = () => {
    inputRef.current.classList.remove('hidden');
    inputRef.current.focus();
    inputRef.current.value=selectedOption
    btnTxt.current.classList.add('hidden');

  }
  const handleOptionSave = (option, newText) => {
    const updatedOptions = options.map((opt) => (opt === option ? newText : opt))
    setOptions(updatedOptions)
    setSelectedOption(newText)
    console.log(option,updatedOptions);
    
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
          className="min-w-64 inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
            
                {/* {editingOption === option ? ( */}
                    <input
                    ref={inputRef}
                    // onChange={(e)=>{setSelectedOption(e.target.value)}}
                    onBlur={(e)=>{
                        handleOptionSave(selectedOption,e.target.value)
                            e.target.classList.add('hidden')
                            btnTxt.current.classList.remove('hidden')
                        }}
                      type="text"
                      defaultValue={selectedOption}
                    
                    //   onBlur={(e) => handleOptionSave(option, e.target.value)}
                    //   onKeyDown={(e) => {
                    //     if (e.key === "Enter") {
                    //       handleOptionSave(option, e.target.value)
                    //     }
                    //   }}
                      className="hidden w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  {/* ) : */}
                  <div ref={btnTxt}>{selectedOption}</div>
      
        {/* // null */}
          {/* } */}
          <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {dynamicData.map((option, index) => (
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
                    <span className="ml-2 text-gray-700"   onClick={()=>setSelectedOption(option)} >
                      <div>{`Click One 
                      "${option.option1&&option.option1}" ${option.option2 ? option.option2:''}`} </div>
                      </span>
                      
                        {/* {option.split('"').map((text, i) =>
                        i % 2 === 1 ? (
                          <span key={i} className="text-orange-500">
                            {text}
                          </span>
                        ) : ( */}
                        
                        {/* ),
                      )} */}
                   
                  </>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}