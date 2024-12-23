// *******ドロワーメニュー*******

const JSbutton = document.getElementById("drawerButton");
// 変数JSbuttonを作って、HTMLからid属性drawerButtonが付いている要素を探して、見つけたらJSbuttonに代入（いれる）

const JSmenu = document.getElementById("menu");
// 変数JSmenuを作って、HTMLからid属性menuが付いている要素を探して、見つけたらJSmenuに代入（いれる）

function drawermenu() {
    JSbutton.classList.toggle("close");
    // 変数JSbuttonに対してクラス属性closeをつけ外しする;

    JSmenu.classList.toggle("open");
    // 変数JSmenuに対してクラス属性openをつけ外しする;
}
// 関数drawermenuを作って、処理をまとめておく。
// 今回はボタンを押されたら、クラスのつけ外しが行われるので、クラスのつけ外しを行っている処理をまとめておく
JSbutton.addEventListener("click", drawermenu);
// 変数JSbuttonがクリックされた時にイベントリスナーが動いて、関数drawermenuが実行される

//********  sliderSection  **** ***/

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
        // 自動再生
        delay: 4000, // 1秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// /******/ButtonSecion******/
const jsSection01 = document.getElementById("ButtonSecion");
const jsButton01 = document.getElementById("jsButton01");

function jsChange01() {
    if (jsSection01.classList.contains("spchange")) {
        jsSection01.classList.remove("spchange", "change01");
    } else if (jsSection01.classList.contains("change01")) {
        jsSection01.classList.add("spchange");
    } else {
        jsSection01.classList.toggle("change01");
    }
}
jsButton01.addEventListener("click", jsChange01);

const jsSection02 = document.getElementById("ButtonSecion");
const jsButton02 = document.getElementById("jsButton02");

function jsChange02() {
    if (jsSection02.classList.contains("spchange")) {
        jsSection02.classList.remove("spchange", "change02");
    } else if (jsSection02.classList.contains("change02")) {
        jsSection02.classList.add("spchange");
    } else {
        jsSection02.classList.toggle("change02");
    }
}
jsButton02.addEventListener("click", jsChange02);

const jsSection03 = document.getElementById("ButtonSecion");
const jsButton03 = document.getElementById("jsButton03");

function jsChange03() {
    if (jsSection03.classList.contains("spchange")) {
        jsSection03.classList.remove("spchange", "change03");
    } else if (jsSection03.classList.contains("change03")) {
        jsSection03.classList.add("spchange");
    } else {
        jsSection03.classList.toggle("change03");
    }
}

jsButton03.addEventListener("click", jsChange03);

/******* ScrollSection********/

function siteScroll() {
    let scrollY = window.scrollY;
    const topButton = document.querySelector(".topButton");

    if (scrollY > 200) {
        console.log("ページを200pxスクロールしました！");

        topButton.classList.add("active");
        // window.removeEventListener("scroll", siteScroll);
    } else {
        topButton.classList.remove("active");
    }
}

window.addEventListener("scroll", siteScroll);
