$(function() {
    //id属性change-colorの要素がクリックされたら
    $('#change-color').on('click', function () {
        //文字色が変化する
        $('#target').css('color' , 'blue');
    });

    //id属性change-textの要素がクリックされたら
    $('#change-text').on('click', function () {
        //文字内容が変化する
        $('#target').text('hello');
    });

    //id属性fade-outの要素がクリックされたら
    $('#fade-out').on('click', function () {
        //フェードアウトする
        $('#target').fadeOut();
    });

    //id属性fade-outの要素がクリックされたら
    $('#fade-in').on('click', function () {
        //フェードインする
        $('#target').fadeIn();
    });
});
