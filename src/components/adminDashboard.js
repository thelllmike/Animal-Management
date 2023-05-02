import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';
import heart from "../components/img/heart.png";
import dashboardimg from './img/dashboard.png'
import visior from './img/visitor.png'
import project from './img/project.png'
import finance from './img/finance.png'
import inventory from './img/inventory.png'
import handling from './img/handling.png'
import animal from './img/animal.png'
import volunteer from './img/volunteer.png'
import employee from './img/employee.png'

export default  class adminDashboard extends  Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className='admindashboard'>
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
                            <h1 style={{fontSize:70,color:'white',marginBottom:30}}>Dashboard</h1>

                            <div className='row'>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Visitor Management</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Project Management</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/financeDashboard'>Finance Management</a>
                                </div>
                            </div>
                            <br/><br/>
                            <div className='row'>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Inventory Management</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Handing Medical Records</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Animal Management</a>
                                </div>
                            </div>
                            <br/><br/>
                            <div className='row'>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Volunteer Management</a>
                                </div>
                                <div className='cl'>
                                    <img src = {heart} width="40"/>
                                    <a href='/'>Employee Management</a>
                                </div>
                            </div>
                           
                        </center>
                    </div>
                </div>
        );
    }
}