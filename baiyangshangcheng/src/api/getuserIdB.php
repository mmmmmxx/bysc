<?php
$username=$_REQUEST["username"];
$db=mysqli_connect("127.0.0.1","root","","bysc");
mysqli_set_charset($db,"utf8");
$sqlA="SELECT * FROM user WHERE username='$username' ";
$resA=mysqli_query($db,$sqlA);
$res=mysqli_fetch_all($resA,MYSQLI_ASSOC);
echo json_encode($res,true);
?>
