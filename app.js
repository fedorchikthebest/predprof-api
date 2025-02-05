const express = require("express")

const app = express()
var lights = new Map()
lights[1738702800000] = {
	"message": {
		"date":{
			"data": "хуй",
			"description": "ХУЙ"
		},
		"rooms_count": {
			"data": 3
		},
		"windows_for_room": {
			"data": [
				2, 1, 1
			]
		},
		"windows": {
			"data":{
				"floor_1":[
					true, false, true, false
				],
				"floor_2": [true, true, true, true],
				"floor_3": [false, false, false, false]
			}
		}
	}
}


app.get("/date", function(req, res) {
	let ans = new Map()
	if (req.query.day === undefined){
		let f = {"message": Object.keys(lights)}
		res.send(f)
		return
	}
	res.send(req.query.id)
	console.log(req.query.id)
});


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
