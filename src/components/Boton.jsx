

// eslint-disable-next-line react/prop-types
const Boton = ({value,clas,funcion})=>{
    
    return(
        <button onClick={funcion} className={clas}>{value}</button>
    )
}

export default Boton