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
Like.destroy_all

user1 = User.create({username:"Ian",password:"password",email:"ian@email.com",first_name:"Ian", last_name:"McGrath"})
user2 = User.create({username:"Vincent",password:"password",email:"vincent@email.com",first_name:"Vincent", last_name:"Hsu"})
user3 = User.create({username:"Jimmy",password:"password",email:"jimmy@email.com",first_name:"Jimmy", last_name:"Kuang"})
user4 = User.create({username:"Darrick",password:"password",email:"darrick@email.com",first_name:"Darrick", last_name:"Shin"})
user5 = User.create({username:"Jon",password:"password",email:"jon@email.com",first_name:"Jon", last_name:"Zamora"})
user6 = User.create({username:"Vern",password:"password",email:"vern@email.com",first_name:"Vern", last_name:"Chao"})
user7 = User.create({username:"Yuhuan",password:"password",email:"Yuhuan@email.com",first_name:"Yuhuan", last_name:"Kim"})
user8 = User.create({username:"ProZD", password:"password",email:"ProZD@email.com", first_name: "Pro", last_name: "ZD"})
user9 = User.create({username:"Justin Kuritzkes", password: "password", email:"justin@email.com", first_name:"Justin", last_name:"Kuritzkes"})
user10 = User.create({username:"Fearless Records", password: "password", email:"fearless@email.com", first_name:"Fearless", last_name:"Records"})
user11 = User.create({username:"COLORS", password: "password", email:"colors@email.com"})
user12 = User.create({username:"Clairo", password: "password", email:"clairo@email.com"})

vid1 = Video.new({
    title: "Pierce The Veil - Dive In", 
    description: "New album 'Misadventures' available now.

    FOLLOW PIERCE THE VEIL:
    http://facebook.com/piercetheveil
    http://twitter.com/piercetheveil
    http://instagram.com/piercetheveil

    Head here for tour dates, tickets, and VIP upgrades: http://piercetheveil.net

    Video by: Dan Fusselman",
    uploader_id: user10.id,
    view_count: 6059727})

diveP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/diveP.png')
vid1.thumbnail.attach(io: diveP, filename: 'diveP.png')

dive = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/dive.mp4')
vid1.video.attach(io: dive, filename: 'dive.mp4')

vid1.save

vid2 = Video.new({
    title: "Oklou - Fall | A COLORS SHOW", 
    description: "French-born, London-based artist Oklou graces the COLORS stage for an ethereal performance of previously unreleased single ‘Fall’, taken from her forthcoming full-length record.",
    uploader_id: user11.id,
    view_count: 809893})
    
oklouP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/oklouP.png')
vid2.thumbnail.attach(io: oklouP, filename: 'oklouP.png')

oklou = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/oklou.mp4')
vid2.video.attach(io: oklou, filename: 'oklou.mp4')

vid2.save

vid3 = Video.new({
    title: "WATEVA - Ping Pong Party [NCS Release]", 
    description: "Track: WATEVA - Ping Pong Party [NCS Release]
                Music provided by NoCopyrightSounds.
                Watch: https://youtu.be/qrwwCrJa_0M
                Free Download / Stream: http://ncs.io/PingPongPartyYO",
    uploader_id: user1.id,
    view_count: 809893})
    
watevaP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/watevaP.png')
vid3.thumbnail.attach(io: watevaP, filename: 'watevaP.png')

wateva = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/wateva.mp4')
vid3.video.attach(io: wateva, filename: 'wateva.mp4')

vid3.save

# vid4 = Video.new({
#     title: "OCEAN - John Butler - 2012 Studio Version", 
#     description: "This special re-recording was captured in 'The Compound', John Butler's studio in his hometown of Fremantle Western Australia in February 2012.",
#     uploader_id: user2.id,
#     view_count: 56842232})
    
# oceanP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/oceanP.png')
# vid4.thumbnail.attach(io: oceanP, filename: 'oceanP.png')

# ocean = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/ocean.mp4')
# vid4.video.attach(io: ocean, filename: 'ocean.mp4')

# vid4.save

