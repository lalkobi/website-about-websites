// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const clydeBubble1 = document.querySelector('.clyde-bubble-1');
    const clydeBubble2 = document.querySelector('.clyde-bubble-2');

    let currentBubble = 0;

    function toggleBubbles() {
        // Hide both bubbles initially
        clydeBubble1.classList.add('hidden');
        clydeBubble2.classList.add('hidden');
        clydeBubble1.style.visibility = 'hidden';
        clydeBubble2.style.visibility = 'hidden';
        clydeBubble1.style.opacity = '0';
        clydeBubble2.style.opacity = '0';

        // Show the appropriate bubble
        if (currentBubble === 0) {
            clydeBubble1.classList.remove('hidden');
            clydeBubble1.style.visibility = 'visible';
            clydeBubble1.style.opacity = '1';
            currentBubble = 1;
        } else {
            clydeBubble2.classList.remove('hidden');
            clydeBubble2.style.visibility = 'visible';
            clydeBubble2.style.opacity = '1';
            currentBubble = 0;
        }
    }

    // Set an interval to toggle the bubbles every 4 seconds
    setInterval(toggleBubbles, 4000);
});
