<<<<<<< HEAD
import React, {useState,useEffect} from "react";
import "./ItemCount.css"


export const ItemCount = ({initial,stock,onAdd})=>{
const [Count,setCount] = useState(parseInt(initial))
const Restar = ()=>{
    setCount(Count - 1)
}
const Sumar = ()=>{
    setCount(Count + 1)
}
useEffect(
    ()=>{
      setCount(parseInt(initial))
    },[initial])
return(
    <div className="Contador">
        <button className="btn btn-light restar" disabled ={Count <= 1} onClick={Restar}>-</button>
        <span className=" text-center numberStock "> {Count}</span>
        <button className="btn btn-light sumar" disabled ={Count >= stock} onClick={Sumar}>+</button>
        <div>
        </div>
        <button className="btn btn-light comprar" disabled={stock <= 0}  onClick={()=>onAdd(Count)}>Comprar</button>
    </div>
    )
}
=======
import React, {useState,useEffect} from "react";
import "./ItemCount.css"


export const ItemCount = ({initial,stock,onAdd})=>{
const [Count,setCount] = useState(parseInt(initial))
const Restar = ()=>{
    setCount(Count - 1)
}
const Sumar = ()=>{
    setCount(Count + 1)
}
useEffect(
    ()=>{
      setCount(parseInt(initial))
    },[initial])
return(
    <div className="Contador">
        <button className="btn btn-light restar" disabled ={Count <= 1} onClick={Restar}>-</button>
        <span className=" text-center numberStock "> {Count}</span>
        <button className="btn btn-light sumar" disabled ={Count >= stock} onClick={Sumar}>+</button>
        <div>
        </div>
        <button className="btn btn-light comprar" disabled={stock <= 0}  onClick={()=>onAdd(Count)}>Comprar</button>
    </div>
    )
}
>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
