//HTMLドキュメントが読み込み完了したときに出力
$(window).on('load', () => {
console.log('loadイベントが発生しました');
});
//画面をスクロールしたときに出力
$(window).on('scroll', () => {
console.log('scrollイベントが発生しました');
});
