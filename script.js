// DOM Elements
const navbar = document.getElementById("navbar")
const scrollToTopBtn = document.getElementById("scrollToTop")
const navLinks = document.querySelectorAll(".nav-link")
const scrollIndicator = document.querySelector(".scroll-indicator")

// Navbar scroll effect
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Add scrolled class to navbar
  if (scrollTop > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Show/hide scroll to top button
  if (scrollTop > 300) {
    scrollToTopBtn.classList.add("show")
  } else {
    scrollToTopBtn.classList.remove("show")
  }

  lastScrollTop = scrollTop
})

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section[id]")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Scroll indicator click
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const nextSection = document.querySelector("#nouvelle-collection")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  })
}

// Simple AOS (Animate On Scroll) implementation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate")
    }
  })
}, observerOptions)

// Observe all elements with data-aos attribute
document.querySelectorAll("[data-aos]").forEach((el) => {
  observer.observe(el)
})

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img")
    if (img) {
      // Create lightbox
      const lightbox = document.createElement("div")
      lightbox.className = "lightbox"
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeInUp 0.3s ease-out;
      `

      const lightboxImg = document.createElement("img")
      lightboxImg.src = img.src
      lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      `

      lightbox.appendChild(lightboxImg)
      document.body.appendChild(lightbox)

      // Prevent body scroll
      document.body.style.overflow = "hidden"

      // Close lightbox on click
      lightbox.addEventListener("click", () => {
        document.body.removeChild(lightbox)
        document.body.style.overflow = "auto"
      })
    }
  })
})

// Instagram items click functionality
const instagramItems = document.querySelectorAll(".instagram-item")
instagramItems.forEach((item) => {
  item.addEventListener("click", () => {
    window.open("https://www.instagram.com/beldiconcept_officiel/", "_blank")
  })
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".title-main")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 100)
    }, 500)
  }
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
  // Additional scroll handling if needed
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)

// Loading animation for images
const images = document.querySelectorAll("img")
images.forEach((img) => {
  img.addEventListener("load", () => {
    img.classList.add("loading")
  })
})

// Filter functionality for catalogue
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".btn-filter")
  const productItems = document.querySelectorAll(".product-item")
  const countElement = document.getElementById("count")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filterValue = this.getAttribute("data-filter")
      let visibleCount = 0

      productItems.forEach((item) => {
        const categories = item.getAttribute("data-category")

        if (filterValue === "all" || categories.includes(filterValue)) {
          item.style.display = "block"
          visibleCount++
        } else {
          item.style.display = "none"
        }
      })

      // Update count
      if (countElement) {
        countElement.textContent = visibleCount
      }
    })
  })
})

// Console welcome message
console.log("🎉 Beldi Concept By Neama - Site chargé avec succès!")
console.log("✨ Découvrez nos créations traditionnelles marocaines")
console.log("📱 Contactez-nous sur WhatsApp: +212 661-777571")

// Error handling for missing elements
window.addEventListener("error", (e) => {
  console.warn("Erreur détectée:", e.message)
})

// Accessibility improvements
document.addEventListener("keydown", (e) => {
  // ESC key to close lightbox
  if (e.key === "Escape") {
    const lightbox = document.querySelector(".lightbox")
    if (lightbox) {
      lightbox.click()
    }
  }
})

// Mobile menu close on link click
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap.Collapse // Declare bootstrap variable
      new bsCollapse(navbarCollapse).hide()
    }
  })
})

// Lazy loading for images
const lazyImages = document.querySelectorAll("img[data-src]")
if (lazyImages.length > 0) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}

// Smooth animations for stats counter
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start) + "+"
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + "+"
    }
  }

  updateCounter()
}

// Initialize counter animation when stats come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number")
        statNumbers.forEach((stat) => {
          const text = stat.textContent
          if (text.includes("500")) {
            animateCounter(stat, 500)
          } else if (text.includes("1000")) {
            animateCounter(stat, 1000)
          }
        })
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

const heroStats = document.querySelector(".hero-stats")
if (heroStats) {
  statsObserver.observe(heroStats)
}
