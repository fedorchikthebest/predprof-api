const express = require("express")

const app = express()
var lights = new Map()
lights["5-2-2025"] = {
	"message": {
		"date":{
			"data": "хуй",
			"description": "максим лох"
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

lights["2-2-2025"] = {
	"message": {
  "date":{
   "data": "хуй",
   "description": "максим лох"
  },
  "rooms_count": {
   "data": 4
  },
  "windows_for_room": {
   "data": [
    2, 2, 1
   ]
  },
  "windows": {
   "data":{
    "floor_1":[
     false, false, false, false
    ],
    "floor_2": [false, false, false, true],
    "floor_3": [true, true, true, true]
   }
  }
 }
}


lights["4-3-2025"] = {
	"message": {
  "date":{
   "data": "хуй",
   "description": "максим лох"
  },
  "rooms_count": {
   "data": 4
  },
  "windows_for_room": {
   "data": [
    2, 2, 1
   ]
  },
  "windows": {
   "data":{
    "floor_1":[
     false, false, false, false
    ],
    "floor_2": [false, false, false, true],
    "floor_3": [true, true, true, true]
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
	let z = new Date(req.query.year, req.query.month - 1, req.query.day)
	res.send(lights[req.query.day + '-' + req.query.month + '-' + req.query.year])
	console.log(req.query.id)
});


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
