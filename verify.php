<?php
$ref = "";
if(isset($_POST['reference'])){
  $ref = $_POST['reference'];
}else{
  die("Transaction reference not found");
}

$result = array();
//The parameter after verify/ is the transaction reference to be verified
$url = 'https://api.paystack.co/transaction/verify/'.$ref;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt(
  $ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer secret_key']
);
$request = curl_exec($ch);
curl_close($ch);

if ($request) {
    $result = json_decode($request, true);
    // print_r($result);
    if($result){      
      if($result['data']){
        //something came in
        if($result['data']['status'] == 'success'){
          // the transaction was successful, you can deliver value          
          echo "success";
        }else{
          // the transaction was not successful, do not deliver value'
          // print_r($result);  //uncomment this line to inspect the result, to check why it failed.
          echo "Transaction was not successful: Last gateway response was: ".$result['data']['gateway_response'];
        }
      }else{
        echo $result['message'];
      }
    }else{
      //print_r($result);
      die("Something went wrong while trying to convert the request variable to json. Uncomment the print_r command to see what is in the result variable.");
    }
  }else{
    //var_dump($request);
    die("Something went wrong while executing curl. Uncomment the var_dump line above this line to see what the issue is. Please check your CURL command to make sure everything is ok");
  }