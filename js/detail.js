/**
 * Created by userliang on 2017/4/10.
 */


//实现点击中间数字改变
function change(){

    var num;
    $('.add').click(function(){
        //alert('')
        num = $(this).parent().children('input').val();
        //console.log(num)
        num = parseInt(num) + 1;
        $('.yuan').html(num+'+');
        $(this).parent().children('input').val(num);
    });
    $('.subtrack').click(function(){
        num = $(this).parent().children('input').val();
        num = num-1;
        if(num<0){
            num = 0;
        }
        $('.yuan').html(num+'+');
        $(this).parent().children('input').val(num);
    });

    //console.log(num)

}
change();

$('.htm').change(function(){
    //console.log(1111111)
    $('.yuan').html( $( this ).val() );
});

$('.collect').on('click',function(){
    alert('1111111111')
    $('.font').css('backgroundColor','#ff9900')
})