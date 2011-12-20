$(document).ready(function() {

    var options = {
        target : '#contactFormContainer',
        url : 'php/contact.php',
        success : function() {
            
        },
        beforeSubmit: function() { 
            if($('#message').val() !== ''){

            }else{
                return false;
            }
        }
    };
    
    $('#cForm').ajaxForm(options);
});
