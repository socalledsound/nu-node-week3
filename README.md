# a few things to remember

1. make sure your database is running!
   follow instructions for your os:
   https://learn.nucamp.co/mod/book/view.php?id=3578&chapterid=4053

on mac that's
mongod --dbpath=data

from inside your mongodb folder

2. to set up an admin account:

make sure you send a post request to the signup path with the username "admin"
then
db.users.update({"username":"admin"}, {$set:{"admin":true}})

3. some mongo operations that you may need:

to see what's there:
db.{a schema}.find().pretty()

to get rid of what's there and start over:
db.{ a schema }.drop()

to make a whole new db:
use {new database name}

4. a few json objects in case you need them:
   campsite without comments:
   {
   "name": "Redux Woods Campground",
   "image": "images/redux-woods.jpg",
   "elevation": 42,
   "featured": true,
   "cost": 55,
   "description": "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
   }
