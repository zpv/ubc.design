<?php
require('../config.php');
require('Mailchimp.php');

$Mailchimp = new Mailchimp( MAILCHIMP_API_KEY );
$Mailchimp_Lists = new Mailchimp_Lists( $Mailchimp );
$subscriber = $Mailchimp_Lists->subscribe( MAILCHIMP_LIST_ID, array( 'email' => htmlentities($_POST['email']) ) );
if ( ! empty( $subscriber['leid'] ) ) {
   echo "success";
}
else
{
    echo "fail";
}
?>