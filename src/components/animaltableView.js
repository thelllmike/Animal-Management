import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import './css/animaltableview.css';
import TableRow from './animalTableRow';


export default  class animaltable extends  Component{


    constructor(props) {
        super(props);

        this.state = {animal : []};
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/finance/managetickettype/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({animal : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.animal.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }

    render() {
        return(
                <div className='animaltableview'>
                     <div class="sidebar">
                        <center>
                            <h2>Animal Haven</h2>
                            <h6>Admin Dashboard</h6>
                        </center>
                        <br/>
                        <a href="/">Dashboard</a>
                        <a href="/">Visitor Management</a>
                        <a href="/">Project Management</a>
                        <a href="/">Finance Management</a>
                        <a href="/">Inventory Management</a>
                        <a href="/">Handing Medical Records</a>
                        <a href="/">Animal Management</a>
                        <a href="">Volunteer Management</a>
                        <a href="">Employee Management</a>
                    </div>

                    <div class="content">

                        <center>

                            <br/>
                            <h1 style={{fontSize:40,color:'white',marginBottom:30}}>ANIMAL DASHBOARD</h1>

                            <h4 style={{color:'white',marginRight:600}}></h4>
                        </center>

                        <table className="table table-striped" style = {{marginTop :20,marginLeft:270,width:'80%',color:'white'}}>
                            <thead>
                                <tr>
                                   
                                    <th>Animal id</th>
                                    <th>Name</th>
                                    <th>Scpices</th>
                                    <th>DoB</th>
                                    <th>Gender</th>
                                    <th>F Time</th>
                                    <th>Keeper Attend</th>
                                    <th>T Date</th>
                                    <th>T Time</th>
                                    <th>H LEvel</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}