vid5 = Video.new({
    title: "Coast Clear - Beast Coast", 
    description: "Escape From New York Flatbush Zombies The Underachievers Pro Era Records Joey Badass Meechy Darko Zombie Juice Erick Arc Elliot The Architect Issa Gold Ak The Savior Akthesavior Nyck Caution Kirk Knight CJ Fly Powers Pleasant",
    uploader_id: user3.id,
    view_count: 89665})
    
coastP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/coastP.png')
vid5.thumbnail.attach(io: coastP, filename: 'coastP.png')

coast = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/coast.mp4')
vid5.video.attach(io: coast, filename: 'coast.mp4')

vid5.save

vid6 = Video.new({
    title: "Remi Wolf - Photo ID (with Dominic Fike) (Official Video)", 
    description: "Directed by: Florida Man
                Produced by: Psycho Films",
    uploader_id: user4.id,
    view_count: 1407556})
    
remiP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/remiP.png')
vid6.thumbnail.attach(io: remiP, filename: 'remiP.png')

remi = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/remi.mp4')
vid6.video.attach(io: remi, filename: 'remi.mp4')

vid6.save

vid7 = Video.new({
    title: "Polyphia | Goose (Official Music Video)", 
    description: "Goose (Official Music Video)
                    Taken from the EP The Most Hated

                    iTunes: goo.gl/xU4hgH
                    Spotify: goo.gl/qCfChg
                    Apple Music: goo.gl/dJG1wh
                    http://polyphia.merchnow.com",
    uploader_id: user5.id,
    view_count: 6955408})
    
gooseP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/gooseP.png')
vid7.thumbnail.attach(io: gooseP, filename: 'gooseP.png')

goose = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/goose.mp4')
vid7.video.attach(io: goose, filename: 'goose.mp4')

vid7.save

vid8 = Video.new({
    title: "Lonr. - Unruly (Audio)", 
    description: "'Land of Nothing Real' available at: https://Lonr.lnk.to/LandOfNothingReal

                Follow Lonr. at:
                https://www.instagram.com/1lonr/?hl=en
                https://twitter.com/1lonr1",
    uploader_id: user6.id,
    view_count: 0})
    
unrulyP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/unrulyP.png')
vid8.thumbnail.attach(io: unrulyP, filename: 'unrulyP.png')

unruly = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/unruly.mp4')
vid8.video.attach(io: unruly, filename: 'unruly.mp4')

vid8.save

vid9 = Video.new({
    title: "Pierce The Veil - Bulletproof Love", 
    description: "BULLETPROOF LOVE
                ITUNES: https://itunes.apple.com/us/album/sel...
                MERCH: http://www.ptvmerch.com
                CD/LP: http://piercetheveil.merchnow.com/
                SPOTIFY: http://spoti.fi/2bn7smG

                From the album 'Selfish Machines' out now.",
    uploader_id: user10.id,
    view_count: 0})
    
bulletproofP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/bulletproofP.png')
vid9.thumbnail.attach(io: bulletproofP, filename: 'bulletproofP.png')

bulletproof = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/bulletproof.mp4')
vid9.video.attach(io: bulletproof, filename: 'bulletproof.mp4')

vid9.save

vid10 = Video.new({
    title: "How (demo)", 
    description: "How (demo) · Clairo

                diary 001

                ℗ 2018 Clairo under exclusive license to FADER Label",
    uploader_id: user12.id,
    view_count: 2130432})
    
clairoP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/clairoP.png')
vid10.thumbnail.attach(io: clairoP, filename: 'clairoP.png')

clairo = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/clairo.mp4')
vid10.video.attach(io: clairo, filename: 'clairo.mp4')

vid10.save

vid11 = Video.new({
    title: "Dion Timmer - Shiawase [Monstercat Release]", 
    description: "Instinct Vol. 7 collection is available now! https://monster.cat/3e3DhPw

                🎧 Support on all platforms: https://Monstercat.lnk.to/Shiawase",
    uploader_id: user7.id,
    view_count: 3434942})
    
shiawaseP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/shiawaseP.png')
vid11.thumbnail.attach(io: shiawaseP, filename: 'shiawaseP.png')

