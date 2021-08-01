import React from "react";
import { database } from "../../../firebase";
import { Card, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
export default function MyAds({ ads, noEdit }) {
  

  const history = useHistory();
  

  return (
    <>
      <div>
        {!noEdit && <h1> Frequent Recommendations </h1>}
        <div style={{border: "1px solid black"}}>
          <div>{ads.adTitle}</div>
          <div>{ads.description}</div>
          <div>{ads.price}</div>
          <div>{ads.uName}</div>
          <div>{ads.phNumber}</div>
          <div>{ads.state}</div>
          <div>{ads.city}</div>
          <div>{ads.neighbour}</div>
          {noEdit && <div> <Button onClick ={()=> history.push(`/edit/${ads.id}`)}>Edit</Button></div>}
          {/* {ads.createdAt} */}
        </div>
      </div>
    </>
  );
}
