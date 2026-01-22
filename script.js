// Scroll Reveal Animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
});

// Icon Step Logic
let currentStep = 1;
function handleIconStep() {
    const icon = document.getElementById('icon-text');
    const msg = document.getElementById('status-msg');

    if (currentStep === 1) {
        icon.innerText = "₹ 4,999"; // Price
        msg.innerText = "Click to Order";
        currentStep = 2;
    } else if (currentStep === 2) {
        icon.innerText = "Order Now"; // Order
        msg.innerText = "One more click to confirm";
        currentStep = 3;
    } else if (currentStep === 3) {
        icon.innerText = "✓ Confirmed"; // Confirm
        icon.parentElement.style.borderColor = "#4CAF50"; // Green for success
        msg.innerText = "Your order is placed!";
        currentStep = 4;
    }
}

function toggleMenu() {
    alert("Multi-option menu clicked!");
}
