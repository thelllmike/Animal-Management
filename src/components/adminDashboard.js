import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';
import heart from "../components/img/heart.png";


export default  class adminDashboard extends  Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <center>
                            <h2>Animal Haven</h2>
                            <h6>Admin Dashboard</h6>
                        </center>
                        <br/>
                        <a href="/">Dashboard</a>
                        <a href="/">Visitor Management</a>
                        <a href="/">Project Management</a>
                        <a href="/financeDashboard">Finance Management</a>
                        <a href="/">Inventory Management</a>
                        <a href="/">Handing Medical Records</a>
                        <a href="/AnimalsDashbord">Animal Management</a>
                        <a href="">Volunteer Management</a>
                        <a href="">Employee Management</a>
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