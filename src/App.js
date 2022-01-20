import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChanges, reset] = useFormulario({nombre:'', apellido:'', mail:''});
  
  const submit = e =>{
    e.preventDefault();
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset();
  }

  console.log(formulario, usuarios);
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form onSubmit={submit}>
            <Input label='Nombre' 
              name='nombre' 
              value={formulario.nombre} 
              onChange={handleChanges} 
              placeholder='Nombre'/>

            <Input label='Apellido'   
              name='apellido' 
              value={formulario.apellido} 
              onChange={handleChanges} 
              placeholder='apellido'/>

            <Input label='E-mail'   
              name='mail' 
              value={formulario.mail} 
              onChange={handleChanges} 
              placeholder='mail'/>
            
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
    
  );
}

export default App;
