// DOM Elements
const navbar = document.getElementById("navbar")
const scrollToTopBtn = document.getElementById("scrollToTop")
const navLinks = document.querySelectorAll(".nav-link")
const filterButtons = document.querySelectorAll(".btn-filter")
const productItems = document.querySelectorAll(".product-item")
const countElement = document.getElementById("count")

// Product data with multiple images for carousel
const productData = {
  "caftan-moderne-vert": {
    title: "Caftan Moderne Vert",
    description:
      "Caftan contemporain avec broderies traditionnelles vertes sur fond beige. Cette pièce unique allie l'élégance du style traditionnel marocain avec une touche moderne sophistiquée.",
    badge: "Nouvelle Collection",
    images: ["images/PINK.jpeg", "images/333.jpeg", "images/444.jpeg"],
    features: [
      "Broderie main traditionnelle",
      "Tissu premium haute qualité",
      "Coupe moderne et confortable",
      "Finitions soignées",
      "Disponible sur mesure",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par le Caftan Moderne Vert",
  },
  "robe-traditionnelle-beige": {
    title: "Robe Traditionnelle Beige",
    description:
      "Robe élégante avec motifs verts brodés et ceinture assortie. Un modèle intemporel qui met en valeur la féminité avec grâce et distinction.",
    badge: "Nouvelle Collection",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-26%20at%2013.58.25%20%281%29-7d1e3QKsbEDM0qAfpN0UFTYzlMHV2O.jpeg",
      "images/ChemisebF.jpeg",
      "images/ENSEMBLEB.jpeg",
    ],
    features: [
      "Design unique exclusif",
      "Broderies vertes raffinées",
      "Ceinture assortie incluse",
      "Qualité premium",
      "Coupe flatteuse",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par la Robe Traditionnelle Beige",
  },
  "kimono-brode-olive": {
    title: "Kimono Brodé Olive",
    description:
      "Kimono long avec broderies florales rouges et finitions raffinées. Une pièce d'exception qui combine l'art de la broderie traditionnelle avec un style contemporain.",
    badge: "Coup de Cœur",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-26%20at%2013.58.26%20%282%29-7LQQuzE8lgfdOQoMXkkuJtwpH1aisF.jpeg",
      "images/KIMOONOO MOVE.jpg",
      "images/KIMONOO MOVE.jpeg",
    ],
    features: [
      "Broderies florales rouges",
      "Finitions raffinées",
      "Coupe kimono moderne",
      "Tissu fluide et confortable",
      "Pièce d'exception",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par le Kimono Brodé Olive",
  },
  "veste-chevaux": {
    title: "Veste en Similicuir Brodée Chevaux",
    description:
      "Veste en similicuir brodée en 3D de motifs chevaux. Une pièce unique qui allie modernité et artisanat traditionnel avec des détails brodés exceptionnels.",
    badge: "Nouvelle Collection",
    images: ["images/veste-chevaux.jpeg"],
    features: [
      "Broderie 3D motifs chevaux",
      "Similicuir haute qualité",
      "Design moderne unique",
      "Finitions artisanales",
      "Pièce d'exception",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par la Veste en Similicuir Brodée Chevaux",
  },
  "ensemble-soie": {
    title: "Ensemble en Drap de Soie",
    description:
      "Ensemble élégant en drap de soie de haute qualité. Une création raffinée qui incarne l'élégance et le savoir-faire traditionnel marocain.",
    badge: "Premium",
    images: ["images/ensemble-soie.jpeg"],
    features: [
      "Drap de soie premium",
      "Coupe élégante",
      "Finitions raffinées",
      "Confort exceptionnel",
      "Style intemporel",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par l'Ensemble en Drap de Soie",
  },
  "ensemble-soie-noir": {
    title: "Ensemble Noir en Drap de Soie Brodé",
    description:
      "Ensemble noir en drap de soie brodé, ceinturé d'un nœud orné de fil argenté. Une pièce sophistiquée qui allie élégance et raffinement.",
    badge: "Exclusive",
    images: ["images/ensemble-soie-noir.jpeg"],
    features: [
      "Drap de soie noir premium",
      "Broderies fil argenté",
      "Ceinture avec nœud orné",
      "Design sophistiqué",
      "Pièce exclusive",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par l'Ensemble Noir en Drap de Soie Brodé",
  },
  "robe-lin-brodee": {
    title: "Robe en Lin Brodée",
    description:
      "Robe en lin naturel avec broderies artisanales délicates. Une création qui célèbre l'artisanat traditionnel avec un style contemporain.",
    badge: "Artisanal",
    images: ["images/robe-lin.jpeg"],
    features: [
      "Lin naturel premium",
      "Broderies artisanales",
      "Coupe confortable",
      "Style contemporain",
      "Pièce artisanale",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par la Robe en Lin Brodée",
  },
  "robe-lin-bleue": {
    title: "Robe Longue en Lin Bleu",
    description:
      "Robe longue en lin bleu, ornée de broderies artisanales colorées. Une pièce exceptionnelle qui met en valeur l'art de la broderie traditionnelle marocaine.",
    badge: "Coup de Cœur",
    images: ["images/robe-lin-bleue.jpeg"],
    features: [
      "Lin bleu de qualité",
      "Broderies colorées artisanales",
      "Coupe longue élégante",
      "Artisanat traditionnel",
      "Pièce unique",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par la Robe Longue en Lin Bleu",
  },
  "femme-foulard-jaune": {
    title: "Femme au Foulard Jaune",
    description:
      "Portrait peint à la main d'une femme marocaine, magnifiée par un foulard fleuri et des bijoux traditionnels éclatants. Une œuvre d'art qui célèbre la beauté et la culture marocaine.",
    badge: "Art Traditionnel",
    images: ["images/femme-foulard-jaune.jpeg"],
    features: [
      "Peinture à la main",
      "Art traditionnel marocain",
      "Détails bijoux authentiques",
      "Foulard fleuri coloré",
      "Œuvre d'art unique",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par le Portrait Femme au Foulard Jaune",
  },
  "femme-sourire": {
    title: "Femme au Sourire",
    description:
      "Portrait peint à la main d'une femme marocaine ornée de bijoux traditionnels, symbole de beauté ancestrale. Une œuvre qui capture l'essence de la féminité marocaine.",
    badge: "Art Traditionnel",
    images: ["images/femme-sourire.jpeg"],
    features: [
      "Peinture à la main",
      "Bijoux traditionnels authentiques",
      "Symbole beauté ancestrale",
      "Art marocain authentique",
      "Œuvre d'art précieuse",
    ],
    whatsappText: "Bonjour, je suis intéressé(e) par le Portrait Femme au Sourire",
  },
}

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
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")
    let visibleCount = 0

    productItems.forEach((item) => {
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
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap.Collapse // Declare bootstrap variable
      new bsCollapse(navbarCollapse).hide()
    }
  })
})

// Initialize product items with transition styles
productItems.forEach((item) => {
  item.style.transition = "opacity 0.3s ease, transform 0.3s ease"
})

function openProductModal(productId) {
  const product = productData[productId]
  if (!product) return

  // Update modal content
  document.getElementById("productTitle").textContent = product.title
  document.getElementById("productDescription").textContent = product.description

  // Update badge
  const badgeElement = document.getElementById("productBadge")
  badgeElement.innerHTML = `<span class="badge bg-primary">${product.badge}</span>`

  // Update features
  const featuresElement = document.getElementById("productFeatures")
  featuresElement.innerHTML = product.features
    .map((feature) => `<li class="mb-2"><i class="fas fa-check text-primary me-2"></i>${feature}</li>`)
    .join("")

  // Update WhatsApp link
  const whatsappLink = document.getElementById("whatsappLink")
  whatsappLink.href = `https://api.whatsapp.com/send?phone=212661777571&text=${encodeURIComponent(product.whatsappText)}`

  // Update carousel images
  const carouselImages = document.getElementById("carouselImages")
  const carouselIndicators = document.getElementById("carouselIndicators")

  // Clear existing content
  carouselImages.innerHTML = ""
  carouselIndicators.innerHTML = ""

  // Add images to carousel
  product.images.forEach((image, index) => {
    // Add carousel item
    const carouselItem = document.createElement("div")
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`
    carouselItem.innerHTML = `
      <img src="${image}" class="d-block w-100 product-modal-image" alt="${product.title} - Image ${index + 1}">
    `
    carouselImages.appendChild(carouselItem)

    // Add indicator
    const indicator = document.createElement("button")
    indicator.type = "button"
    indicator.setAttribute("data-bs-target", "#productCarousel")
    indicator.setAttribute("data-bs-slide-to", index.toString())
    indicator.className = index === 0 ? "active" : ""
    indicator.setAttribute("aria-label", `Slide ${index + 1}`)
    if (index === 0) {
      indicator.setAttribute("aria-current", "true")
    }
    carouselIndicators.appendChild(indicator)
  })

  // Show modal
  const modal = new window.bootstrap.Modal(document.getElementById("productModal"))
  modal.show()
}

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
console.log("✨ Découvrez toutes nos créations traditionnelles marocaines - 29 articles disponibles")
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
