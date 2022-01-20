import { useState } from 'react';

const useFormulario = (inicial) =>{
    const [formulario, setFormulario] = useState(inicial);
    const handleChanges = (e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
return [formulario, handleChanges];
}

export default useFormulario;