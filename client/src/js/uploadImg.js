// $(function() {
//     $("#sortableImgThumbnailPreview").sortable({
//      connectWith: ".RearangeBox",
    
        
//       start: function( event, ui ) { 
//            $(ui.item).addClass("dragElemThumbnail");
//            ui.placeholder.height(ui.item.height());
   
//        },
//         stop:function( event, ui ) { 
//            $(ui.item).removeClass("dragElemThumbnail");
//        }
//     });
//     $("#sortableImgThumbnailPreview").disableSelection();
//   });



//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
  
//   function handleFileSelect(evt) {
  
//   var files = evt.target.files; 
//   var output = document.getElementById("sortableImgThumbnailPreview");
  
//   // Loop through the FileList and render image files as thumbnails.
//   for (var i = 0, f; f = files[i]; i++) {
  
//   // Only process image files.
//   if (!f.type.match('image.*')) {
//   continue;
//   }


//   var reader = new FileReader();
  
//   // Closure to capture the file information.
//   reader.onload = (function(theFile) {
//   return function(e) {
//   // Render thumbnail.
//    var imgThumbnailElem = "<div class='RearangeBox imgThumbContainer'><i class='material-icons imgRemoveBtn' onclick='removeThumbnailIMG(this)'>cancel</i><div class='IMGthumbnail' ><img  src='" + e.target.result + "'" + "title='"+ theFile.name + "'/></div><div class='imgName'>"+ theFile.name +"</div></div>";

//     output.innerHTML = output.innerHTML + imgThumbnailElem; 
  
//   };
//   })(f);
  
//   // Read in the image file as a data URL.
//   reader.readAsDataURL(f);
//   }
//   }
  
//   function removeThumbnailIMG(elm){
//   elm.parentNode.outerHTML='';
//   }