db.employees.insertOne({
    name:"John Smith",
    email:"abc@gmai.com",
    department:"IT",
    salary:50000,
    location:["FL","OH"],
    date:Date()
})

db.employees.find()
db.employees.insertMany([
    {name:"Surendra", age:21, email:"abc@gmai.com",
    department:"IT",
    salary:50000,
    location:["FL","OH"],
    date:Date()
},
    {name:"Rahul", age:22,email:"rahul@gmail.com",
        department:"IT",
        salary:500000,
        location:["IN","AUS"], 
        date:Date()},
   


])


db.users.find({},{name:1})   // {}->filter {}-> for projection  1-> for true
db.users.find({},{_id:0,name:1})

db.users.find({},{_id:false,age:true,name:true})   //we can write true and false instead of 0 and 1
db.users.drop()  // to delete the collection


// show collections

db.createCollection("orders")
