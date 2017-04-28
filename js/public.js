/**
 * Created by userliang on 2017/4/13.
 */

//商品列表页面
(function(){
    $(function(){
        //点击斤的规格 变色
        $('.jin').on('click',function(){
            //alert('1111111')
            $(this).css('border-color','#dd137b').siblings().css('border-color','#cccccc');
            $(this).css('color','#dd137b').siblings().css('color','#999999');


            $(this).each(function(i,v){
                console.log(v)
                if( $(v).hasClass('jin1') ) {
                    $('.htm').val(5)
                }
                if( $(v).hasClass('jin2') ) {
                    $('.htm').val(10)
                }
                if( $(v).hasClass('jin3') ) {
                    $('.htm').val(15)
                }
            })
    })

//实现点击不同斤数价格改变
        function change(str,priceOne,priceTwo){
            $(str).click(function(){
                $('.word1').html(priceOne);
                $('.word2').html(priceTwo);
            })
        }
        change('.jin1',23.9,25);
        change('.jin2',27.9,22);
        change('.jin3',29.9,20);

//实现点击中间数字改变
        function sameTime(){
            var num;
            $('.add').click(function(){
                num = $(this).parent().children('input').val();
                num = parseInt(num) + 1;
                $(this).parent().children('input').val(num);
                $('#sp').html(num);
            });
            $('.subtrack').click(function(){
                num = $(this).parent().children('input').val();
                num = num-1;
                $(this).parent().children('input').val(num);
                $('#sp').html(num);
            });
        }
        sameTime();

        //点击取消弹出框消失
        $('.cancel').click(function(){
            $('.popup').css('display','none');
        })
        //点击购物车弹出弹出层
        $('.gou').click(function(){
            $('.popup').css('display','block');
        })

        $('.in-car').click(function(){

            $('#animat').animate({
                'width' : '0px',
                    'height' : '0px',
                    'left' : '0px',
                'bottom' : '-300px'
            },500,function(){
                $('.popup').css('display','none');
            })
        })
        //可移动的购物车
        function move(){
            //var box = $('#car');
            var winWidth = window.innerWidth;
            var winHeight = window.innerHeight;
            var top = $('#tu').offset().top;
            //console.log(top)
            var endTouchY = top;
            var endTouchX = 0;

            $('#car').on('touchmove', function(ev){
                    ev.preventDefault();
                    var ev = ev.touches[0];
                    $('#car').css({
                        'top' : (ev.pageY-35) + 'px',
                        'left' : (ev.pageX-35)+'px'
                    });
                    endTouchX = ev.pageX;
                    endTouchY = ev.pageY;
                });
            $('#car').on('touchend', function(ev){
                    this.touchmove = null;
                    this.touchend = null;
                    //var x = (endTouchX-35 )>0?(endTouchX-35 ):0;
                    //var y = (endTouchY-35 )>0?(endTouchY-35 ):0;
                    if( endTouchX-35 <= 0 ){
                        var x = -35;
                    }else if( endTouchX-35 >= window.screen.width  ){
                        var x = window.screen.width + 35;
                    }else{
                        var x = endTouchX-35;
                    }
                    if( endTouchY-35 <= 0 ){
                        var y = -35;
                    }else if( endTouchY-35 >= window.screen.height ){
                        var y = window.screen.height + 35;
                    }else{
                        var y = endTouchY-35;
                    }
                    x = (x>(winWidth-70))?(winWidth-35):x;
                    y = (y>(winHeight-70))?(winHeight-35):y;
                    $('#car').css({
                        'left' : x + 'px',
                        'top' : y + 'px'
                    });
                });
        }
        move();
    })
})()
