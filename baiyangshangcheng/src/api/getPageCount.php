<?php
//链接数据库
$db=mysqli_connect("127.0.0.1","root","","bysc");
//查询数据的总数 (查询商品表所有数据)
$sql="SELECT * FROM goodlist";
$result=mysqli_query($db,$sql);
//获取总行数38  => mysqli_num_rows($result);
// 122/30=4.123 (总122每页显示30个需要5页)
//Math.ceil()
$count=ceil(mysqli_num_rows($result)/10);
//返回
$data=array("count"=>$count);
echo json_encode($data,true);







?>