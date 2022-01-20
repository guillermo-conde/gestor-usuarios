import { useState } from 'react';

const useFormulario = (inicial) =>{
    const [formulario, setFormulario] = useState(inicial);
    const handleChanges = (e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setFormulario(inicial);
  }

  return [formulario, handleChanges, reset];
}

export default useFormulario;