db.createCollection("posts")
db.createCollection("comments")


db.posts.insertMany([
    {_id:"p1",post:"Post1"},
   { _id:"p2",post:"Post2"},
   {$unwind:"$posts"}
])


db.comments.insertMany([
    {_id:"c1",pid:"p1",comment:"Comment1"},
    {_id:"c2",pid:"p1",comment:"Comment2"},
    {_id:"c3",pid:"p2",comment:"Comment1"},
    {_id:"c4",pid:"p2",comment:"Comment2"},
    {_id:"c5",pid:"p2",comment:"Comment3"},
])


db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments"
    }
  },
  {$unwind:"$comments"},
  {
    $project: {
      _id: 0,
      post: 1,
      "comments.comment":1
      
    },
    
  }
])

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)




db.comments.insertOne(
    {id:"c6",pid:"p1"},
    {$inc:{comment:1}}

)

db.comments.deleteOne(
    {id:"c6"}
    

)


db.marks.insertMany([
    {name:"john",term:"t1",subject:"maths",score:98},
    {name:"john",term:"t2",subject:"maths",score:90},
    {name:"john",term:"t3",subject:"maths",score:88},
    {name:"john",term:"t1",subject:"science",score:92},
    {name:"john",term:"t2",subject:"science",score:82},
    {name:"john",term:"t3",subject:"science",score:82},
      {name:"cathy",term:"t1",subject:"maths",score:98},
    {name:"cathy",term:"t2",subject:"maths",score:92},
    {name:"cathy",term:"t3",subject:"maths",score:92},
    {name:"cathy",term:"t1",subject:"science",score:82},
    {name:"cathy",term:"t2",subject:"science",score:92},
    {name:"cathy",term:"t3",subject:"science",score:80},

])