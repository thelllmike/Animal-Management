import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';
import heart from "../components/img/heart.png";

import dashboardimg from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";

import animalimage1 from './img/animal-dashboard (1).png'
import animalimage2 from './img/animal-dashboard (2).png'
import animalimage3 from './img/animal-dashboard (3).png'
import animalimage4 from './img/animal-dashboard (4).png'

export default  class financeDashboard extends  Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className='animaldashboard'>
                     <div class="sidebar">
                        <center>
                            <h2>Animal Haven</h2>
                            <h6>Admin Dashboard</h6>
                        </center>
                        <br/>
                        <a href="/"><img src={dashboardimg} alt="" />Dashboard</a>
                        <a href="/"><img src={visior} alt="" /> Visitor Management</a>
                        <a href="/"><img src={project} alt="" />Project Management</a>
                        <a href="/financeDashboard"><img src={finance} alt="" />Finance Management</a>
                        <a href="/"><img src={inventory} alt="" />Inventory Management</a>
                        <a href="/"><img src={handling} alt="" />Handing Medical Records</a>
                        <a href="/AnimalsDashbord"><img src={animal} alt="" />Animal Management</a>
                        <a href=""><img src={volunteer} alt="" />Volunteer Management</a>
                        <a href=""><img src={employee} alt="" />Employee Management</a>
                    </div>

                    <div class="content">

                        <center>

                            <br/>
                            <h1 style={{fontSize:40,color:'white',marginBottom:30}}>ANIMAL DASHBOARD</h1>

                            <div>
                                <img src = "https://www.clubofrome.org/wp-content/uploads/2021/12/COR-Hub-RethinkingFinance_wide-scaled.jpg" width="1100" style={{marginLeft:200}}/>
                            </div>

                            <br/><br/>
                        <div className="row">
                            <div className="animal-image"><img src={animalimage1} alt="" /></div>
                            <div className="animal-image"><img src={animalimage2} alt="" /></div>
                            <div className="animal-image"><img src={animalimage3} alt="" /></div>
                            <div className="animal-image"><img src={animalimage4} alt="" /></div>
                        </div>
                        <br /><br />
                            <div className='row btndashboard'>
                                <div className='col'>
                                    <a href='/addAnimal'>Add Animal</a>
                                </div>
                                <div className='col'>
                                    <a href='/foreignTicket'>Search</a>
                                </div>
                                
                            </div>
                            <br /><br />
                            <div className='row btndashboard' >
                                <div className='col'>
                                    <a href='/animaltableView'>View</a>
                                </div>
                                <div className='col'>
                                    <a href='/reportDashboard'>REPORT</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
        );
    }
}