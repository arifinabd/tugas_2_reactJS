import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan yang Kami Sediakan :</h3>
                <td>
                    <ListMakanan gambarlink="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                </td>
                <td>
                    <ListMakanan gambarlink="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                </td>
                <td>
                    <ListMakanan gambarlink="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </td>
                <td>
                    <ListMakanan gambarlink="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </td>
                <td>
                    <ListMakanan gambarlink="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </td>
            </div>
        )
    }
}

export default MenuMakanan