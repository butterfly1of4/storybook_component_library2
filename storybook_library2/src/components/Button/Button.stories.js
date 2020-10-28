//*this is the new library*/
/* This is the original library */

import React, { Component } from "react";
import "./Button.css";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Cart from "../../assets/cart_2.png";
import Heart from "../../assets/hearts.png";
import "../../index.css";
// function onClick(){
//     alert("I'm clicked")
// }
// onClick={onClick}

storiesOf("Button", module)
  //Primary

  .add("Small Primary", () => (
    <Button type="primary" primary small label="Primary" />
  ))
  .add("Hover Primary", () => (
    <Button type="primary" small hover label="Primary" />
  ))
  .add("Border Primary", () => (
    <Button type="primary" small border disabled label="Primary" />
  ))
  .add("Opaque primary", () => (
    <Button type="primary" small opaque disabled label="Primary" />
  ))
  .add("Large Border primary", () => (
    <Button type="primary" large border label="Primary" />
  ))
  .add("Large Opaque primary", () => (
    <Button type="primary" large opaque disabled label="Primary" />
  ));
// .add('Large primary', () => <Button type="primary" large disabled label="Primary" />)

// .add('Small Danger', () => <Button type="danger" small disabled label="Danger" />)
// .add('Hover Danger', () => <Button type="danger" hover small primaryHover  label="Danger" />)
// .add('Border Danger', () => <Button type="danger" small border disabled label="Danger" />)
// .add('Opaque Danger', () => <Button type="danger" small opaque disabled label="Danger" />)
// .add('Large Border Danger', () => <Button type="danger" large border disabled label="Danger" />)
// .add('Large Opaque Danger', () => <Button type="danger" large opaque disabled label="Danger" />)
// .add('Large Danger', () => <Button type="danger" large label="Danger" />)

// .add('Small Success', () => <Button type="success" small disabled label="Success" />)
// .add('Small Border Success', () => <Button type="success" small border disabled label="Success" />)
// .add('Small Hover Success', () => <Button type="success" small hover primaryHover  label="Success" />)
// .add('Small Opaque Success', () => <Button type="success" small opaque disabled label="Success" />)
// .add('Large Success', () => <Button type="success" large disabled label="Success" />)
// .add('Large Opaque Success', () => <Button type="success" large opaque disabled label="Success" />)
// .add('Large Border Success', () => <Button type="success" large border disabled label="Success" />)

// .add('Small Warning', () => <Button  type="warning" small disabled label="Warning" />)
// .add('Small Hover Warning', () => <Button  type="warning" small hover primaryHover  label="Warning" />)
// .add('Small Opaque Warning', () => <Button  type="warning" small opaque disabled label="Warning" />)
// .add('Small Border Warning', () => <Button  type="warning" small border disabled label="Warning" />)
// .add('Large Border Warning', () => <Button  type="warning" large border disabled label="Warning" />)
// .add('Large Opaque Warning', () => <Button  type="warning" large opaque disabled label="Warning" />)
// .add('Large Warning', () => <Button  type="warning" large disabled label="Warning" />)

// .add('Small Default', () => <Button  type="default" small disabled label="Default" />)
// .add('Small Border Default', () => <Button  type="default" small border disabled label="Default" />)
// .add('Small Opaque Default', () => <Button  type="default" small opaque disabled label="Default" />)
// .add('Small Hover Default', () => <Button  type="default" small hover primaryHover  label="Default" />)
// .add('Larger Opaque Default', () => <Button  type="default" large opaque disabled label="Default" />)
// .add('Large Border Default', () => <Button  type="default" large border disabled label="Default" />)
// .add('Large Default', () => <Button  type="default" large color disabled label="Default" />)

// .add('AddCart', () => <Button type="primary" small opaque cart label="Add To Cart" />)
// .add('AddFavorites', () => <Button type="primary" image="var=(--Cart)" label="Add To Cart" small opaque heart/>)
// .add('Heart', () => <Button type="primary"  heart opaque tiny />)
// .add('Cart', () => <Button type='primary' cart tiny opaque />)
//********* */






