import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/animal/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert(" Successfully Deleted....")
        window.location.replace('/');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj.tno}
               </td>
               <td>
                   {this.props.obj.type}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {/* <Link to={"/viewOneNativeTicket/"+this.props.obj._id} className="btn btn-info">View</Link> */}
                    {/* &nbsp; */}
                   <Link to={"/editNativeTicket/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;