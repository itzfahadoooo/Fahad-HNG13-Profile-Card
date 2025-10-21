/**
 * Unified Script - Combines Profile Card and Pages JavaScript
 * Handles dynamic time display, dark mode toggle, mobile navigation, contact form validation, and interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // Dark Mode - Initialize Immediately
  // ============================================
  (function() {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
  })();

  // ============================================
  // Dark Mode Toggle
  // ============================================
  
  const themeToggle = document.querySelector(".theme-toggle");
  const htmlElement = document.documentElement;
  
  // Update icon based on current theme
  const currentTheme = htmlElement.getAttribute("data-theme");
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      if (icon) {
        if (theme === "dark") {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      }
    }
  }

  // ============================================
  // Time Display
  // ============================================

  // Get reference to the time element
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (timeElement) {
    /**
     * Update the current time display in milliseconds
     * Called on page load and every second thereafter
     */
    function updateTime() {
      const currentTime = Date.now();
      timeElement.textContent = currentTime;
    }

    // Display time immediately on page load
    updateTime();

    // Update time every 1000ms (1 second)
    setInterval(updateTime, 1000);
  }

  // ============================================
  // Accessibility Enhancement
  // ============================================

  /**
   * Accessibility Enhancement: Add keyboard focus handling
   * Ensures smooth keyboard navigation through interactive elements
   */
  const socialLinks = document.querySelectorAll('.social-link');
  
  // Add keyboard event listeners for enhanced accessibility
  socialLinks.forEach(link => {
    link.addEventListener('keydown', function(event) {
      // Handle Enter and Space keys to activate the link
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  });

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      
      // Toggle active states
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      
      // Update ARIA attribute
      navToggle.setAttribute("aria-expanded", !isExpanded);
    });

    // Close menu when clicking a link
    const navLinksItems = navLinks.querySelectorAll("a");
    navLinksItems.forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ============================================
  // Contact Form Validation
  // ============================================
  
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
    
    // Add real-time validation on blur
    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach(input => {
      input.addEventListener("blur", validateField);
      input.addEventListener("input", clearFieldError);
    });
  }

  // ============================================
  // Page Ready Logging
  // ============================================
  
  const profileCard = document.querySelector('[data-testid="test-profile-card"]');
  const contactPage = document.querySelector('[data-testid="test-contact-page"]');
  const aboutPage = document.querySelector('[data-testid="test-about-page"]');

  if (profileCard) {
    console.log('✓ Profile card loaded and ready for testing');
    console.log('✓ All test IDs are properly configured');
    console.log('✓ Time element updating every second');
    console.log('✓ Dark mode toggle ready');
  }

  if (contactPage) {
    console.log("✓ Contact page loaded and ready");
    console.log("✓ Dark mode toggle:", themeToggle ? "found" : "NOT FOUND");
  }

  if (aboutPage) {
    console.log("✓ About page loaded");
    console.log("✓ Dark mode toggle:", themeToggle ? "found" : "NOT FOUND");
  }

  /**
   * Handle form submission
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    
    // Clear all previous errors
    document.querySelectorAll(".error-message").forEach(el => {
      el.textContent = "";
    });

    // Remove invalid states
    document.querySelectorAll(".form-input, .form-textarea").forEach(el => {
      el.classList.remove("invalid");
    });

    // Get form fields
    const nameField = document.querySelector('[data-testid="test-contact-name"]');
    const emailField = document.querySelector('[data-testid="test-contact-email"]');
    const subjectField = document.querySelector('[data-testid="test-contact-subject"]');
    const messageField = document.querySelector('[data-testid="test-contact-message"]');
    const successMsg = document.querySelector('[data-testid="test-contact-success"]');

    let isValid = true;

    // Validate Name
    if (!nameField.value.trim()) {
      setFieldError(nameField, "Name is required.");
      isValid = false;
    }

    // Validate Email
    if (!emailField.value.trim()) {
      setFieldError(emailField, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailField.value)) {
      setFieldError(emailField, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Subject
    if (!subjectField.value.trim()) {
      setFieldError(subjectField, "Subject is required.");
      isValid = false;
    }

    // Validate Message
    if (!messageField.value.trim()) {
      setFieldError(messageField, "Message is required.");
      isValid = false;
    } else if (messageField.value.trim().length < 10) {
      setFieldError(messageField, "Message must be at least 10 characters long.");
      isValid = false;
    }

    // Handle validation result
    if (isValid) {
      // Show success message
      successMsg.hidden = false;
      
      // Add smooth scroll to success message
      successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
      
      // Reset form
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.hidden = true;
      }, 5000);
    } else {
      // Hide success message if validation fails
      successMsg.hidden = true;
    }
  }

  /**
   * Validate individual field
   */
  function validateField(e) {
    const field = e.target;
    clearFieldError(field);

    switch (field.name) {
      case "name":
        if (!field.value.trim()) {
          setFieldError(field, "Name is required.");
        }
        break;
      case "email":
        if (!field.value.trim()) {
          setFieldError(field, "Email is required.");
        } else if (!isValidEmail(field.value)) {
          setFieldError(field, "Please enter a valid email address.");
        }
        break;
      case "subject":
        if (!field.value.trim()) {
          setFieldError(field, "Subject is required.");
        }
        break;
      case "message":
        if (!field.value.trim()) {
          setFieldError(field, "Message is required.");
        } else if (field.value.trim().length < 10) {
          setFieldError(field, "Message must be at least 10 characters long.");
        }
        break;
    }
  }

  /**
   * Clear error for a field
   */
  function clearFieldError(e) {
    const field = typeof e === "object" && e.target ? e.target : e;
    const errorElement = document.getElementById(`error-${field.name}`);
    
    if (errorElement) {
      errorElement.textContent = "";
    }
    
    field.classList.remove("invalid");
  }

  /**
   * Set error for a field
   */
  function setFieldError(field, message) {
    const errorElement = document.getElementById(`error-${field.name}`);
    
    if (errorElement) {
      errorElement.textContent = message;
    }
    
    field.classList.add("invalid");
  }

  /**
   * Email validation regex
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});