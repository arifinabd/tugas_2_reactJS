import React, { Component } from "react";

class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList : this.props.gambarlink
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.dataList} alt="data makanan" width="150"/>
            </div>
        )
    }
}

export default ListMakanan