<?php 
	$username = $_GET['username'];
	$password = $_GET['password'];
	header('content-type:text/html;charset=utf-8');
	
	try{
		$dsn = "mysql:host=localhost;dbname=sigin";
		$pdo = new PDO($dsn,'root','');
		
		$pdo->exec("SET NAMES utf-8");
		
		$res = $pdo->prepare("SELECT * FROM sjk WHERE username=${username} and password=${password}");
		
		$res->execute();
		
		// 解析字符集
		$res = $res->fetchAll();
		
		echo json_encode($res);
		
	}catch(Exception $e){
		echo $e->getMessage();
	}
?>