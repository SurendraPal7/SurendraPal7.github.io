use admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [ { role: "root", db: "admin" } ] 
})
add following settings in mongod.conf available in program files / mongodb
security:
  authorization: enabled
go to services and restart mongodb server



db.createUser({
  user: "user2",
  pwd: "1234",
  roles: [ { role: "read", db: "lpu" } ] 
})


// C:\Users\Surendra pal>mongosh --username admin --authenticationDatabase admin  coommand to login
