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
