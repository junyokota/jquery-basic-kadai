$(function() {
     //class属性がbtn要素がクリックされたら
    $('.btn').on('click' , function () {
        //テキストボックス内に出力する
        $('.text-box').val('クリックしました！');
    });
});
