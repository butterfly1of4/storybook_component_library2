/* This is the original library */

import React, { Component } from "react";
import "./Button.css";
import "./Button.stories.js";
import Cart from "../Button/cart_2.png"
import Heart from "../Button/hearts.png"
import "../../index.css"

// This is a functional component - just sent up a little differently as an arrow function!

const Button = (props) => {
  // let classList = ""
  <button className={classList} onClick={props.onClick}>{props.label}</button>
  let classList = [];
  let cart = <img src={Cart} />
  let heart = <img src={Heart} />
  let types = [ "primary","success", "danger", "warning", "default","heart","cart", "tiny","primaryHover","image","littleIcon"];
  
  if (types.includes(props.type)) {
    classList.push(` button-${props.type}`);
  }

  //try remove button 
    if (props.large) {
        classList.push(` button-large`);
      }
    if (props.small) {
      classList.push(` button-small`)
    }
    if (props.tiny){
      classList.push(` button-tiny`)
    }
    if (props.cart) {
      classList.push(` button-cart`)
    }
    if (props.heart) {
      classList.push(` button-heart`)
    }
    if (props.opaque) {
      classList.push(` button-${props.type}-opaque`);
    }
    if (props.hover) {
      classList.push(` button-${props.type}:hover`);
    }
    if (props.primaryHover) {
      classList.push(` button-${props.type}-hover`)
    };
    if (props.border) {
      classList.push(` button-${props.type}-border`);
    }
    if (props.border) {
      classList.push(` button-${props.type}-disabled`);
    }
    if (props.cart) {
      classList.push(` button-${props.cart}`);
    } 
    if (props.heart) {
      classList.push(` button-${props.heart}`);
    }
    if (props.littleIcon) {
      classList.push(` button-${props.littleIcon}`);
    }

  return <button className={classList.join(" ")} onClick={props.onClick}>{props.label}</button>;
};
// onClick={props.when(Clicked)}
export default Button;