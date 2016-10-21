$(document).ready(function() {
    $('#subscribeform').submit(function() {
        if (!valid_email_address($("#email").val()))
        {
            $(".message").html('<p>The email address you entered was invalid. Please make sure you enter a valid email address to subscribe.</p>');
        }
        else
        {
            
            $(".message").html("<p>Adding your email address...</p>");
            $.ajax({
                url: '/mail/subscribe.php', 
                data: $('#subscribeform').serialize(),
                type: 'POST',
                success: function(msg) {
                    if(msg=="success")
                    {
                        $("#email").val("");
                        $(".message").html('<p>You have successfully subscribed to our mailing list.</p>');
                        
                    }
                    else
                    {
                      $(".message").html('<p>The email address you entered was invalid. Please make sure you enter a valid email address to subscribe.</p>');  
                    }
                }
            });
        }

        return false;
    });
});
function valid_email_address(email)
{
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(email);
}