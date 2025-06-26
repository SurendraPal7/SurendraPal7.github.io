db.employees.find(
    {salary:{$gt:3000}}
    ,{name:1}
)
db.employees.find({salary:{$gt:3000}},{name:1}).skip(1).limit(2)

db.employees.find({salary:{$gt:3000},department:"IT"},
    {name:1}
)


db.employees.countDocuments()

db.employees.aggregate([
    {$match:{salary:{$gt:3000}}},
    {$project:{name:1,salary:1}}                        
])


db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:-1}},
    {$limit:1},                  
])


db.employees.aggregate([
    {$match:{salary:{$gt:1000}}},
    {$project:{name:1,salary:1,location:1}},   //these{} are pipelines
                   
])



db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}
)

db.employees.aggregate([
    {$project:{name:1,location:1}},
    {$unwind:"$location"}, 
])


db.employees.aggregate([
    {$project:{_id:0,"EmpName":"$name"}}
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}
    }},
   
])



db.employees.aggregate([
    {$project:{name:0}}
])

db.employees.aggregate([
    {$group:{_id:"$department",total:{$sum: "$salay"}}}
])

db.employees.aggregate([
    {$group:{_id:null,total:{$sum: "$salary"}}}
])

db.orders.insertOne({
    empID:  ObjectId('685bc9f3369ca162d59f9910'),  //amy id
    orderValue:2500,
})

db.orders.insertOne({
    empID:  ObjectId('685bc9f3369ca162d59f9911'),  //amy id
    orderValue:2600,
})
db.orders.insertOne({
    empID:  ObjectId('685bca81369ca162d59f9912'),  //amy id
    orderValue:2700,
})
db.orders.insertOne({
    empID:  ObjectId('685bb902369ca162d59f990b'),  //amy id
    orderValue:2800,
})

db.employees.aggregate([
    // {$match:{salary:{$gt:2000}}},

  {
    $lookup: {
      from: "orders",          // The collection to join with
      localField: "_id",     // Field in 'employees' collection
      foreignField: "empID",   // Matching field in 'orders' collection
      as: "orders"             // Name of the array field to store the joined documents
    },
  },
  {$unwind:"$orders"},
  {$match:{"orders.orderValue":{$gt:2500}}},
  {$project:{name:1,"orders.orderValue":1,salary:1}}
])


// create a new collection empCoutnry
db.createCollection("empCountry")

db.empCountry.insertOne({
    empID:  ObjectId('685bc9f3369ca162d59f9910'),  //amy id
    country:"USA",
})

db.empCountry.insertOne({
    empID:  ObjectId('685bc9f3369ca162d59f9911'),  //amy id
    country:"INDIA",
})
db.empCountry.insertOne({
    empID:  ObjectId('685bca81369ca162d59f9912'),  //amy id
    country:"AUS",
})
db.empCountry.insertOne({
    empID:  ObjectId('685bb902369ca162d59f990b'),  //amy id
    country:"Uk",
})

db.employees.aggregate([
    {
        $lookup:{
            from:"empCountry",
            localField:"_id",
            foreignField:"empID",
            as:"EmpCountry"
        },
    },
    {$unwind:"$EmpCountry"},
    {$project:{_id:0,name:1,"EmpCountry.country":1,"orders.orderValue":1}}
])




db.employees.getIndexes()

// to create index
db.employees.createIndex({"email":1})
 db.employees.dropIndex("email_1")
db.employees.find({email:"aman@gmail.com"}).explain("executionStats")




Country, name,Score
India, Rohan, 20
India, Rohan, 22

India, Rohan, 29
UK, John , 21
UK, John , 26
UK, John , 28
db.student.insertMany([
    {country:"India",name:"Rohan",score:20},
        {country:"India",name:"Rohan",score:21},

    {country:"India",name:"Rohan",score:22},
    {country:"UK",name:"John",score:21},
        {country:"UK",name:"John",score:25},
    {country:"UK",name:"John",score:22}



])


db.student.aggregate([
    {$group:{
        _id:{country:"$country",name:"$name"},
        total:{$sum:"$score"}
    }}
])