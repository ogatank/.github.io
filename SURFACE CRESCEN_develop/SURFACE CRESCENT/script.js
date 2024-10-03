// 星の追加とアニメーションの制御（必要に応じて追加）
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelector('.stars');
    // 星の数を増やす場合や動きを制御する場合に使用できます
    // 現在はCSSでアニメーションを行っているため、ここでは特に追加のスクリプトは不要です
});

// スムーススクロールの実装（ナビゲーションリンクにスムーススクロールを適用）
const links = document.querySelectorAll('header nav ul li a');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // ヘッダーの高さ分オフセット
                behavior: 'smooth'
            });
        }
    });
}
