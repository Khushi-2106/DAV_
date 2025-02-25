import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]")
  const config = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0,
  }

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadImage(entry.target)
        self.unobserve(entry.target)
      }
    })
  }, config)

  images.forEach((image) => {
    observer.observe(image)
  })

  function preloadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
      return
    }
    img.src = src
  }

  // Add interactive charts
  const ctx1 = document.getElementById("cuisineChart").getContext("2d")
  new Chart(ctx1, {
    type: "doughnut",
    data: {
      labels: ["North Indian", "South Indian", "Chinese", "Italian", "Other"],
      datasets: [
        {
          data: [56, 20, 12, 8, 4],
          backgroundColor: ["#ff9f43", "#10ac84", "#ff6b6b", "#48dbfb", "#ff9ff3"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: "#f1f2f6",
          },
        },
        title: {
          display: true,
          text: "Cuisine Preferences",
          color: "#f1f2f6",
          font: {
            size: 18,
          },
        },
      },
    },
  })

  const ctx2 = document.getElementById("flavorChart").getContext("2d")
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Spicy", "Sweet", "Sour", "Salty", "Bitter", "Fruity"],
      datasets: [
        {
          label: "Flavor Preferences",
          data: [68, 15, 7, 5, 3, 2],
          backgroundColor: "#10ac84",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "#f1f2f6",
          },
        },
        x: {
          ticks: {
            color: "#f1f2f6",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#f1f2f6",
          },
        },
        title: {
          display: true,
          text: "Flavor Preferences",
          color: "#f1f2f6",
          font: {
            size: 18,
          },
        },
      },
    },
  })
})

// Add a scroll-to-top button
const scrollToTopBtn = document.createElement("button")
scrollToTopBtn.innerHTML = "↑"
scrollToTopBtn.setAttribute("id", "scrollToTopBtn")
document.body.appendChild(scrollToTopBtn)

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"
  } else {
    scrollToTopBtn.style.display = "none"
  }
}

scrollToTopBtn.onclick = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// Add food emoji animation
function createFoodEmoji() {
  const emoji = document.createElement("div")
  emoji.classList.add("food-emoji")
  emoji.style.left = Math.random() * window.innerWidth + "px"
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s"
  emoji.innerHTML = [
    "🍕",
    "🍔",
    "🍟",
    "🌭",
    "🍿",
    "🧂",
    "🥓",
    "🥚",
    "🍳",
    "🧇",
    "🥞",
    "🧈",
    "🍞",
    "🥐",
    "🥨",
    "🥯",
    "🥖",
    "🧀",
    "🥗",
    "🥙",
    "🥪",
    "🌮",
    "🌯",
    "🍖",
    "🍗",
    "🥩",
    "🍠",
    "🥟",
    "🥠",
    "🥡",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🦪",
    "🍣",
    "🍤",
    "🍥",
    "🥮",
    "🍢",
    "🧆",
    "🥘",
    "🍲",
    "🍝",
    "🥣",
    "🥧",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🧁",
    "🍫",
    "🍬",
    "🍭",
    "🍡",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "☕",
    "🍵",
    "🧃",
    "🥤",
    "🧋",
    "🍶",
    "🍺",
    "🍻",
    "🥂",
    "🍷",
    "🥃",
    "🍸",
    "🍹",
    "🧉",
    "🍾",
  ][Math.floor(Math.random() * 80)]
  document.body.appendChild(emoji)

  setTimeout(() => {
    emoji.remove()
  }, 5000)
}

setInterval(createFoodEmoji, 300)

