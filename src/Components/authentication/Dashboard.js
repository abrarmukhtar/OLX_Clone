import React from "react";
import Profile from "./Profile";
import CenteredContainer from "./CenteredContainer";
import {useHistory} from 'react-router-dom'
import { Button } from "react-bootstrap";
export default function Dashboard() {
  
    const history = useHistory();
  
    return (


    <CenteredContainer>
      <div>this is dashboard</div>
      <Button onClick={()=> history.push('/user')}> Profile</Button>
    </CenteredContainer>
  );
}
