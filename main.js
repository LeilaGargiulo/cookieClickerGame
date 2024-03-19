let score = 0;
let upgradeBought = false;
let clickValue = 1;
let cursorCount = 0;
let cursorUpgradeCost = 500;
let clickUpgradeCost = 500;

document.getElementById("ducky").addEventListener('click', () => {
    if (upgradeBought) {
        score += 10;
    } else {
        score += clickValue;
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

function buyCursorUpgrade() {
    if (score >= cursorUpgradeCost) {
        score -= cursorUpgradeCost;
        cursorCount++;
        cursorUpgradeCost *= 5;
        setInterval(() => {
            score += clickValue;
            document.getElementById('score').textContent = `Score: ${score}`;
        }, 1000);
    }
}

function buyClickUpgrade() {
    if (score >= clickUpgradeCost) {
        score -= clickUpgradeCost;
        clickValue *= 2;
        clickUpgradeCost *= 5;
    }
}
