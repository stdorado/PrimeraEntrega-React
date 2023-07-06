import "./contenedor.css"


const Contenedor = ({props_saludo})=>{
            return(
                    <div className="contenedor-saludo">
                        <h1>{props_saludo}</h1>
                    </div>
            )
 }

 export default Contenedor;