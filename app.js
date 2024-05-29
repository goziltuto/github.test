$(function() {
    // ここに追記

    /*フェードイン*/
    let flag = 0;

    window.addEventListener('scroll', function(){
        // スクロール量を取得
        const scroll = window.scrollY;
        // 画面の高さを取得
        const windowHeight = window.innerHeight;
        // すべての.boxを取得
        const boxes = document.querySelectorAll('.box');

        boxes.forEach(function(box) {
            // boxまでの高さを取得
            const distanceToBox = box.offsetTop;
            // 下記条件が成り立つときだけboxにis-activeクラスを付与する
            if(scroll + windowHeight > distanceToBox) {
                box.classList.add('is-active');
            }else{
                box.classList.remove('is-active');
            }
        });
    });

    /*ヘッダー固定*/

    var $header = $(".headerflex");
    $(window).on('scroll',function(){
    if( $(window).scrollTop() > 0 ){
        $header.addClass("header_set");
    }else{
        $header.removeClass("header_set");
    }
    });

    /*空室検索モーダル*/

    // 変数に要素を入れる
    var open = $('#button'),
        container = $('.modal-container');

    //開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){	
        container.addClass('active');
        return false;
    });

    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
        if(!$(e.target).closest('.modal-body').length) {
            container.removeClass('active');
        }
    });

    /*ページ内リンク*/

    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -55;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });


    /* ホバー */

    document.getElementById("grid1").addEventListener("mouseenter", function() {
        this.querySelector(":after").style.transform = "scale(1.2)";
    });
    
    document.getElementById("grid1").addEventListener("mouseleave", function() {
        this.querySelector(":after").style.transform = "scale(1)";
    });

    /**/

    // すべての.boxを取得
    const boxes = document.querySelectorAll('.active-animation');

    var pagetop = $('.top-button');
    pagetop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
            
        });

    });
