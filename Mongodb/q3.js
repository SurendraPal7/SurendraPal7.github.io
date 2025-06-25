 db.employees.find()
  db.employees.find().skip(1)  //it will skip the first object
  db.employees.find().limit(1)  //it will return only first object
  db.employees.find().skip(1).limit(1)   // it will print second onject only
  db.employees.find({department:"IT"})
    db.employees.find({department:"IT"},{_id:0,name:1})
    db.employees.find({department:"IT"},{_id:0,name:1,salary:1})

        db.employees.find({department:{$eq:"IT"}},{_id:0,name:1,salary:1})
         db.employees.find({salary:{$gt:30000}},{_id:0,name:1,salary:1})
                  db.employees.find(
                    {salary:{$gte:30000}}
                    ,{_id:0,name:1,salary:1})
  db.employees.find({salary:{$lt:30000}},{_id:0,name:1,salary:1})
    db.employees.find({salary:{$lte:30000}},{_id:0,name:1,salary:1})