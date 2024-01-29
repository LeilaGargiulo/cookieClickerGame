let score = 0;

document.getElementById("ducky").addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
});