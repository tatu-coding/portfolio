"use strict";

// ハンバーガーメニュー
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
    body.classList.toggle("is-active");
    
});

// loading
const jsLoaderBg = ".js-loader-bg";
const button = document.querySelector(".button");
const closeLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 0,
    direction: 1.1
  });
};

const showLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 1
  });
};

// ロード完了したら
window.onload = () => {
  setTimeout(() => {
    closeLoadingScreen(jsLoaderBg);
  }, 2500);
};


// opening
// ロード完了時に実行する関数
function runAnimation() {
  gsap.timeline()
    .from(".js_copy", {
      duration: 1.0,
      autoAlpha: 0, // 最初の透明な状態から1に変更して表示させる
      x: -300,
    })
    .play(); // アニメーションを実行
}

// 2秒後に実行する
setTimeout(function() {
  // 最初は透明にする
  gsap.set(".js_copy", {
    autoAlpha: 1
  });
  runAnimation();
}, 2500);

