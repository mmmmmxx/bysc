<?php

#1、先获取用户提交的参数；
$phone = $_REQUEST["phone"]; 
$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
$email=$_REQUEST["email"];

#2、通过php代码来操作数据库
#链接数据库
$db=mysqli_connect("127.0.0.1:3306","root","","bysc");
#检查电话号码是否已经被注册，如果已经注册，返回错误的提示信息。

$sqlA="SELECT * FROM user WHERE  username ='$username' ;";

#执行查询语句

$resA=mysqli_query($db,$sqlA);
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

    if(mysqli_num_rows($resA)==1){
        $response["status"]="error";
        $response["msg"]="该用户名已经被注册";
        echo json_encode($response,true);
    }else{
        $insertsql= "INSERT INTO `user` (`id`, `phone`, `username`, `password`,`email`) VALUES (NULL, '$phone', '$username', '$password','$email')";
        $last=mysqli_query($db,$insertsql);
        $response["status"]="success";
        $response["msg"]="恭喜你注册成功！";
        echo json_encode($response,true);
  }

?>