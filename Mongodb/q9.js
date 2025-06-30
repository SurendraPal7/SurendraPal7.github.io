db.employees.find({name:{$regex:"a"}})

db.employees.find({name:{$regex:"Aman"}})
db.employees.find({name:{$regex:"aman", $options:"i"}})

db.employees.find({name:{$regex:"^a", $options:"i"}})  //starts with a 

db.employees.find({name:{$regex:"y$", $options:"i"}})   //end with y
