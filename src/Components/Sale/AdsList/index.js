import React, { useEffect, useState } from "react";
import { database } from "../../../firebase";
import MyAds from "./MyAds";

export default function AdsList() {
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    const subc = database.collectGp.where(
      "userId",
      "==",
      "hZ8wx6gkYkfM0va4mvuv1MQWhhx2"
    );

    subc.onSnapshot((querySnapshot) => {
      setAdData( querySnapshot.docs.map(database.formatDoc));
    });
  }, []);


// console.log(adData);
  return (
    <>
      {adData.length > 0 && adData.map((arr, index) => {
         
        //  console.log(arr);
       return  <MyAds key={arr.id} ads={arr}/>
        
      })}
    </>
  );
}
