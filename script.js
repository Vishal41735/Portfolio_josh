const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const CARD_WIDTH = 320; // Adjust if card width changes

// Manual Scroll Buttons
nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: CARD_WIDTH,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -CARD_WIDTH,
    behavior: "smooth"
  });
});

// Auto Scroll Function
let autoScroll = setInterval(() => {
  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1) {
    // Reset to start
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  }
}, 3000); // every 3 seconds

// Pause on mouse enter
slider.addEventListener("mouseenter", () => {
  clearInterval(autoScroll);
});

// Resume on mouse leave
slider.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
    }
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  // Create toast container
  const toast = document.createElement("div");
  toast.className = "form-toast";
  document.body.appendChild(toast);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", false);
      return;
    }

    // Show loading spinner
    const submitBtn = form.querySelector("button");
    submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;
    submitBtn.disabled = true;

    // Simulate delay for submission
    setTimeout(() => {
      showToast("✅ Thank you! Your message has been sent.", true);
      form.reset();
      submitBtn.innerHTML = "SEND MESSAGE";
      submitBtn.disabled = false;
    }, 2000);
  });

  function showToast(message, success = true) {
    toast.textContent = message;
    toast.classList.remove("show", "success", "error");
    toast.classList.add("show", success ? "success" : "error");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});


 
window.addEventListener('DOMContentLoaded', () => {
  const entries = performance.getEntriesByType('navigation');
  const navType = entries[0]?.type;
  if (navType === 'reload') {
    location.replace('index.html');
  }
});
 


