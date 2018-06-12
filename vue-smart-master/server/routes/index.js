var express = require('express');
var router = express.Router();

var $mysql   = require("mysql");

var sql = require("../models/mysql");       //   这句话是，引入当前目录的mysql模板   mysql就是我们上面创建的mysql.js

//var $sql = $mysql.createConnection(sql.mysql)       //创建一个连接        mysql是我们上面文件暴露出来的模板的方法

//$sql.connect()
//var selectSql = 'select * from user' ;
// $sql.query(selectSql,function(err,res){
//   if(err){
//     console.log('err:' + err);
//     return ;
//   }
//     console.log('Get name success') ;
//     console.log(res)
//    }) ;
//$sql.end();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 注册接口
router.all('/zs-app/register/appRegister.do', function(req, res, next) {
  console.log(req.body);
  //增加数据
  var addsql = 'INSERT INTO user(username,password) VALUES(?,?)'; 
  var addsqlparams = [req.body.phone,req.body.password]; 
  var $sql = $mysql.createConnection(sql.mysql) 
  $sql.connect() 
  $sql.query(addsql,addsqlparams,function (err,result) {  
    if(err){  
        console.log('error');  
        $sql.end();
        res.json({sign:'1',msg:'此用户名已被注册'})
        return;  
    } 
      console.log('-----------------新增----------------');  
      console.log(result);
      console.log('-----------------结束----------------'); 
      $sql.end();
      res.json({sign:'0',msg:'注册成功'}) 
    
    
}) 
  
});
// 登录接口
router.all('/zs-app/login/passwordlogin.do', function(req, res, next) {
  console.log(req.body);
  //查询数据
  var addsql = 'SELECT * FROM user WHERE username = ? and password = ?'; 
  var addsqlparams = [req.body.phone,req.body.password]; 
  var $sql = $mysql.createConnection(sql.mysql) 
  $sql.connect() 
  $sql.query(addsql,addsqlparams,function (err,result) {  
    if(err){  
        console.log('error');  
        $sql.end();
        res.json({sign:'1',msg:'登录失败'})
        return;   
    }
    if (result.length ==0 ){
      $sql.end();
      res.json({sign:'1',msg:'用户名或密码错误'})
    }
    else {
      $sql.end();
      res.json({sign:'0',msg:'登录成功'}) 
    }
      console.log('-----------------查询----------------');  
      console.log(result);
      console.log('-----------------结束----------------');     
}) 
});

// 修改密码接口
router.all('/zs-app/login/updatePassword.do', function(req, res, next) {
  console.log(req.body);
  //查询数据
  var updateSql = 'UPDATE user set password = ? where username = ?';
  var updateParams = [req.body.password, req.body.phone];

  var $sql = $mysql.createConnection(sql.mysql) 
  $sql.connect() 
  $sql.query(updateSql,updateParams,function (err,result) {  
    if(err){  
        console.log('error');  
        $sql.end();
        res.json({sign:'1',msg:'修改失败'})
        return;   
    }
    if (result.length ==0 ){
      $sql.end();
      res.json({sign:'1',msg:'修改失败'})
    }
    else {
      $sql.end();
      res.json({sign:'0',msg:'密码修改成功'}) 
    }
      console.log('-----------------修改----------------');  
      console.log(result);
      console.log('-----------------结束----------------');     
}) 
});
//连接网关获取其设备数目和mac地址
router.all('/zs-app/v2/user/subscribe/devices', function(req, res, next) {
  console.log(req.cookies)
  res.json({sign:'0',msg:'成功',length:true}) 
});
//连接网关
router.all('/zs-app/getDevices.do', function(req, res, next) {
  console.log(req.cookies)
  res.json({sign:'0',msg:'网关添加成功',length:true}) 
});
module.exports = router;
