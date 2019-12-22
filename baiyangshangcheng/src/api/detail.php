<?php
//获取前端传来的商品id
$id=$_REQUEST["good_id"];
//链接数据库
$db=mysqli_connect("127.0.0.1","root","","bysc");
//查询对应id的商品信息
$sql="SELECT * FROM goodlist WHERE good_id=$id";
//将数据库转码为utf8
mysqli_set_charset($db,"utf8");
//执行sql语句
$result=mysqli_query($db,$sql);
//将查询到的结果用$data保存
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
//以json格式返回结果
echo json_encode($data,true);

?>