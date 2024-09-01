
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight , faAlignJustify , faAlignCenter, faAlignLeft} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



function App() {

const [bold , setBold] = useState('')
const [input , setInput] = useState('')
const [italic , setItalic] = useState()
const [underline , setUnderline] = useState()
const [textColor, setTextColor] = useState('#000000')
const [fontSize, setFontSize] = useState('30px');
const [fontFamily , setFontFamily] = useState('sans-serif')
const[textTransform , setTextTransform] = useState("none")
const [textAlign , setTextAlign]= useState ("left")
const[clearText , setClearText] = useState('CLear')

const handleBold = ()=>{
  setBold(!bold)
};
const handleItalic = ()=>{
  setItalic(!italic)
}

const handleUnderline = ()=>{
  setUnderline(!underline)
}

const handleColorChange = (event) => {
  setTextColor(event.target.value);
};

const handleFontFamily = (e)=>{
setFontFamily(e.target.value)
}
  
const handleFontsize = (e)=>{
setFontSize(e.target.value)
}
const handleTextTransform = (e)=>{
setTextTransform(e.target.value)
}
const handleTextAlign = (newAlign)=>{
setTextAlign(newAlign)
}

  const  handleClearText = ()=>{
    setInput('');
  }
  const countLetters = (text) => {
   
    return text.replace(/\s+/g, '').length;
  }

  const countWords = (text) => {
    if (text.trim().length === 0) {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

 return(
 <div>
  <div className="w-full bg-sky-900  text-white text-center py-2">
  <h1 className=" text-[50px] text-700">MS WORD</h1>
  <h2  className="text-[30px]">by Noman Asghar</h2>
  </div>

  <div className="w-full bg-gray-300 flex items-center gap-3 ps-5 flex-wrap pb-3">

                     { /* bold section */}

    <div className='flex gap-1 bg-white px-3 py-3 my-3 '>
    <div className='bg-black text-white w-[40px] text-center rounded-lg'
    onClick={handleBold}><p>B</p></div>  
    <div className='bg-black text-white w-[40px] text-center rounded-lg' onClick={handleItalic}><p>I</p></div>
    <div className=' w-[30px] text-center underline' onClick={handleUnderline}><p>U</p></div>  
    </div>

       {/* writing section */}

    <div className=''>
      <select className='py-3 px-10 text-lg ' value={fontFamily} onChange={handleFontFamily}>
        <option value={"sans-serif"}>Sans serif</option>
        <option value={"systum-ui"}>Systum ui</option>
        <option value={"Georiga"}>Georiga</option>
        <option value={"cursive"}>Cursive</option>
      </select>
    </div>

       {/* color section */}

    <div className='bg-white py-3 px-3'>
      <input type='color' value={textColor} onChange={handleColorChange}></input>
    </div>


    {/* font size section */}

    <div className=''>
      <select className='py-3 px-6 text-lg' value={fontSize} onChange={handleFontsize}>
        <option value={"30px"}>30px</option>
        <option value={"40px"}>40px</option>
        <option value={"50px"}>50px</option>
        <option value={"60px"}>60px</option>
      </select>
    </div>

    {/* text alginment */}

    <div className=''>
      <select className='py-3 px-10 text-lg' value={textTransform} onChange={handleTextTransform}>
        <option value={"uppercase"}>upper case</option>
        <option value={"lowercase"}>lower case</option>
        <option value={"capitalize"}>capitalize</option>
        <option value={"none"}>None</option>
      </select>
    </div>

    {/* font aligment */}

    <div className='flex gap-5 bg-white py-3 px-10 text-xl' >
    <div><FontAwesomeIcon onClick={()=>handleTextAlign('right')} icon={faAlignRight} /> </div>
    <div><FontAwesomeIcon  onClick={()=>handleTextAlign('justify')} icon={faAlignJustify} /> </div>
    <div><FontAwesomeIcon onClick={()=>handleTextAlign('center')} icon={faAlignCenter} /> </div>
    <div><FontAwesomeIcon onClick={()=>handleTextAlign('left')} icon={faAlignLeft} /> </div>
    </div>

  </div>

  {/* Bottam section */}

  <div className='w-full bg-gray-300 flex ps-5 items-center gap-3 pb-3'>

    <p className='py-3 bg-white px-3' onClick={handleClearText}>{clearText}</p>
    <p>Count Latter : {countLetters(input)}</p>
    <p className='py-3 bg-white px-3'>Count Words :{countWords(input)}</p>
  </div>


  {/* input section */}

  <div className='w-full'>
    <input type='text'
    className='w-full h-[490px] outline-none text-xl'
    onChange={(e)=>setInput(e.target.value)}
    value={input}
    style={{fontWeight: bold ? 'bold':  'normal', fontStyle: italic ? 'italic' : 'normal', 
    textDecoration:underline ? 'underline' : 'none' , fontSize:fontSize , fontFamily:fontFamily ,
     textTransform:textTransform , textAlign: textAlign , color:textColor
    }}

    ></input>
  </div>

 </div>
 )
}

export default App;
