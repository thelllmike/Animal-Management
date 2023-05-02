import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import adminDashboard from './components/adminDashboard';
import addAnimal from './components/addAnimal';

import animaltableView from './components/animaltableView';

 import editAnimal from './components/editAnimal';

 
 import seaechAnimal from './components/seaechAnimal';


import financeDashboard from './components/financeDashboard';








import AnimalDashbord from './components/AnimalDashbord';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/' component={adminDashboard}/>
                      <Route path='/financeDashboard' component={financeDashboard}/>
                   

                      <Route path='/seaechAnimal/:pathParam1?' component={editAnimal}/>

                      <Route path='/AnimalsDashbord' component={AnimalDashbord}/>
                      <Route path='/addAnimal' component={addAnimal}/>
                      <Route path='/editAnimal/:id' component={editAnimal}/>
                      <Route path='/animaltableView' component={animaltableView}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;