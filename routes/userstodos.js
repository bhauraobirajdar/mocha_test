	var express = require('express');
	var router = express.Router();
	var moment = require('moment');
	var user= require('../data/user.json');
	var todos = require('../data/todos.json');

	/* GET users listing. */



	router.get('/', function(req, res, next) {

		var user_array=user.user;
		var todos_array = todos.todos;
		var response={};
		var active_users=[];
		
		console.log(user_array); 
		
		
		for(var i=0; i<user_array.length ; i++){
			if(user_array[i].is_active){
				active_users.push(user_array[i]);
			}
		}
		response.active_users=active_users;
		
		console.log(response); 
		for(var i=0;i < active_users.length; i++){
			var user_todos=[];
			for(var j=0; j < todos_array.length ; j++){
				if(active_users[i].id == todos_array[j].user_id){
					user_todos.push(todos_array[j]);
				}
			}
			response.active_users[i].user_todos = user_todos;
		}
		res.send(JSON.stringify(response));
	});
	
module.exports = router;
