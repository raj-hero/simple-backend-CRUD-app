const express=require('express');
// vvvv  creates new app
// const app=express();
const route=express.Router();
const services=require('../services/render');
const controller=require('../controller/controller');
const { Router } = require('express');

/** 
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes);

/** 
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user',services.add_user);

/** 
 * @description update users
 * @method GET /update-user
 */
route.get('/update-user',services.update_user);


route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.post('/api/users',controller.create);
route.post('/api/users',controller.create);
module.exports=route;