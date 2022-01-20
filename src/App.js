import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';

function App() {
  const [formulario, handleChanges] = useFormulario({nombre:'', apellido:''});
  console.log(formulario);
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form>
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
          </form>
        </div>
      </Card>
    </Container>
    
  );
}

export default App;
