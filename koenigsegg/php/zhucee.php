<?php 
	$username = $_GET['username'];
	$password = $_GET['password'];
	header('content-type:text/html;charset=utf-8');
	
	try{
		$dsn = "mysql:host=localhost;dbname=sigin";
		$pdo = new PDO($dsn,'root','');
		
		$pdo->exec("SET NAMES utf-8");
		
		$res = $pdo->prepare("INSERT INTO sjk (username,password) VALUE(${username},${password})");
		
		$res->execute();
		// var_dump($res);
		// echo json_encode($res);
	}catch(Exception $e){
		echo $e->fetMessage();
	}
?>