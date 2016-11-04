var express=require("express")
var servestatic=require('serve-static')
var bodyParser=require('body-parser')
var path=require('path')
var port=process.env.port || 3000
var app=express()

app.set("views",'./view/pages')
app.set("view engine" , "jade")
app.use(servestatic('bower_components'))
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log("the port listen at " + port)

//dispose the router
app.get("/",function (req,res) {
	res.render("index",{
		                 title:'imooc movie site,new and popular!',
						movies:[{_id:1,
								title:'Hongkong embarrassed',
								posterkey: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5', 
                               },
                               {
                               	_id:2,
								title:'Major Crime IN Meigong River',
								posterkey: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5', 
                               },
                               {
                               	_id:3,
								title:'Transformer',
								posterkey: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5', 
                               },
                               {
                               	_id:4,
								title:'Transformer',
								posterkey: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5', 
                               },
                               {
                               	_id:5,
								title:'Transformer',
								posterkey: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5', 
                               }
                              ]
    })
})

//dispose the router of admin
 app.get('/admin',function (req,res) {
 	res.render('admin',{title:'adminer could add movie here '})
 })

 app.get('/detail',function (req,res) {
 	res.render('detail',{title:'movie detail ,find more about movie'})
 })

 app.get('/list',function (req,res) {
 	res.render('list',{title:'find more movie here'})
 })

