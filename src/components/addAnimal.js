import  React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';


export default  class addAnimal extends  Component{


    constructor(props) {
        super(props);

        

        this.onChangeaId = this.onChangeaId.bind(this);
        this.onChangeaName = this.onChangeaName.bind(this);
        this.onChangeaSpecies = this.onChangeaSpecies.bind(this);
        this.onChangedob = this.onChangedob.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangefTime = this.onChangefTime.bind(this);
        this.onChangezkeeper = this.onChangezkeeper.bind(this);
        this.onChangedateMedical = this.onChangedateMedical.bind(this);
        this.onChangetimeTretement = this.onChangetimeTretement.bind(this);
        this.onChangehealth = this.onChangehealth.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            aId: '',
            aName:'',
            aSpecies: '',
            dob:'',
            gender:'',
            fTime:'',
            zkeeper:'',
            dateMedical:'',
            timeTretement:'',
            health:'',

        }
    }
    onChangeaId(e){
        this.setState( {
            aId: e.target.value
        });
    }
    onChangeaName(e){
        this.setState( {
            aName: e.target.value
        });
    }
    onChangeaSpecies(e){
        this.setState( {
            aSpecies: e.target.value
        });
    }
    onChangedob(e){
        this.setState( {
            gender: e.target.value
        });
    }

    onChangegender(e){
        this.setState( {
            fTime: e.target.value
        });
    }
    onChangefTime(e){
        this.setState( {
            zkeeper: e.target.value
        });
    }
    onChangezkeeper(e){
        this.setState( {
           amount: e.target.value
        });
    }
    onChangedateMedical(e){
        this.setState( {
            dateMedical: e.target.value
        });
    }
    onChangetimeTretement(e){
        this.setState( {
            timeTretement: e.target.value
        });
    }
    onChangehealth(e){
        this.setState( {
            health: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            aId : this.state.aId,
            aName : this.state.aName,
            aSpecies : this.state.aSpecies,
            dob : this.state.dob,
            gender : this.state.gender,
            fTime : this.state.fTime,
            zkeeper : this.state.zkeeper,
            dateMedical : this.state.dateMedical,
            timeTretement : this.state.timeTretement,
            health : this.state.health,
        };
       
      
                            axios.post('http://localhost:4000/animal/addexpenses',obj)
                                .then(res => {
                                    alert(" Successfully added");
                                    this.setState({
                                        aId: '',
                                        aName:'',
                                        aSpecies: '',
                                        dob:'',
                                        gender:'',
                                        fTime:'',
                                        zkeeper:'',
                                        dateMedical:'',
                                        timeTretement:'',
                                        health:'',
                                    })
                                    console.log(res.data)});
                            //this.props.history.push('/viewpayment/'+this.props.match.params.id);
                            //window.location.replace('/viewForeignTicket');

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
                                <h1 style={{fontSize:70,color:'white',marginBottom:30}}>Animal Portfolio</h1>
                        </center>

                        <br/>
                        <div className="container" style={{marginLeft:300}}>
                        <form onSubmit={this.onSubmit} style={{color:'white',width:'60%'}}>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Animal Number :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" on class="form-control"  value={this.state.aId} onChange = {this.onChangeaId} required/>
                                </div>
                            </div>
                            <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Animal Name :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.aName} onChange = {this.onChangeaName} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Animal Species :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.aSpecies} onChange = {this.onChangeaSpecies} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Date of Birth :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.dob} onChange = {this.onChangedob} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Animal Gender :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.gender} onChange = {this.onChangegender} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Feeding Time :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="time"  class="form-control" min = "1" value={this.state.fTime} onChange = {this.onChangefTime} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Atended Zoo keeper  :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.zkeeper} onChange = {this.onChangezkeeper} required/>
                                </div>
                            </div> <br/>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Date of tretement & medical care :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="date"  class="form-control" min = "1" value={this.state.dateMedical} onChange = {this.onChangedateMedical} required/>
                                </div>
                            </div>

                         
                            <br/>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto" >
                                    <label class="col-form-label">Time of treatement & medical care :</label>
                                </div>
                                <div class="col-auto" style={{width:'51%'}}>
                                    <input type="date"  class="form-control"  value={this.state.timeTretement} onChange = {this.onChangetimeTretement} required/>
                                </div>
                            </div>
                            <br/>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label class="col-form-label">Health Level :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text"  class="form-control" min = "1" value={this.state.health} onChange = {this.onChangehealth} required/>
                                </div>
                            </div>
                            <br/><br/>
                            <button type="submit" class="btn btn-info" style={{marginLeft:210}}>Add</button>
                        </form>
                        </div>
                        
                    </div>
                </div>
        );
    }
}