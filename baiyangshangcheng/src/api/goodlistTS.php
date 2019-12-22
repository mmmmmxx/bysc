<?php
//网页版数据库引入是会乱码。
//链接数据库
$db=mysqli_connect("127.0.0.1","root","","bysc");
//插入数据 加载json数据
$jsonData=file_get_contents("goodlist.json");
//把json数据转换为php数组
$data=json_decode($jsonData,true);
// print_r(count($data));
// 通过for循环遍历数组
for($i=0;$i<count($data);$i++){
    $id=$i+1;
    $title=$data[$i]["title"];
    $priceA=$data[$i]["priceA"];
    $priceB=$data[$i]["priceB"];
    $c=$data[$i]["c"];
    $t=$data[$i]["t"];
    $i=$data[$i]["i"];
    $g1=$data[$i]["g1"];
    $g2=$data[$i]["g2"];
    $g3=$data[$i]["g3"];
    $g4=$data[$i]["g4"];
    $g5=$data[$i]["g5"];
    $sellcount=$data[$i]["sellcount"];
    $pingcount=$data[$i]["pingcount"];
    $store=$data[$i]["store"];
    $sql="INSERT INTO `goodlist` (`id`,`title`,`priceA`,`priceB`,`c`,`t`,`i`,`g1`,`g2`,`g3`,`g4`,`g5`,`sellcount`,`pingcount`,`store`) VALUES ('$id','$title','$priceA','$priceB','$c','$t','$i','$g1','$g2','$g3','$g4','$g5','$sellcount','$pingcount','$store')";
    mysqli_query($db,$sql);
}



?>