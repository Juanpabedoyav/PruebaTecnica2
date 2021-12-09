import { Formik, Form,Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { busqueda, getInfoA, getInfoPrecio } from '../Redux/action/getDataAction';
import { MainStyle } from '../styles/Main.style';

const Main = () => {

const dispatch = useDispatch();
const {data} = useSelector(state => state.data)
// const {data}= state
// const [inf, setInf] = useState()


const cargarDatos= ()=>{
    dispatch(getInfoA())
    console.log(data.map(el=> el.nombre))

}
    
// const stateInfo = (state)=>{
//     setInf(state);
//     console.log(inf)
// } 


const menorPrecio =()=>{
cargarDatos()
dispatch(getInfoPrecio())
}

const mayorPrecio =()=>{
}
// const cargarDatos = ()=>{
//     console.log(state.data)
   
// }
    return (
<>
<MainStyle>
 
 <form>   
    <input type="text" 
    name='nombre'
    // value={}
/>    
</form>
  <button onClick={()=>menorPrecio()}>menor precio</button>
  <button onClick={()=>mayorPrecio()}>mayor precio</button>
 

        
<button onClick={()=>cargarDatos()}>Cargar data</button>
{/* <div className="card">
                <div className="img">
                <img src='' alt="" />
                </div>
             <div className="info">
             <h1 className='name-producto '></h1>
             <h1 className='price-product'></h1>
             </div>

         </div> */}

{data.map((el)=> (

        <div className="card">
                <div className="img">
                <img style={{alignItems:'center'}}src={el.imagen} alt="" />
                </div>
             <div className="info">
             <h1 className='name-producto '>{el.nombre}</h1>
             <h1 className='price-producto'>R $ {el.precio}</h1>
             </div>
            <button className='comprar'>Comprar</button>
         </div>

))
}   
</MainStyle>
</>
    )
}

export default Main
