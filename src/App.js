import useFormulario from './hooks/useFormulario';
import Input from './components/Input';

function App() {
  const [formulario, handleChanges] = useFormulario({nombre:''});
  console.log(formulario);
  return (
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
  );
}

export default App;
