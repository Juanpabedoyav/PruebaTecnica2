import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { types } from "../types/types";

export const getInfoS = (data) => {
    return{
    type: types.data,
    payload: data,
  }
    
} 
 
 export const getInfoA = () => {
      return async (dispatch) => {
        const docRef = collection(db, "products");
        const getData = await getDocs(docRef);
        const info =[];
        console.log(getData)
        getData.forEach((doc)=>{
          info.push(doc.data())

        })
        dispatch(getInfoS(info))
        // console.log(info)
      }
        
    }    

    export const getInfoPrecio = () => {
      return async (dispatch) => {
        const docRef = collection(db, "products");
        const getData = await getDocs(docRef);
        const info =[];
        const price=[];
        console.log(getData)
        getData.forEach((doc)=>{

          info.push(doc.data());
          price.push(doc.data().precio);
        })
        price.forEach((doc)=>{
         if(doc < 200){
          console.log(doc)
          dispatch(getInfoS(price))
         }
      
        })


        // console.log(price)
      }
        
    }    


    export const busqueda = (nombre) => {

      return async( ) => { 
          const productos = collection(db,"products");
          const q = query(productos,where("precio","==",nombre))
          const datos = await getDocs(q);
          //console.log(datos)
          const item = [];
          datos.forEach((docu) => {
              item.push(docu.data())
          }) 
          console.log(item)
      }
  }
  