/*
*
* styles/prosilver/template/jquery.ShowImage.js
*
* @author Thorsten Hartmann (www.th23.net)
* @copyright (c) 2018-2021 ZWYang Limited <https://www.postgraduate.top>
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
* 
*/


$(function(){  
    $(".thumbnail").click(function(){  
        var _this = $(this); //give the thumbnail parentnode to the function imgShow_image
        imgShow_image("#outerdiv_image", "#innerdiv_image", "#bigimg_image", _this);  
    });  
});

$(function(){
    $(".thumbnail").find("a").on("click",function(e){
        e.preventDefault();
    });
});

function imgShow_image(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.find("a").attr("href");//find the real images src(or link or herf) of the thumbnail
    if(src=="" || "undefined"==typeof(src)){
        alert("wrong!");
    }
    else{
    $(bigimg).attr("src", src);
  
    /*get the width and height of the real photoes*/  
    $("<img/>").attr("src", src).on('load',function(){  
        var windowW = $(window).width();
        var windowH = $(window).height();
        var realWidth = this.width;
        var realHeight = this.height;
        var imgWidth, imgHeight;  
        var scale = 0.9;
  
        if(realHeight>windowH*scale) {
            imgHeight = windowH*scale;
            imgWidth = imgHeight/realHeight*realWidth;
            if(imgWidth>windowW*scale) {
                imgWidth = windowW*scale;
            }  
        } else if(realWidth>windowW*scale) {
            imgWidth = windowW*scale;
                        imgHeight = imgWidth/realWidth*realHeight;
        } else {
            imgWidth = realWidth;  
            imgHeight = realHeight;  
        } 
        $(bigimg).css({"width":imgWidth, "height":imgHeight});
          
        var w = (windowW-imgWidth)/2;
        var h = (windowH-imgHeight)/2;
        $(innerdiv).css({"top":h, "left":w});
        $(outerdiv).fadeIn("fast");
        $(bigimg).css({"position":"absolute"});
        $(bigimg).smartZoom('destroy');
        $(bigimg).smartZoom({'containerClass':'zoomableContainer', "top":"0", "left":"0", 'height':imgHeight, 'width':imgWidth});
    });  
      
    $(outerdiv).click(function(){//click again and fadeout(exit)
        $(this).fadeOut("fast");
    });

    $(innerdiv).click(function(){
        return false;
    });
    }  
}
