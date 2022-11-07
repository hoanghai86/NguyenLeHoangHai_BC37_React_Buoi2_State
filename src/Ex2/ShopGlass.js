import React, { Component } from "react";
import "./ShopGlass.css";
import model from "../assets/imgEx2/model.jpg";
import v1 from "../assets/imgEx2/v1.png";
import v2 from "../assets/imgEx2/v2.png";
import v3 from "../assets/imgEx2/v3.png";
import v4 from "../assets/imgEx2/v4.png";
import v5 from "../assets/imgEx2/v5.png";
import v6 from "../assets/imgEx2/v6.png";
import v7 from "../assets/imgEx2/v7.png";
import v8 from "../assets/imgEx2/v8.png";
import v9 from "../assets/imgEx2/v9.png";


export default class ShopGlass extends Component {
  state = {
    modelImage: model,
    glass: v1,
    v1: v1,
    v2: v2,
    v3: v3,
    v4: v4,
    v5: v5,
    v6: v6,
    v7: v7,
    v8: v8,
    v9: v9,
  };

  handleChangeGlass = (img) => {
    this.setState({
      glass: img,
    });
  };

  render() {
    return (
      <div>
        <div className="container model text-center my-5">
          <div className="row">
            <div className="col-6">
              <img className="left-model shadow p-3 mb-5 bg-body rounded" src={this.state.modelImage}/>
            </div>
            <div className="col-6" style={{ position: "relative" }}>
              <img className="right-model shadow p-3 mb-5 bg-body rounded" src={this.state.modelImage} />
              <img className="test-glass" src={this.state.glass} />
            </div>
          </div>
        </div>

        <div className="container text-center shadow p-3 mb-5 bg-body rounded">
          <div className="row">
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v1);}}><img src={this.state.v1} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v2);}}><img src={this.state.v2} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v3);}}><img src={this.state.v3} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v4);}}><img src={this.state.v4} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v5);}}><img src={this.state.v5} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v6);}}><img src={this.state.v6} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v7);}}><img src={this.state.v7} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v8);}}><img src={this.state.v8} style={{ width: "100%" }} /></button>  
            </div>
            <div className="col-2 my-2">
              <button className="btn btn-link" onClick={() => {this.handleChangeGlass(v9);}}><img src={this.state.v9} style={{ width: "100%" }} /></button>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
