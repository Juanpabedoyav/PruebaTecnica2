import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { types } from "../types/types";

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
            dispatch(filtracion(menorPrice))
            
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
        dispatch(filtracion(mayorPrice))
        
    }     
})
  console.log(mayorPrice)

 }
      
}      




    //   export const busqueda = (nombre) => {
  
    //     return async( ) => { 
    //         const productos = collection(db,"products");
    //         const q = query(productos,where("precio","==",nombre))
    //         const datos = await getDocs(q);
    //         //console.log(datos)
    //         const item = [];
    //         datos.forEach((docu) => {
    //             item.push(docu.data())
    //         }) 
    //         console.log(item)
    //     }
    // }
    