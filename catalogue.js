// DOM Elements
const navbar = document.getElementById("navbar")
const scrollToTopBtn = document.getElementById("scrollToTop")
const navLinks = document.querySelectorAll(".nav-link")
const filterButtons = document.querySelectorAll(".btn-filter")
const productItems = document.querySelectorAll(".product-item")
const countElement = document.getElementById("count")

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

// Filter functionality
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")
    
    const filter = button.getAttribute("data-filter")
    let visibleCount = 0
    
    productItems.forEach(item => {
      const categories = item.getAttribute("data-category").split(" ")
      
      if (filter === "all" || categories.includes(filter)) {
        item.style.display = "block"
        // Add animation
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "translateY(0)"
        }, 100)
        visibleCount++
      } else {
        item.style.opacity = "0"
        item.style.transform = "translateY(20px)"
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
    
    // Update count
    if (countElement) {
      countElement.textContent = visibleCount
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 150
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

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse)
      bsCollapse.hide()
    }
  })
})

// Initialize product items with transition styles
productItems.forEach(item => {
  item.style.transition = "opacity 0.3s ease, transform 0.3s ease"
})

// Hash navigation for direct links
window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1)
  if (hash) {
    const filterButton = document.querySelector(`[data-filter="${hash}"]`)
    if (filterButton) {
      filterButton.click()
      setTimeout(() => {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }
})

// Console welcome message
console.log("🎉 Catalogue Beldi Concept By Neama - Chargé avec succès!")
console.log("✨ Découvrez toutes nos créations traditionnelles marocaines")
console.log("📱 Contactez-nous sur WhatsApp: +212 661-777571")

// Error handling for missing elements
window.addEventListener("error", (e) => {
  console.warn("Erreur détectée:", e.message)
})

// Accessibility improvements
document.addEventListener("keydown", (e) => {
  // ESC key to close any modals or overlays
  if (e.key === "Escape") {
    // Handle escape key functionality if needed
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