shiawase = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/shiawase.mp4')
vid11.video.attach(io: shiawase, filename: 'shiawase.mp4')

vid11.save

vid12 = Video.new({
    title: "Breaking The Habit - Linkin Park", 
    description: "Directed by Joe Hahn.",
    uploader_id: user8.id,
    view_count: 273615875})
    
linkinP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/linkinP.png')
vid12.thumbnail.attach(io: linkinP, filename: 'linkinP.png')

linkin = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/linkin.mp4')
vid12.video.attach(io: linkin, filename: 'linkin.mp4')

vid12.save

vid13 = Video.new({
    title: "Fleet Foxes - White Winter Hymnal", 
    description: "'White Winter Hymnal' by Fleet Foxes
                Order/Stream - https://ffm.to/whitewinterhymnal",
    uploader_id: user9.id,
    view_count: 23396287})
    
fleetP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/fleetP.png')
vid13.thumbnail.attach(io: fleetP, filename: 'fleetP.png')

fleet = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/fleet.mp4')
vid13.video.attach(io: fleet, filename: 'fleet.mp4')

vid13.save

vid14 = Video.new({
    title: "Bill Evans - Midnight Mood", 
    description: "Album: Alone (1968) Composition: Ben Raleigh, Joe Zawinul
                Recorded Sept.- Oct. 1968, NYC",
    uploader_id: user1.id,
    view_count: 413388})
    
billP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/billP.png')
vid14.thumbnail.attach(io: billP, filename: 'billP.png')

bill = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/bill.mp4')
vid14.video.attach(io: bill, filename: 'bill.mp4')

vid14.save

vid15 = Video.new({
    title: "YOASOBI「あの夢をなぞって・Tracing that Dream」 Official Music Video", 
    description: "Download / Streaming Link:
                https://orcd.co/yoasobi_anoyumewonazotte",
    uploader_id: user2.id,
    view_count: 46383661})
    
yoasobiP = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/yoasobiP.png')
vid15.thumbnail.attach(io: yoasobiP, filename: 'yoasobiP.png')

yoasobi = open('https://youtwobe-seeds.s3.us-east-2.amazonaws.com/yoasobi.mp4')
vid15.video.attach(io: yoasobi, filename: 'yoasobi.mp4')

vid15.save


com1 = Comment.create!({body: "much wao", commenter_id: user1.id, video_id: vid1.id})
com2 = Comment.create!({body: "the mitochondria is the powerhouse of the cell", commenter_id: user2.id, video_id: vid2.id})
com3 = Comment.create!({body: "so good", commenter_id: user3.id, video_id: vid3.id})
com4 = Comment.create!({body: "hahahahaha", commenter_id: user4.id, video_id: vid8.id})
com5 = Comment.create!({body: "poggies", commenter_id: user5.id, video_id: vid1.id})
com6 = Comment.create!({body: "ffffffffffffff", commenter_id: user6.id, video_id: vid5.id})
com7 = Comment.create!({body: "first", commenter_id: user7.id, video_id: vid6.id})
com8 = Comment.create!({body: "yeet", commenter_id: user8.id, video_id: vid7.id})

like1 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid1.id})
like2 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid2.id})
like3 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid3.id})
like4 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid15.id})
like5 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid5.id})
like6 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid6.id})
like7 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid7.id})
like8 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid8.id})
like9 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid9.id})
like10 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid10.id})
like11 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid11.id})
like12 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid12.id})
like13 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid13.id})
like14 = Like.create!({liker_id: user1.id, kind: "like", likable_type: "Video", likable_id: vid14.id})
like16 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid1.id})
like17 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid2.id})
like18 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid3.id})
like19 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid10.id})
like20 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid5.id})
like21 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid6.id})
like22 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid7.id})
like23 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid8.id})
like24 = Like.create!({liker_id: user2.id, kind: "like", likable_type: "Video", likable_id: vid9.id})
like25 = Like.create!({liker_id: user3.id, kind: "dislike", likable_type: "Video", likable_id: vid2.id})
