<?php
//链接数据库
$db=mysqli_connect("127.0.0.1","root","","bysc");
//获取前端传来的参数
$phone=$_REQUEST["phone"];
$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
//查询密码
$sqlA="SELECT * FROM user WHERE username='$username' ";
$resA=mysqli_query($db,$sqlA);
$sqlB="SELECT * FROM user WHERE phone='$phone' ";
$resB=mysqli_query($db,$sqlB);

$data=array("status"=>"","msg"=>"","data"=>"");
//判断如果手机号码为空 查询用户名和密码是否正确
if($phone==""){
   //查询用户名是否不存在
   if(mysqli_num_rows($resA)==0){
       $data["status"]="error";
       $data["msg"]="登录失败，用户名不存在";
   }else{
        $res=mysqli_fetch_all($resA,MYSQLI_ASSOC);
        $data["data"]=$res[0];
   }
  

}
if($username==""){
//查询电话号码是否不存在
    if(mysqli_num_rows($resB)==0){
        $data["status"]="error";
        $data["msg"]="登录失败，手机号码不存在";
    }else{
         $res=mysqli_fetch_all($resB,MYSQLI_ASSOC);
        $data["data"]=$res[0];
    }
     
}
  echo json_encode($data,true); 

?>