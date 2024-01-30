let score = 0;
let upgradeBought = false;
document.getElementById("ducky").addEventListener('click', () => {
    if (upgradeBought) {
        score += 10;
    } else {
        score++;
    }
    document.getElementById('score').textContent = `Score: ${score}`;
});
function buyUpgrade() {
    if (score >= 1000000) {
        document.getElementById("ducky").src = "https://tse1.mm.bing.net/th/id/OIG2.sKYcPw0wgDD5je.Jiapn?pid=ImgGn";
        upgradeBought = true;
        setInterval(() => {
            score += 10;
            document.getElementById('score').textContent = `Score: ${score}`;
        }, 1000);
    }
}