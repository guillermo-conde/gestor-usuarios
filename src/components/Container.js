import './Container.css'

const Containder = ({children}) =>{
    return (
        <div className='container'>
            {children}
        </div>
    );
}

export default Containder;