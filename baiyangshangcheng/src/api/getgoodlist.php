<?php
$type=$_REQUEST["type"];
//先链接数据库
$db=mysqli_connect("127.0.0.1","root","","bysc");
//将数据库bysc转码为utf8;
mysqli_set_charset($db,"utf8");
//查询数据库所有的数据
// $sql="SELECT * FROM goodlist";

//获取参数
$page=($_REQUEST["page"]-1)*10;
//查询数据的总数 38(查询商品表所有数据)
if($type=="default"){
    $sql="SELECT * FROM goodlist LIMIT $page,10";
}elseif($type=="desc"){
    $sql="SELECT * FROM goodlist ORDER BY goodlist.priceA DESC LIMIT $page,10";
}elseif($type=="asc"){
    $sql="SELECT * FROM goodlist ORDER BY goodlist.priceA ASC LIMIT $page,10";
};




$result=mysqli_query($db,$sql);
//获取所有数据
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
//把数据库中的获取所有数据转换为json返回
// print_r($data);
echo json_encode($data,true);
?>