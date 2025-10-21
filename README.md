# 🎯 Fahad-HNG13-Profile-Card - Complete Project

A comprehensive multi-page portfolio project built with **vanilla HTML, CSS, and JavaScript**.  
Features a profile card (**Stage 0**), contact form (**Stage 1**), and about page (**Stage 1**) — all fully accessible and responsive.

---

## 📚 Project Stages

### **Stage 0: Profile Card ✅**
- Professional profile card with avatar, bio, and social links  
- Real-time timestamp display  
- Font Awesome icons integration  
- Fully accessible and responsive  

### **Stage 1: Extended Pages 🚀**
- **Contact Us Page:** Form validation with real-time feedback  
- **About Me Page:** Reflective sections about goals, confidence areas, and future self  
- **Navigation:** Consistent site navigation across all pages  
- **Enhanced Styling:** Professional, minimalist design system  

---

## ✨ Key Features

### **All Stages**
- 🧩 Fully Testable — All elements include proper `data-testid` attributes  
- 🏗️ Semantic HTML — Accessibility-first approach using HTML5 tags  
- 📱 Responsive Design — Mobile-first with tablet and desktop optimizations  
- ⌨️ Keyboard Accessible — Full keyboard navigation and focus states  
- 🎨 Modern Styling — Silver, gray, and light blue minimalist palette  
- 🌐 Font Awesome Icons — Clean, icon-based UI elements  
- 🧠 Zero Dependencies — Pure vanilla JavaScript  
- ♿ ARIA Support — Proper labels, roles, and associations  

### **Stage 1 Additions**
- ✅ Real-time form validation  
- ⚠️ Field-specific error messages  
- 🎉 Success state with visual confirmation  
- 🧭 Site-wide navigation  
- 📘 Reflective About page content  

---

## 🚀 Quick Start

### **Installation**
```bash
# Create project folder
mkdir Fahad-HNG13-Profile-Card
cd Fahad-HNG13-Profile-Card


Create the following files:
index.html          (Profile card - Stage 0)
contact.html        (Contact page - Stage 1)
about.html          (About page - Stage 1)
style.css           (Main styles - Stage 0)
pages.css           (Page styles - Stage 1)
script.js           (Profile script - Stage 0)
pages.js            (Form script - Stage 1)
Copy the respective content into each file, then open index.html in your browser — that’s it! 🎉

Fahad-HNG13-Profile-Card/
├── index.html          # Profile card (Stage 0)
├── contact.html        # Contact us form (Stage 1)
├── about.html          # About me page (Stage 1)
├── style.css           # Main styling (Stage 0)
├── pages.css           # Page styling (Stage 1)
├── script.js           # Profile script (Stage 0)
├── pages.js            # Form validation (Stage 1)
├── Avatar.jpg          # Your profile image
└── README.md           # This file

🎨 Color Palette

| Element        | Color     | Description  |
| -------------- | --------- | ------------ |
| Background     | `#f0f2f5` | Light Silver |
| Surface        | `#ffffff` | White        |
| Text Primary   | `#1a1d2e` | Dark Gray    |
| Text Secondary | `#5a5f73` | Medium Gray  |
| Borders        | `#b3d9ff` | Light Blue   |
| Border Hover   | `#7eb3d4` | Medium Blue  |
| Accents        | `#8892b0` | Gray Blue    |
| Error          | `#e74c3c` | Red          |
| Success        | `#28a745` | Green        |

📱 Responsive Breakpoints
| Device      | Width           | Layout                                    |
| ----------- | --------------- | ----------------------------------------- |
| **Mobile**  | `< 600px`       | Vertical layout, centered elements        |
| **Tablet**  | `600px - 800px` | Side-by-side layouts                      |
| **Desktop** | `> 800px`       | Max-width containers and enhanced spacing |

🧪 Test IDs Reference
Profile Card (index.html)
data-testid="test-profile-card"
data-testid="test-user-avatar"
data-testid="test-user-name"
data-testid="test-user-bio"
data-testid="test-user-time"
data-testid="test-user-social-links"
data-testid="test-user-social-twitter"
data-testid="test-user-social-github"
data-testid="test-user-social-linkedin"
data-testid="test-user-hobbies"
data-testid="test-user-dislikes"

Contact Page (contact.html)
data-testid="test-contact-page"
data-testid="test-contact-name"
data-testid="test-contact-email"
data-testid="test-contact-subject"
data-testid="test-contact-message"
data-testid="test-contact-submit"
data-testid="test-contact-error-name"
data-testid="test-contact-error-email"
data-testid="test-contact-error-subject"
data-testid="test-contact-error-message"
data-testid="test-contact-success"

About Page (about.html)
data-testid="test-about-page"
data-testid="test-about-bio"
data-testid="test-about-goals"
data-testid="test-about-confidence"
data-testid="test-about-future-note"
data-testid="test-about-extra"

✏️ Customization Guide
Profile Information (index.html)
<h2 data-testid="test-user-name">Your Name</h2>
<img src="your-image.jpg" alt="Profile avatar" data-testid="test-user-avatar">
<p data-testid="test-user-bio">Your bio here...</p>

Contact Form (contact.html)

Update form labels and placeholders

Adjust textarea rows

Modify button text

Validation handled by pages.js

Validation checks:

Required fields

Email format (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

Message min length: 10 chars

Real-time feedback

About Page (about.html)

Update text within each section:

<section data-testid="test-about-bio">...</section>
<section data-testid="test-about-goals">...</section>

Customize Colors

📝 License

This project is part of the Frontend Wizards Challenge.
Feel free to use it as a reference or base for your own projects.