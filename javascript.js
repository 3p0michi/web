const Main = document.getElementById('main');

var Links = {
    Home:'<img src="image/3pomichi_web.png">  <img src="image/firstText.png">  <img src="image/3popLogo02.png" width="700"></img>',
    Caracter:'<p>多才多趣味なパラレルVtuber！<br>「三歩歩けば未知の世界」設定迷子の三歩未知です♪<br><br>おさんぽ気分でどこへでも♪<br>望むものなら何にでも！<br><br>ありたいように。思うがままに。<br>設定上書き！明日はだあれ？<br><br><br>それは――、<br>まだ秘密です☆<br></p>',
    Announce:'<img src="announce/an01.png" width="700px"><p>Next Level↑↑✕3pomichi projectによる<br>VTuber合同将棋プロジェクト始動。<br><br>『千手の星も、三歩から～とあるVTuberの将棋修行～』<br><br>将棋バーチャルストリーマー真澤千星と、<br>パラレルVTuber三歩未知による将棋修行が始まります！<br><br>最初の一歩を見逃すな！！<br></p>',
    Attention:'<p class="AnaText"><span class="AnaTitle">＊利用規約＊</span><br>　「三歩未知、及びそこに帰属するコンテンツ群(以後「当該コンテンツ」とする)」について、その二次使用及び二次創作を行う者（以後「利用者」とする）は、本規約に同意したものとみなします。また、利用規約は予告なく変更する場合があります。ご了承ください。<br><br>『二次創作および二次使用』<br>　非商用の活動の範囲内（営利を目的としない同人活動を含む）で利用可能です。同人活動の一環として当該コンテンツの創作物の販売を行う際は、製造原価程度の価格とし、同人流通における慣例的な手段を用いるものとします。<br>（※DL販売・オークションサイトでの販売は、営利を目的としない同人活動の範囲には含まれません。）<br><br>『商用利用』<br>　お問い合わせ下さい。利用規約の範囲を超える当該コンテンツの利用については、事前に別途の利用許諾が必要となります。<br><br>『禁止事項』<br>　次の様な利用は禁止します。<br>・公序良俗に反する表現<br>・特定の信条や宗教、政治的発言<br>・第三者の権利を侵害する利用<br>・無断の転載・二次配布、自作発言<br><br>『トラブルについて』<br>　当該コンテンツの利用したことによって発生した如何なるトラブル・損害・損失についても、当方は一切の責任を負いません。自己責任において利用してください。</p>'
};

$('#gnav a').bind('click',function(e){
    e.preventDefault();

    var Li = $(this).attr('href');

    $('#container').fadeOut(function(){
        Main.innerHTML = Links[Li] ;
        $('#container').fadeIn();
    });

});