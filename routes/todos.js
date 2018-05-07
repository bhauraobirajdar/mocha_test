var express = require('express');
var router = express.Router();
var moment = require('moment');
var user= require('../data/user.json');
var todos = require('../data/todos.json');

/* GET users listing. */
router.get('/all_to_dos', function(req, res, next) {
   // console.log(todos.todos);
    res.send({data : todos.todos});
    //res.send('should return all todos but not now.');
});

router.get('/:id',function(req,res){
    var todos_array = todos.todos;
    for(var i=0; i < todos_array.length ; i++){
        if(todos_array[i].id === req.params.id){

            res.send(JSON.stringify(todos_array[i]));

        }

    }

});


router.get('/delete/:id',function(req,res){

    var todos_array = todos.todos;

    for(var i=0; i < todos.todos.length ; i++){

        if(todos.todos[i].id === req.params.id){

            todos.todos.splice(i,1);

            //delete todos.todos[todos.todos];
            var fs = require('fs');
            fs.writeFile('./data/todos.json',JSON.stringify(todos),(err,data) =>{
                if(err){
                    console.error(err);
                }
                fs.readFile('./data/todos.json','utf8',function(err,data){
                    if(err){
                        console.error(err);
                    }

                    res.send(JSON.stringify(JSON.parse(data)));

                })
            })

        }


    }

});

router.post('/savepost',function(req,res){
    console.log("issssssssssssssssssssssssssssssssss");
    console.log(req.body);
    res.send({'result' : "sucess"});
})
router.get('/hot/:user_id',function(req,res){

    var user_array=user.user;
    var todos_array = todos.todos;
    var selected_user;
    var response={};
    for(var i=0; i < user_array.length; i++){
        if(user_array[i].id === req.params.user_id){
            selected_user = user_array[i];
            break;
        }
    }
    var hot_items = [];
    if(typeof selected_user !== 'undefined'){
        for(var i=0; i < todos_array.length ; i++){
            if(todos_array[i].user_id === selected_user.id && todos_array[i].done === false){
                var target_date = moment(new Date(todos_array[i].target_date));
                var current_date = moment(new Date());
                if(target_date.diff(current_date) > 0 && target_date.diff(current_date) < 172800000){
                    hot_items.push(todos_array[i]);
                }
            }
        }
    }
    response.user_id = selected_user.id;
    response.hot_items = hot_items;
    res.send(response);
});


module.exports = router;
