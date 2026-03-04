document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".openbtn");
    const gNav = document.getElementById("g-nav");
    const hasChild = document.querySelector(".has-child");
    const touchBtn = document.querySelector(".touch-btn");
    const chevron = touchBtn.querySelector(".chevron"); // アイコンの取得
    const dropdown = hasChild.querySelector(".dropdown");

    // ハンバーガーメニューの開閉
    openBtn.addEventListener("click", () => {
        openBtn.classList.toggle("open");
        gNav.classList.toggle("open");
    });

    // ドロップダウンメニューの開閉
    touchBtn.addEventListener("click", (e) => {
        e.preventDefault(); // ボタンのデフォルト動作を無効化
        const isOpen = hasChild.classList.toggle("open");

        // アイコンの向きを変更
        if (isOpen) {
            chevron.style.transform = "rotate(180deg)"; // 「△」を表示
            hasChild.style.height = `${touchBtn.offsetHeight + dropdown.scrollHeight}px`;
        } else {
            chevron.style.transform = "rotate(0deg)"; // 「▽」を表示
            hasChild.style.height = `${touchBtn.offsetHeight}px`;
        }
    });

    // ドロップダウンメニュー内のリンク選択時にハンバーガーメニューを閉じる
    dropdown.addEventListener("click", (e) => {
        if (e.target.tagName === "A") { // クリックされた要素がリンクの場合
            openBtn.classList.remove("open"); // ハンバーガーメニューを閉じる
            gNav.classList.remove("open");
        }
    });

    // 初期化
    hasChild.style.height = `${touchBtn.offsetHeight}px`;
});
