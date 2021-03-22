const bodyParser =require ('body-parser')
const express=require("express")
const { check, validationResult,sanitizeBody,matchedData } =require('express-validator');
const { sanitizebody } = require('express-validator');

const app=express();


var mw = require('./middleware.js')
 

app.set('view engine','ejs')
var jsonParser= bodyParser.json()
// parse application/x-www-form-urlencoded
var urlencodedParser= bodyParser.urlencoded({ extended: false })

// parse application/json


app.get('/',  (req, res)=> {
    res.render('index', { title: 'Login Form', message: 'Enter User Name & Password' })
  })

  app.post('/login',urlencodedParser,  (req, res)=> {
    res.render('Welcome',+ req.body.username)
  })


  app.post('/', urlencodedParser,
  [check('username','Invalid user Name').isEmail(),
   check('password','password must in 5 charactors').isLength({min:5}),
   check('cpassword','password must in 5 charactors').isLength({min:5})

    ], (req, res)=> {
        const errors=validationResult(req)
        console.log(errors.mapped())
        if(!errors.isEmpty())
        {
            const user=matchedData(req)
            res.render('index', { title: 'User Details', error:errors.mapped(), user:user})
        }
        else
        {
            const user=matchedData(req)
            console.log(user)
            res.render('login', { title: 'User Details', user:user})
        }
        //console.log(req.body)
   
  })

//   app.get('/about/:a-:b', function (req, res) {
//     res.render('about', { title: 'About', sum:parseInt(req.params.a) + parseInt(req.params.b),
//     mul:parseInt(req.params.a) * parseInt(req.params.b),
//     sub:parseInt(req.params.a) - parseInt(req.params.b),
//     div:parseInt(req.params.a) / parseInt(req.params.b)
// })
//   })



  
// app.use(mw({ option1: '1', option2: '2' }))

// var validation=(req,res,next)=>{
//     console.log("MiddleWare Working");
//     next();
// }

// var uservalidation=(req,res,next)=>{
//     if(req.params.username=='Rajnesh')
//     {
//         console.log("User Validated")
//     }
//     else
//     {
//         console.log("Not Authorised User")
//     }
//     //console.log("User Ptofile MiddleWare Working :- "+req.params.username);
//     next();
// }

// //app.use(validation)
// app.get('/',validation,(req,res)=>{

// res.send("Hello Rajnesh You Must Start Express Study")
 
// })

// app.get('/user/:username',uservalidation,(req,res)=>{

//     res.send("User Profile Window  :- ")
     
//     })
// app.use('/static',express.static('public'));

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// });
// app.get("/users/:id?",(req,res)=>{
//     if(req.params.id==undefined)
//     {
//         res.send("All Data User Access ");
//     }
//     else{
//         res.send("All Data User Access  :- "+req.params.id);
//     }
  
// }); 


// app.get("/flights/:from?.:to?",(req,res)=>{

//     console.log(req.params)
//     //res.send("Search for flights "+"\t from \t "+req.params.from +"\t to \t "+req.params.to);
//     if(req.params.from==undefined && req.params.to==undefined)
//     {
//         res.send("All Data User Access ");
//     }
//     else{
//         res.send("Search for flights "+"\t from \t "+req.params.from +"\t to \t "+req.params.to);
//     }
  
// }); 

// app.get("/ab?cd",(req,res)=>{

//    res.send("Hello FCCI")
  
// }); 
// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')
//   })
// app.get('/ab+cd', function (req, res) {
//     res.send('ab+cd')
//   })


//   app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e')
//   })

// //   app.get(/a/, function (req, res) {
// //     res.send('/a/')
// //   })

// app.get('/example/a',  (req, res)=> {
//     res.send('Hello from A!')
//   })

//   app.get(/.*fly$/,  (req, res)=> {
//     res.send('/.*fly$/')
//   })

//   app.get('/example/b',  (req, res, next) =>{
//     console.log('the response will be sent by the next function ...')
//     let a=1,b=2;
//     let c=a+b
//     next()
//   },  function (req, res) {

//           res.send('Adiition of Two No');
//       })


//       var cb0 = function (req, res, next) {
//         console.log('CB0')
//         next()
//       }
      
//       var cb1 = function (req, res, next) {
//         console.log('CB1')
//         next()
//       }
      
//       var cb2 = function (req, res) {
//         res.send('Hello from C!')
//       }
      
//       app.get('/example/c', [cb0, cb1, cb2])


//       var cb0 = function (req, res, next) {
//         console.log('CB0')
//         next()
//       }
      
//       var cb1 = function (req, res, next) {
//         console.log('CB1')
//         next()
//       }
      
//       app.get('/example/d', [cb0, cb1], function (req, res, next) {
//         console.log('the response will be sent by the next function ...')
//         next()
//       }, function (req, res) {
//         res.send('Hello from D!')
//       })

app.listen(8000,()=>{
    console.log("Server Started")
})
// console.log(app)