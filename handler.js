'use-strict';
require ('dotenv').config();
const connectToDatabase = require('./config/db');
const user=require('./models/users');

module.exports.createUser=(event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop=false;
  connectToDatabase()
  .then(()=>{
    user.create(JSON.parse(event.body))
    .then(data=>{
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data)
      }).catch(err=>{
        callback(null,{
          statusCode:err.statusCode||500,
          body:JSON.stringify(err)
        })
      })
      
    })
  })
};

module.exports.getUsers=(event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop=false;
  connectToDatabase()
  .then(()=>{
    user.find()
    .then(data=>{
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data)
      }).catch(err=>{
        callback(null,{
          statusCode:err.statusCode||500,
          body:JSON.stringify(err)
        })
      })
      
    })
  })
};

module.exports.getUser=(event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop=false;
  connectToDatabase()
  .then(()=>{
    user.findById(event.pathParameters.id)
    .then(data=>{
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data)
      }).catch(err=>{
        callback(null,{
          statusCode:err.statusCode||500,
          body:JSON.stringify(err)
        })
      })
      
    })
  })
};

module.exports.deleteUser=(event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop=false;
  connectToDatabase()
  .then(()=>{
    user.findByIdAndDelete(event.pathParameters.id)
    .then(data=>{
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data)
      }).catch(err=>{
        callback(null,{
          statusCode:err.statusCode||500,
          body:JSON.stringify(err)
        })
      })
      
    })
  })
};

module.exports.updateUser=(event,context,callback)=>{
  context.callbackWaitsForEmptyEventLoop=false;
  connectToDatabase()
  .then(()=>{
    user.findByIdAndUpdate(event.pathParameters.id,JSON.parse(event.body))
    .then(data=>{
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data)
      }).catch(err=>{
        callback(null,{
          statusCode:err.statusCode||500,
          body:JSON.stringify(err)
        })
      })
      
    })
  })
};
