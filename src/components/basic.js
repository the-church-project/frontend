import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { ImUndo } from "react-icons/im";

export const CustomButton = (props) => {
   return (
      <Link to={props.href} >
         <Button className={"text-uppercase " + props.className}
            style={props.style}
            type={props.type}
            variant={props.variant?props.variant:"dark"} block>
            {props.text ? props.text : "test"}{props.children ? props.children : null}</Button>
      </Link>
   )
}

export const Headings = (props) => {
   return (
      <div className={props.className}>
         <Link className="spl" to="/">
            <ImUndo size="20px" />
         </Link>
         <h1 className="text-capitalize mt-4 mb-0" style={{ fontSize: "32px" }}>{props.title}</h1>
         <Link className="spl" to={props.href}>
            <small className="text-capitalize text-muted font-weight-light" style={{ fontSize: "15px" }}>{props.subtitle}</small>
         </Link>
      </div>
   )
}