// /* This is the original library */

// import React, {Component} from 'react';
// import './Button.css'
// import { storiesOf } from '@storybook/react';
// import Button from './Button';
// // import Cart from "../Button/cart_2.png"
// // import Heart from "../Button/hearts.png"
// import "../../index.css"
// // function onClick(){
// //     alert("I'm clicked")
// // }
//     // onClick={onClick} 

// storiesOf('Button', module)
// //Primary 
    

// .add('Small Primary', () => <Button type="primary" small disabled label="Primary" />)                                               
// .add('Hover Primary', () => <Button type="primary" small primaryHover hover label="Primary" />)
// .add('Border Primary', () => <Button type="primary" small border disabled label="Primary" />)
// .add('Opaque primary', () => <Button type="primary" small opaque disabled label="Primary" />)
// .add('Large Border primary', () => <Button type="primary" large border label="Primary" />)
// .add('Large Opaque primary', () => <Button type="primary" large opaque disabled label="Primary" />)                                               
// .add('Large primary', () => <Button type="primary" large disabled label="Primary" />)

// .add('Small Danger', () => <Button type="danger" small disabled label="Danger" />)                                               
// .add('Hover Danger', () => <Button type="danger" hover small primaryHover  label="Danger" />)
// .add('Border Danger', () => <Button type="danger" small border disabled label="Danger" />)
// .add('Opaque Danger', () => <Button type="danger" small opaque disabled label="Danger" />)
// .add('Large Border Danger', () => <Button type="danger" large border disabled label="Danger" />)
// .add('Large Opaque Danger', () => <Button type="danger" large opaque disabled label="Danger" />)                                               
// .add('Large Danger', () => <Button type="danger" large label="Danger" />)

// .add('Small Success', () => <Button type="success" small disabled label="Success" />)
// .add('Small Border Success', () => <Button type="success" small border disabled label="Success" />)
// .add('Small Hover Success', () => <Button type="success" small hover primaryHover  label="Success" />)
// .add('Small Opaque Success', () => <Button type="success" small opaque disabled label="Success" />)
// .add('Large Success', () => <Button type="success" large disabled label="Success" />)
// .add('Large Opaque Success', () => <Button type="success" large opaque disabled label="Success" />)
// .add('Large Border Success', () => <Button type="success" large border disabled label="Success" />)

// .add('Small Warning', () => <Button  type="warning" small disabled label="Warning" />)
// .add('Small Hover Warning', () => <Button  type="warning" small hover primaryHover  label="Warning" />)
// .add('Small Opaque Warning', () => <Button  type="warning" small opaque disabled label="Warning" />)
// .add('Small Border Warning', () => <Button  type="warning" small border disabled label="Warning" />)
// .add('Large Border Warning', () => <Button  type="warning" large border disabled label="Warning" />)
// .add('Large Opaque Warning', () => <Button  type="warning" large opaque disabled label="Warning" />)
// .add('Large Warning', () => <Button  type="warning" large disabled label="Warning" />)


// .add('Small Default', () => <Button  type="default" small disabled label="Default" />)
// .add('Small Border Default', () => <Button  type="default" small border disabled label="Default" />)
// .add('Small Opaque Default', () => <Button  type="default" small opaque disabled label="Default" />)
// .add('Small Hover Default', () => <Button  type="default" small hover primaryHover  label="Default" />)
// .add('Larger Opaque Default', () => <Button  type="default" large opaque disabled label="Default" />)
// .add('Large Border Default', () => <Button  type="default" large border disabled label="Default" />)
// .add('Large Default', () => <Button  type="default" large color disabled label="Default" />)

// // .add('AddCart', () => <Button type="primary" small opaque cart label="Add To Cart" />)
// // .add('AddFavorites', () => <Button type="primary" image="var=(--Cart)" label="Add To Cart" small opaque heart/>)
// // .add('Heart', () => <Button type="primary"  heart opaque tiny />)
// // .add('Cart', () => <Button type='primary' cart tiny opaque />)

