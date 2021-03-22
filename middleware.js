module.exports =  (options)=> {
    return  (req, res, next) =>{
        console.log('external middle ware working');
      next()
    }
  }