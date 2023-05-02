const express = require('express');
const animalRoutes = express.Router();


let Animal = require('./animal.model');

animalRoutes.route('/add').post(function (req,res){
    let animal = new Animal(req.body);
    animal.save()
        .then(animal => {
            res.status(200).json({'animal' : 'new animal is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});


animalRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Animal.findById(id, function (err,animal){
        res.json(animal);
    });
});

animalRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Animal.findById(id, function (err, animal){
        if(!animal)
            res.status(404).send("Data is not found??");
        else{
            animal.aId = req.body.aId;
            animal.aName = req.body.aName;
            animal.aSpecies = req.body.aSpecies;
            animal.dob = req.body.dob;
            animal.gender = req.body.gender;
            animal.fTime = req.body.fTime;
            animal.zkeeper = req.body.zkeeper;
            animal.dateMedical = req.body.dateMedical;
            animal.timeTretement = req.body.timeTretement;
            animal.health = req.body.health;
           
           
            animal.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


animalRoutes.route('/delete/:id').get(function(req,res){
    Animal.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
animalRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Animal.find(function(err, animal) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(animal);
        }
    });
});





animalRoutes.route('/search/:pathParam1?').get(function (req, res){
    let search = req.params.pathParam1;
    // let email = req.params.pathParam2;
    console.log("your search is "+search);

    // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
        Animal.find({$and:[{$or: [{name: search}, {empId: search},{posision: search}]}]},function (err,srch){ 
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });

});



module.exports = animalRoutes;