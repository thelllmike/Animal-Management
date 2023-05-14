import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./css/animaltableview.css";
import TableRow from "./animalTableRow";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import dashboardimg from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";

export default class animaltable extends Component {
	constructor(props) {
		super(props);

		this.state = { animal: [], search: "" };
		this.onChangeSearch = this.onChangeSearch.bind(this);
	}
	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/animal/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ animal: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.animal.map(function (object, i) {
			return <TableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}
	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Animal Report";
        const headers = [["aId", "aName","aSpecies", "dob","gender", "fTime", "zkeeper", "dateMedical", "timeTretement", "health"]];
    
        const data = this.state.animal.map(elt=> [elt.aId, elt.aName,  elt.aSpecies,elt.dob, elt.gender, elt.fTime, elt.zkeeper, elt.dateMedical, elt.timeTretement, elt.health]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }

	render() {
		return (
			<div className='animaltableview'>
				<div class='sidebar'>
					<center>
						<h2>Animal Haven</h2>
						<h6>Admin Dashboard</h6>
					</center>
					<br />
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

				<div class='content'>
					<center>
						<br />
						<h1 style={{ fontSize: 40, marginBottom: 30 }}>ANIMAL DASHBOARD</h1>

						<h4 style={{ color: "white", marginRight: 600 }}></h4>
					</center>
					<form  onSubmit={this.onSubmit}>
						<div className='search'>
							<input type='text' required value={this.state.search} onChange = {this.onChangeSearch}/>
							<button type='submit'>  <a href ={"/seaechAnimal/"+this.state.search} >Search</a></button>
						</div>
					</form>
					<table
						className='table table-striped'
						style={{ marginTop: 20, width: "70%" }}>
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
								<th>H LEvel</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</div>
			</div>
		);
	}
}
