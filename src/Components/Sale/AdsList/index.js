import React, { useEffect, useState } from "react";
import { database } from "../../../firebase";
import MyAds from "./MyAds";
import { useParams } from "react-router";
import { useAuth } from "../../../contexts/AuthContext";

export default function AdsList() {
  const [adData, setAdData] = useState([]);
  const {myads} = useParams();
const {currentUser }= useAuth();




  useEffect(() => {
    

    
    
    if(myads && currentUser){

      const subc = database.collectGp.where(
          "userId",
          "==",
          currentUser.uid
        );
        
        subc.onSnapshot((querySnapshot) => {
            setAdData( querySnapshot.docs.map(database.formatDoc));
          });
          
        }else
        {

          
          const subc = database.collectGp
          
          subc.onSnapshot((querySnapshot) => {
            setAdData( querySnapshot.docs.map(database.formatDoc));
          });
        }
        }, []);
        

// console.log(adData);
  return (
    <>
      {adData.length > 0 && adData.map((arr, index) => {
         
        //  console.log(arr);
       return  <MyAds key={arr.id} ads={arr} noEdit ={ myads && currentUser ? true : false  }/>
        
      })}
    </>
  );
}
