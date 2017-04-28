/**
 * Created by userliang on 2017/4/14.
 */
(function(){
    $(function(){
        //点击完成按钮，实现样式的改变，图片前面的 圆点隐藏，图片右边的五角星显示

        $('.done').on('click',function(){
            var htm = $(this).html();
            if( htm==='完成'){
                $(this).html('编辑');
                $('.myCollect').addClass('hide');
                $('.all').removeClass('hide');
                $('.font').addClass('hide');
                $('.font').css('fontSize','35px');
                $('.round').removeClass('hide');
                $('.number').css('fontSize','25px');
                $('.left-img').css('marginLeft','5%');
                $('.money').css('marginRight','4rem');
                $('.right-content').css('width','52%');
                $('.delete').removeClass('hide');
            }else{
                $(this).html('完成');
                $('.all').addClass('hide');
                $('.myCollect').removeClass('hide');
                $('.round').addClass('hide');
                $('.font').removeClass('hide');
                $('.font').css('fontSize','30px');
                $('.number').css('fontSize','20px');
                $('.left-img').css('marginLeft','0px');
                $('.money').css('marginRight','5rem');
                $('.right-content').css('width','55%');
                $('.delete').addClass('hide');
            }

        })
        //点击五角星实现颜色变化
        $('.font').on('click',function(){
            $(this).toggleClass('orange');
        })

        //点击删除按钮，弹出提示框
        $('.del').on('click',function(){
            $('.bg').css('display','block');
        })






    })
})()
