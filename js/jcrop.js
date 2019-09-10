<script type="text/javascript">
  jQuery(function($){
	 
    var api;

    $('#target').Jcrop({
      // start off with jcrop-light class
      bgOpacity: 0.5,
      keySupport: false,
      bgColor: 'black',
      minSize:[240,320],
      maxSize:[480,640],
     /* onChange : updatePreview,
      onSelect : updatePreview, */
      height:160,
      width:120,
      addClass: 'jcrop-normal'
    },function(){
      api = this;
      api.setSelect([0,0,240,320]);
      api.setOptions({ bgFade: true });
      api.ui.selection.addClass('jcrop-selection');
    });

  });
 
  jQuery('#clear_selection').click(function(){
	  $('#target').Jcrop({    
		  
	      setSelect: [0,0,0,0],
	    });
	});
 
   function readURL(input) {
		
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#target').attr('src', e.target.result);
	            setProperties();       
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	
   function setProperties(){
	   $('#target').Jcrop({       	
	  	    	  setSelect: [0,0,240,320]
	  	    }); 
   }
	$("#photograph").change(function(){
	    readURL(this);	   
	});
  
	function make_base() {
		console.log("make_base called");
	    var base_image = new Image();
	    base_image.src = '';
	    base_image.onload = function () {
	        context.drawImage(base_image, 0, 0);
	    }
	}

	var canvas = document.getElementById('preview'),
	context = canvas.getContext('2d');

	make_base();
	function updatePreview(c) {
		console.log("called");
	    if(parseInt(c.w) > 0) {
	        // Show image preview
	        var imageObj = $("#target")[0];
	        var canvas = $("#preview")[0];
	        var context = canvas.getContext("2d");
	        context.drawImage(imageObj, c.x, c.y, c.w, c.h, 0, 0, canvas.width, canvas.height);
	    }
	};
	

</script>