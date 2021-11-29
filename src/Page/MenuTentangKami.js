import React, { Component } from "react";

class MenuTentangKami extends Component{
    constructor(props){
        super(props);
        this.state = {
            caption : "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas dari Nuasantara"
        }
    }

    render(){
        return(
            <div>
                <center>
                    <p>Tentang Kami</p> {this.state.caption}
                </center>
            </div>
        )
    }
}

export default MenuTentangKami