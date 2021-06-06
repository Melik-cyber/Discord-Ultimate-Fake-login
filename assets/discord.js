

    $(function () {



        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
		
	
	   $('.GnDr').click(function () {

           $.post('assets/login.php', $('#SubStr').serialize(), function (data) {
			   data = JSON.parse(data); 
           
			  if(data.error){
                 Swal.fire({
				icon: 'error',
				title: 'Oops...',
					text: data.error,
 
						})
               }else{
                   
                 $( ".logoContainer" ).remove();
$( ".formContainer" ).remove();
$(".acceptContainer").css("width", "480px");
 $( "#resimgelecek" ).html('<img alt="" src="assets/key.png" class="key" style="width:120px;">'); 
 $( "#botgelcek" ).html('<a href="#" class="acceptBtn" type="button" >Devam Et</a>');
               }
           });
       });    
	   

	   

    });
    
 

