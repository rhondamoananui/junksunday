$(document).ready( function() {  

    //  CLICK ON A THUMB TO SHOW THE LARGER IMAGE IN A LIGHTBOX

        // when a thumb is clicked
        $('.lightbox_trig').click(function() {              

            // Show the img in a modal
            var image_src = $(this).attr("src");          // Get the value of the src for the first element
            

            // take off the thumb/
            var full_src = image_src.replace("thumb", "full");
            
            // change the thumb to full
          
           $('#modal').removeClass('hide').addClass('modal').html('<div id="modal-row"><button id="previous">Previous</button><div id="display"><img src="' + full_src + '" /></div><button id="next">Next</button></div><div id="close-button"><button id="close">Close</button></div>');   
            

        }); 




        

    // function getThumbs() {

    thumbs = $('#wrapper ul li img'); //.attr('src');   //  Get the first thumbnail source

    //console.log(thumbs);
    // loop through thumbs
    var aImgNames = [];
    for(var i=0;i<thumbs.length;i++) {
    filename = getFilename(thumbs[i]);

        aImgNames.push(filename);
    }

    // strip out the file name
    // push that into an array  -  aImgNames
        



 

    //1/    need array of all thumbnail srcs
    //      =querySelectorAll(.thumbs)
    //      turn filename into an array, pop off the last item
            
            

            
    function getFilename(objName){ 

    //var img_arr = $('#wrapper ul li img')[0].src; // returns filepath
        file = objName.src; // get the file path, then strip out the name
        var index = file.lastIndexOf("/") + 1;   // returns 79 
        var filename = file.substr(index);       // returns img1.jpg

        return filename;             // returns the filename eg. image1.jpg
      

    }
        


    //2/    What is the current image
    //      Where is it in the array


    function whatIsMyIndex(){
        // select the current image
        currMain = document.querySelector('#modal #display img');
        //console.log(currMain);

        // get the filename of the current img
       imagename = getFilename(currMain);


        //imagename = currMain.substring(currMain.lastIndexOf('/')+1, currMain.length) ;

        return aImgNames.indexOf(imagename) ;
    };

          

    //3/    Choose the one before (if it exists)


    // eventlisteners


    $(document).on("click", "#next", function(){
        
        x = whatIsMyIndex();
        y = x + 1;
        if(x == aImgNames.length-1){
            y = 0;
        }
        document.getElementById('display').innerHTML = '<img src="image/full/' + aImgNames[y] + '" />';
    });

    $(document).on("click", "#previous", function(){
        
        x = whatIsMyIndex();
        y = x - 1;

        if(x<=0) {
            //y = lastIndexOf(whatIsMyIndex());
            y = 2; 
           
            //document.getElementById('display').innerHTML = '<img src="image/full/' + aImgNames[y] + '" />';
        }

       
        document.getElementById('display').innerHTML = '<img src="image/full/' + aImgNames[y] + '" />';
    });



    
//  CLICK ANYWHERE ON THE LIGHTBOX TO EXIT, AND GO BACK TO THE THUMBS

// click anywhere on the modal to exit
 $(document).on("click", "#close", function(){//#modal #close-button 

    // console.log('dfghj');
    $('#modal').removeClass('modal').addClass('hide');
    
});
 







}); 