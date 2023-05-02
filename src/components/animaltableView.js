import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


import './css/animaltableview.css';
import TableRow from './animalTableRow';

import dashboardimg from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";


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
                        <a href='/'>
						<img src={dashboardimg} alt='' />
						Dashboard
					</a>
					<a href='/'>
						<img src={visior} alt='' /> Visitor Management
					</a>
					<a href='/'>
						<img src={project} alt='' />
						Project Management
					</a>
					<a href='/financeDashboard'>
						<img src={finance} alt='' />
						Finance Management
					</a>
					<a href='/'>
						<img src={inventory} alt='' />
						Inventory Management
					</a>
					<a href='/'>
						<img src={handling} alt='' />
						Handing Medical Records
					</a>
					<a href='/AnimalsDashbord'>
						<img src={animal} alt='' />
						Animal Management
					</a>
					<a href=''>
						<img src={volunteer} alt='' />
						Volunteer Management
					</a>
					<a href=''>
						<img src={employee} alt='' />
						Employee Management
					</a>
                    </div>

                    <div class="content">

                        <center>

                            <br/>
                            <h1 style={{fontSize:40,marginBottom:30}}>ANIMAL DASHBOARD</h1>

                            <h4 style={{color:'white',marginRight:600}}></h4>
                        </center>

                        <table className="table table-striped" style = {{marginTop :20,width:'70%'}}>
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