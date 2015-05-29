

console.log('scriptttttttttt');


io.socket.get('/subscribeNotif',function (data, jwres){
	console.log('subscribed');
	console.log(data);
});








io.socket.on('notification2', function (msg) {
  console.log('NOTIFICATION RECIEVE');
  console.log(msg);
});
