import { Formik, Form,Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { busqueda, BusquedaProducto, getInfoPrecioMayor, getInfoPrecioMenor } from '../Redux/action/filtroAction';
import {getInfoA } from '../Redux/action/getDataAction';

import { MainStyle, StyleFiltros } from '../styles/Main.style';

const Main = () => {

const dispatch = useDispatch();
const {data} = useSelector(state => state.data)
const {filtro} = useSelector(state => state.filtro)
// const {data}= state
// const [inf, setInf] = useState()

useEffect(() => {
    dispatch(getInfoA())

}, [dispatch])
// const cargarDatos= ()=>{
//     dispatch(getInfoA())
//     // console.log(data.map(el=> el.nombre))

// }
    



const menorPrecio =()=>{
dispatch(getInfoPrecioMenor())
}

const mayorPrecio =()=>{
    dispatch(getInfoPrecioMayor())
}

    return (
<>
<StyleFiltros>

 <Formik
 initialValues={{
     nombre:'',
 }}
onSubmit={
    (valores)=>{dispatch(BusquedaProducto(valores.nombre))}
}
 >
 <Form>   
    <Field type="text" 
    name='nombre'
    
/>  
<button type='submit'>buscar</button>  
</Form>

</Formik>

<button  style={{margin:'10px'}}onClick={()=>menorPrecio()}>menor precio</button>
  <button onClick={()=>mayorPrecio()}>mayor precio</button>
  </StyleFiltros>


  <MainStyle>
{
data===undefined?
(<br></br>):
(
    data.map((el)=> (

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
)
}   
{
filtro=== undefined?
(<br></br>):

(
filtro.map((ele)=> (
<div className="card">
        <div className="img">
        <img style={{alignItems:'center'}}src={ele.imagen} alt="" />
        </div>
     <div className="info">
     <h1 className='name-producto '>{ele.nombre}</h1>
     <h1 className='price-producto'>R $ {ele.precio}</h1>
     </div>
    <button className='comprar'>Comprar</button>
 </div>
))

)
}  

</MainStyle>
</>
    )
}

export default Main
