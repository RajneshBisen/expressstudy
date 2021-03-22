const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://m001:m001@sandbox.qhxgb.mongodb.net/student?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const connect=mongoose.connection;
const studentSchema=new mongoose.Schema({
    stdName:String,
    email:String,
    age:Number,
    afterage:Number,
    mobileNo:Number
});

studentSchema.methods.totalage=function (){
    console.log("After Age of",this.stdName," 5 Year",this.age + this.afterage)
}
const studentModel=mongoose.model('student',studentSchema);
const student=new studentModel({
    stdName:'rajnesh',
    email:'rtbisen49@gmail.com',
    age:26,
    afterage:5,
    mobileNo:8668485512
});

student.totalage();

connect.on("connected",function(){

    console.log("Connection Succesfully");
});

connect.on("Disconnected",function(){

    console.log("DisConnected Succesfully");
});

connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', function() {
    // we're connected!
        //Save Code
    student.save(function(err,res){
        if(err) throw error;
        else
        console.log(res)
        connect.close();
    })
    // studentModel.find({},(err,data)=>{
    //     if(err) throw error
    //     console.log(data)
    //     connect.close();
    // });
  });