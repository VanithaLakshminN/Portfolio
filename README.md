# MyPortfolio

A professional full-stack portfolio website built to showcase projects, skills, experience, and qualifications with modern web technologies.

## Overview

MyPortfolio is a comprehensive web application featuring a React frontend and Node.js backend. It displays:
- **About Me**: Career summary and professional introduction
- **Experience**: Internships and training programs
- **Education**: Academic qualifications with institutions and grades
- **Projects**: Showcase of key projects including healthcare app, career growth platform, and eco-friendly navigation
- **Skills**: Technical expertise in languages, tools, and frameworks
- **Achievements**: Certifications and accomplishments
- **Contact Form**: Direct messaging with email notifications

## Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation
- **React Simple Typewriter** - Typewriter effect

### Backend
- **Node.js & Express** - Server and API framework
- **MySQL** - Database
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin request handling
- **Dotenv** - Environment variable management

## Features

✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop  
✅ **Contact Form** - Visitors can send messages that are stored in database and emailed to you  
✅ **Resume Download** - Easy PDF download from the website  
✅ **Smooth Animations** - Professional transitions using Framer Motion  
✅ **Mobile Navigation** - Responsive navbar with smooth scrolling  
✅ **Professional Sections** - Comprehensive portfolio sections with well-organized content  

## Project Structure

```
MyPortfolio/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   └── contactController.js  # Contact form logic
│   ├── models/
│   │   └── contactModel.js       # Database model for contacts
│   ├── routes/
│   │   └── contactRoutes.js      # API routes
│   ├── server.js                 # Express server setup
│   ├── .env.example              # Example environment variables
│   ├── package.json
│   └── .env                      # (Not tracked - create from .env.example)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   └── Navbar.jsx        # Navigation bar
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Experience.jsx
│   │       ├── Education.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Achievements.jsx
│   │       └── Contact.jsx
│   ├── public/
│   │   └── VANITHA_BE_CSE_2026.pdf # Resume PDF
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── resume.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm
- MySQL database

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=MyPortofolio_db
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

5. Start the server:
```bash
node server.js
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5174` (or another port if 5174 is in use)

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Your message here"
    }
    ```
  - Response: `{ message: 'Message sent successfully!' }`

## Email Configuration

To enable email notifications when someone submits the contact form:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Search for "App passwords"
   - Select "Mail" and "Other (custom name)"
   - Copy the 16-character password
4. Update the `EMAIL_PASS` in `.env` with this password (without spaces)

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The build output will be in the `dist/` folder.

## Security

- **Secret Keys**: All sensitive information (.env, API keys, passwords) are excluded from version control via `.gitignore`
- **Environment Variables**: Use `.env.example` as a template to set up your local environment
- Never commit `.env` files to the repository
- All credentials are managed through environment variables

## Database Setup

Create a MySQL database named `MyPortofolio_db` and set up the contacts table:

```sql
CREATE DATABASE MyPortofolio_db;

USE MyPortofolio_db;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contact

- **Email**: vanithalakshmin354@gmail.com
- **GitHub**: [VanithaLakshminN](https://github.com/VanithaLakshminN)
- **LinkedIn**: [Vanitha Lakshmi N](https://www.linkedin.com/in/vanitha-lakshmi-n)

## License

This project is open source and available under the MIT License.

---

**Created by Vanitha Lakshmi N** | CSE Engineer | 2026
