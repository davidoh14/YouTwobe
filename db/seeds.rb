# This file should contain all the record creation needed to seeds the database with its default values.
# The data can then be loaded with the rails db:seeds command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Comment.destroy_all
Video.destroy_all
User.destroy_all

user1 = User.create({username:"Ian",password:"test",email:"ian@email.com",first_name:"Ian", last_name:"McGrath"})
user2 = User.create({username:"Vincent",password:"test",email:"vincent@email.com",first_name:"Vincent", last_name:"Hsu"})
user3 = User.create({username:"Jimmy",password:"test",email:"jimmy@email.com",first_name:"Jimmy", last_name:"Kuang"})
user4 = User.create({username:"Darrick",password:"test",email:"darrick@email.com",first_name:"Darrick", last_name:"Shin"})
user5 = User.create({username:"Jon",password:"test",email:"jon@email.com",first_name:"Jon", last_name:"Zamora"})
user6 = User.create({username:"Vern",password:"test",email:"vern@email.com",first_name:"Vern", last_name:"Chao"})
user7 = User.create({username:"Yuhuan",password:"test",email:"Yuhuan@email.com",first_name:"Yuhuan", last_name:"Kim"})
user8 = User.create({username:"ProZD", password:"test",email:"ProZD@email.com", first_name: "Pro", last_name: "ZD"})
user9 = User.create({username:"Justin Kuritzkes", password: "test", email:"justin@email.com", first_name:"justin", last_name:"Kuritzkes"})

vid1 = Video.new({
    title: "Squirrel jumps on UPS delivery man", 
    description: "Ring.com shared an unexpected cute moment when a squirrel jumped onto the back of a UPS driver as he made a delivery.",
    uploader_id: user2.id,
    view_count: 0})

squirrelP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/squirrel_thumbnail.png')
vid1.thumbnail.attach(io: squirrelP, filename: 'squirrel_thumbnail.png')

squirrel = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/squirrel240.mp4')
vid1.video.attach(io: squirrel, filename: 'squirrel240.mp4')

vid1.save

vid2 = Video.new({
    title: "people in LA every time it rains", 
    description: "My Twitter: https://twitter.com/prozdkp",
    uploader_id: user8.id,
    view_count: 0})
    
rainP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/rainPic.png')
vid2.thumbnail.attach(io: rainP, filename: 'rainPic.png')

rain = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/rain.mp4')
vid2.video.attach(io: rain, filename: 'rain.mp4')

vid2.save

vid3 = Video.new({
    title: "Potion Seller", 
    description: "A knight and a man who sells potions.",
    uploader_id: user9.id,
    view_count: 0})
    
potionP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/potionsellerP.png')
vid3.thumbnail.attach(io: potionP, filename: 'potionP.png')

potion = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/potionseller.mp4')
vid3.video.attach(io: potion, filename: 'potionseller.mp4')

vid3.save

vid4 = Video.new({
    title: "Lemongrab - Unacceptable!", 
    description: "This...castle...",
    uploader_id: user5.id,
    view_count: 0})
    
unnacceptableP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/unacceptableP.png')
vid4.thumbnail.attach(io: unnacceptableP, filename: 'unacceptableP.png')

unacceptable = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/unacceptable.mp4')
vid4.video.attach(io: unacceptable, filename: 'unacceptable.mp4')

vid4.save

vid5 = Video.new({
    title: "Deadliest Self-defense move", 
    description: "What move has been banned in all MMA tournaments?",
    uploader_id: user6.id,
    view_count: 0})
    
selfdefenseP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/selfdefenseP.png')
vid5.thumbnail.attach(io: selfdefenseP, filename: 'selfdefenseP.png')

selfdefense = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/selfdefense.mp4')
vid5.video.attach(io: selfdefense, filename: 'selfdefense.mp4')

vid5.save

vid6 = Video.new({
    title: "Spidey-suit", 
    description: "Uncle Ben?",
    uploader_id: user3.id,
    view_count: 0})
    
spidermanP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/spidermanP.png')
vid6.thumbnail.attach(io: spidermanP, filename: 'spidermanP.png')

spiderman = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/spiderman.mp4')
vid6.video.attach(io: spiderman, filename: 'spiderman.mp4')

vid6.save


com1 = Comment.create!({body: "much wao", commenter_id: user1.id, video_id: vid5.id})
com2 = Comment.create!({body: "the mitochondria is the powerhouse of the cell", commenter_id: user2.id, video_id: vid5.id})
com3 = Comment.create!({body: "lulz", commenter_id: user3.id, video_id: vid5.id})
com4 = Comment.create!({body: "hahahahaha", commenter_id: user4.id, video_id: vid5.id})
com5 = Comment.create!({body: "poggies", commenter_id: user5.id, video_id: vid6.id})
com6 = Comment.create!({body: "ffffffffffffff", commenter_id: user6.id, video_id: vid6.id})
com7 = Comment.create!({body: "this house is in UNACCEPTABLE CONDITION", commenter_id: user7.id, video_id: vid6.id})
com8 = Comment.create!({body: "yeet", commenter_id: user8.id, video_id: vid5.id})
