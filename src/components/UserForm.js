import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForm = ({submit}) => {
    const [formulario, handleChanges, reset] = useFormulario({nombre:'', apellido:'', mail:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        reset();
    }
    return(
        <form onSubmit={handleSubmit}>
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
    );
}

export default UserForm;