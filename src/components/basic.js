import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { ImUndo } from "react-icons/im";

export const CustomButton = (props) => {
   return (
      <Button className={"text-uppercase " + props.className}
         style={props.style}
         type={props.type}
         variant={props.variant ? props.variant : "dark"}
         href={props.href ? props.href : null}
         block>
         {props.text ? props.text : "test"}{props.children ? props.children : null}
      </Button>
   )
}

export const Headings = (props) => {
   return (
      <div className={props.className}>
         <Link className={"spl " + props.icon ? "d-none" : ""} to="/">
            <ImUndo size="20px" />
         </Link>
         <h1 className="text-capitalize mt-4 mb-0" style={{ fontSize: "32px" }}>{props.title}</h1>
         <Link className="spl" to={props.href ? props.href : "/"}>
            <small className="text-capitalize text-muted font-weight-light" style={{ fontSize: "15px" }}>{props.subtitle}</small>
         </Link>
      </div>
   )
}

export const CustomCard = props => {
   return (
      <Card className={"bg-dark text-white h-100 " + props.className} >
         <Card.Img width={props.width ? props.width : "auto"}
            height={"100%"}
            src={props.imgsrc ? props.imgsrc : "https://picsum.photos/300/200/?blur=2?random=" + props.id + ".png"} alt="Card image" />
         <Card.ImgOverlay className="grad-bg" style={{ textAlign: (props.key % 2 === 0) ? "right" : "left" }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
               {props.description ? props.description : "Click to know more"}
            </Card.Text>
            {props.time ? <small>{"time: " + props.time}</small> : null}
         </Card.ImgOverlay>
      </Card>
   )
}

export const HumbergerMenu = props => {
   return (
      <div>
         <div class="hamburger-menu">
            <button class="burger" data-state="closed">
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
         <nav data-state="closed">
            <ul>
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="/">Services</a>
               </li>
               <li>
                  <a href="/">About</a>
               </li>
               <li>
                  <a href="/">Contact</a>
               </li>
            </ul>
         </nav>
      </div>
   )
}