import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputvalue, setInputvalue] = useState('One Punch')
    const onInputChange=({target})=>{
        console.log(target.value)
        setInputvalue(target.value)
    }
    const onSubmit=(event)=>{
        console.log(event)
        event.preventDefault();

        if(inputvalue.trim().length<=1)return

        //setCategories(categories =>[inputvalue, ...categories])
        onNewCategory(inputvalue.trim())
        setInputvalue('');
        
    }
    return (
     <form onSubmit={onSubmit}>
        <input
    type=""
    placeholder="Buscar Gifs"
    value={inputvalue}
    onChange={onInputChange}
    />

     </form>   
    
  )
}
