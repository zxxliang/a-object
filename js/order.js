
(function(){
    $(function(){
       $('.right').on('click',function(){
           $('.submit').css({
               'background' : 'linear-gradient(to right , #cccccc , #999999 )'
           });
            setTimeout(function(){
               $('.submit').css({
                   'background' : 'linear-gradient(to right ,#FF7300 , #FF4B00 )'
               });
           },3000)

       })
    })
})()