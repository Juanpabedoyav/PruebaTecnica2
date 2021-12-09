import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { types } from "../types/types";
import { getInfoS } from "./getDataAction";

const filtracion = (data)=>{
 return{
   type: types.filtro,
   payload: data,
 }
}

    export const getInfoPrecioMenor = () => {
        return async (dispatch) => {
          const docRef = collection(db, "products");
          const getData = await getDocs(docRef);
          const info =[];
          const menorPrice=[]
          console.log(getData)
          getData.forEach((doc)=>{
  if(doc.data().precio < 200){
            menorPrice.push(doc.data());
            // console.log
            dispatch(getInfoS(menorPrice))
            
        }     
    })
      console.log(menorPrice)
  
     }
          
}    
  
export const getInfoPrecioMayor = () => {
    return async (dispatch) => {
      const docRef = collection(db, "products");
      const getData = await getDocs(docRef);
      const mayorPrice=[]
      console.log(getData)
      getData.forEach((doc)=>{
if(doc.data().precio > 200){
    mayorPrice.push(doc.data());
        // console.log
        dispatch(getInfoS(mayorPrice))
        
    }     
})
  console.log(mayorPrice)

 }
      
}      
export const BusquedaProducto = (nombre) => {
  return async (dispatch) => {
    const docRef = collection(db, "products");
    const getData = await getDocs(docRef);
    const busqueda=[]
    console.log(getData)
    getData.forEach((doc)=>{
if(doc.data().nombre === nombre){
  busqueda.push(doc.data());
      // console.log
      dispatch(getInfoS(busqueda))
      
  }     
})
console.log(busqueda)

}
    
}


