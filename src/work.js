// Archivo específico para work.html
import './styles/main.css'

// Función de inicialización para work page
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Work page iniciada correctamente')
  
  // Agregar animaciones de entrada
  const animatedElements = document.querySelectorAll('[data-animate]')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, {
    threshold: 0.1
  })
  
  animatedElements.forEach(el => observer.observe(el))
  
  // Manejo básico de botones
  initializeButtons()
  
  // Navegación suave
  initializeSmoothScrolling()
  
  // Inicializar menú mobile
  initializeMobileMenu()
})

// Función para inicializar botones
function initializeButtons() {
  const buttons = document.querySelectorAll('.btn')
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Efecto ripple básico
      const ripple = document.createElement('span')
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      
      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.classList.add('ripple')
      
      this.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
}

// Función para navegación suave
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}

// Función utilitaria para mostrar mensajes
export function showMessage(message, type = 'info') {
  const messageContainer = document.createElement('div')
  messageContainer.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${getMessageClass(type)}`
  messageContainer.textContent = message
  
  document.body.appendChild(messageContainer)
  
  setTimeout(() => {
    messageContainer.classList.add('animate-fade-in')
  }, 100)
  
  setTimeout(() => {
    messageContainer.remove()
  }, 3000)
}

function getMessageClass(type) {
  const classes = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white'
  }
  return classes[type] || classes.info
}

// Función para inicializar el menú mobile
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const menuIcon = document.getElementById('menu-icon')
  const closeIcon = document.getElementById('close-icon')
  
  if (!mobileMenuButton || !mobileMenu) return
  
  mobileMenuButton.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('hidden')
    
    if (isOpen) {
      // Abrir menú
      mobileMenu.classList.remove('hidden')
      menuIcon.classList.add('hidden')
      closeIcon.classList.remove('hidden')
      
      // Agregar animación de entrada
      mobileMenu.style.animation = 'slideDown 0.3s ease-out'
    } else {
      // Cerrar menú
      mobileMenu.style.animation = 'slideUp 0.3s ease-out'
      
      setTimeout(() => {
        mobileMenu.classList.add('hidden')
        menuIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
      }, 300)
    }
  })
  
  // Cerrar menú al hacer clic en un enlace
  const mobileLinks = mobileMenu.querySelectorAll('a')
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.style.animation = 'slideUp 0.3s ease-out'
      
      setTimeout(() => {
        mobileMenu.classList.add('hidden')
        menuIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
      }, 300)
    })
  })
  
  // Cerrar menú al redimensionar la ventana
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) { // lg breakpoint
      mobileMenu.classList.add('hidden')
      menuIcon.classList.remove('hidden')
      closeIcon.classList.add('hidden')
    }
  })
}
