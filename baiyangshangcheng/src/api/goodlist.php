<?php
// header("Content-Type: text/json; charset=UTF-8");
$data=file_get_contents("goodlist.json");
// $data=json_decode($data,true);
// //php->json
// $json=json_encode($data,true);
// echo $json;
echo $data;

?>