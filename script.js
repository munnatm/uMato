const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const proposal = document.getElementById('proposal');
const success = document.getElementById('yesPage');
const music = document.getElementById('bgMusic');




noBtn.addEventListener('mouseenter', () => {
    // Get window dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate random coordinates
    // We subtract button size so it doesn't spawn partially off-screen
    const randomX = Math.floor(Math.random() * (screenWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - noBtn.offsetHeight));

    // Apply the new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    proposal.classList.add('hidden');
    success.classList.remove('hidden');
    music.play().catch(error => {
        console.log("Audio play failed, usually due to browser permissions:", error);
    });
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffafcc', '#ffc2d1']
    });
    
})
console.log(yesBtn);