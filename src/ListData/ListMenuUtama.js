import React, { Component } from "react";

class ListMenuUtama extends Component{
    render(){
        return(
            <div>
                <h1>
                    <center> Selamat Datang Diwarung Nusantara</center>
                </h1>
                <center>
                    <img src={this.props.linkgambar} 
                    alt="makanan nusantara" 
                    width="600"/>
                </center>
            </div>
        )
    }
}

export default ListMenuUtama