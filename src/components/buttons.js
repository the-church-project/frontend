import { Button } from 'react-bootstrap';
import React from 'react';

function CustomButton(props) {
   if (props.type === "white"){
      return (
         <Button className="text-uppercase my-3" variant="outline-dark" block>{props.text ? props.text : "test"}</Button>
      )
   }
   else{
      return (
         <Button className="text-uppercase my-3" variant="dark" block>{props.text ? props.text : "test"}</Button>
      )
   }
   
}

export default CustomButton