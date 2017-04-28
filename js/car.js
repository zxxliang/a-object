
(function(){
    $(function(){

        //点击编辑数量消失 出现加减数量
        $('.compile').on('click',function(){
            var htm = $(this).html();
            if( htm === '编辑'){
                $(this).html('完成');
                $('.num').css('display','none');
                $('.number').css('display','block');
                $('.htm').val( $('.final').html() );
            }else{
                $(this).html('编辑');
                $('.number').css('display','none');
                $('.num').css('display','block');
                $('.final').html( $('.htm').val() );
            }
        })

        //实现点击中间数字改变
        function sameTime(){
            var that;
            $('.gou').click(function(){
                //$('.popup').css('display','block');
                $('.popup').animate({

                    'height' : '100% '
                    //"display" : 'visibility'
                },500,function(){
                    //$('#gai').css('display','block');
                })
                //$(this).css('display','none');
                //$(this).next().css('display','block').find('.htm').val(1);
                //getNums();
                that = $(this);
            })
            var num;
            $('.add').click(function(){
                num = $(this).parent().children('input').val();
                //console.log(num)
                num = parseInt(num) + 1;

                $(this).parent().children('input').val(num);
                $('#sp').html(num);
            });
            $('.subtrack').click(function(){
                num = $(this).parent().children('input').val();
                num = num-1;
                if(num<0){
                    num = 0;
                    $(that).css('display','block');
                    $(that).next().css('display','none');
                }
                $(this).parent().children('input').val(num);
                $('#sp').html(num);
            });
        }
        sameTime();
    })
})()