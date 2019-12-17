<?php

#1、先获取用户提交的参数；
$phone = $_REQUEST["phone"]; 
#2、通过php代码来操作数据库
#链接数据库
$db=mysqli_connect("127.0.0.1:3306","root","","bysc");
#检查电话号码是否已经被注册，如果已经注册，返回错误的提示信息。
$sql="SELECT * FROM user WHERE phone='$phone' ";

#执行查询语句
$result =mysqli_query($db,$sql);

/* 
mysqli_result Object
(
    [current_field] => 0
    [field_count] => 4
    [lengths] => 
    [num_rows] => 1   表示查询到的结果有一行
    [type] => 0
)
*/
$response=array("status"=>"","msg"=>"");

    if(mysqli_num_rows($result)==1){
        //手机号码已经被注册
        $response["status"]="error";
        $response["msg"]="该手机号码已经被注册";
        echo json_encode($response,true);
    }else{  
        //输出
        $response["status"]="ok";
        $response["msg"]="手机号码验证成功";
        echo json_encode($response,true);
    }








?>