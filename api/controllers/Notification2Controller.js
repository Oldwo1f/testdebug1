/**
 * Notification2Controller
 * 
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	homepage: function(req,res) {
		console.log('HOME PAGE');
		

		// Notification2.watch(req);


		res.view('homepage')

	},
	createNotif: function(req,res) {
		console.log('Create Notif');
		

		Notification2.create({name:"my notif",color:'red'}).exec(function (err,notif){
				console.log(err)
				console.log(notif)
				Notification2.publishCreate(notif);
		    	res.status(200).send(notif)
		});
	},
	editNotif: function(req,res) {
		console.log('Create Notif');
		

		Notification2.update(req.params.id,{name:"my notif update",color:'green'}).exec(function (err,notif){
				console.log(err)
				console.log(notif)

				Notification2.publishUpdate(notif[0].id,notif[0]);
		    	res.status(200).send(notif[0])
		});
	},
	subscribeNotif:function(req,res,next) {
		console.log('Subscribe NOTIF');
		Notification2.watch(req);
		Notification2.find().exec(function (err,notifications) {
			
			Notification2.subscribe(req.socket,notifications);
			res.status(200).send(notifications);
		})


	},

};

