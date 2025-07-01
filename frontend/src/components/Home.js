// src/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Master Your Exams with <span className="highlight">NotesNExam</span></h1>
          <p>
            Comprehensive study notes, practice exams, and expert guidance to help you succeed in your academic journey.
          </p>
          <div className="hero-buttons">
            <button className="explore-btn">Explore Courses</button>
            <button className="practice-btn">Practice Now</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose NotesNExam?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">📘</div>
            <h3>Comprehensive Notes</h3>
            <p>
              Detailed, well-organized study materials covering all major subjects and exam patterns.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">📝</div>
            <h3>Practice Exams</h3>
            <p>
              Realistic mock tests with detailed solutions to help you assess your preparation.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Performance Analytics</h3>
            <p>
              Track your progress with detailed analytics and personalized recommendations.
            </p>
          </div>
        </div>
      </section>

   {/* Popular Subjects Section */}
<section className="popular-subjects-section">
  <h2>Popular Subjects</h2>
  <div className="subject-cards">
    <div className="subject-card">
      <div className="subject-icon">
        <i className="fas fa-laptop-code"></i>
      </div>
      <h3>Computer Science</h3>
      <p>200+ Notes | 50+ Exams</p>
    </div>
    <div className="subject-card">
      <div className="subject-icon">
        <i className="fas fa-calculator"></i>
      </div>
      <h3>Mathematics</h3>
      <p>180+ Notes | 45+ Exams</p>
    </div>
    <div className="subject-card">
      <div className="subject-icon">
        <i className="fas fa-flask"></i>
      </div>
      <h3>Science</h3>
      <p>150+ Notes | 40+ Exams</p>
    </div>
    <div className="subject-card">
      <div className="subject-icon">
        <i className="fas fa-university"></i>
      </div>
      <h3>Commerce</h3>
      <p>120+ Notes | 35+ Exams</p>
    </div>
  </div>
  <div className="view-all-btn-container">
    <button className="view-all-btn">View All Subjects</button>
  </div>
</section>


{/* Recent Study Notes Section */}
<section className="recent-notes-section">
  <h2>Recent Study Notes</h2>
  <div className="notes-grid">
    <div className="note-card">
      <h4>Data Structures Overview</h4>
      <p>Key concepts of arrays, stacks, queues, and trees.</p>
    </div>
    <div className="note-card">
      <h4>Calculus Essentials</h4>
      <p>Differentiation and integration basics with examples.</p>
    </div>
    <div className="note-card">
      <h4>Newtonian Mechanics</h4>
      <p>Fundamentals of motion, forces, and energy.</p>
    </div>
  </div>
</section>

      <section className="cta-section">
  <div className="cta-content">
    <h2>Ready to Boost Your Exam Preparation?</h2>
    <p>Join thousands of students acing their exams with NotesNExam!</p>
    <button className="cta-btn">Get Started</button>
  </div>
</section>
<section className="footer-section">
  <div className="footer-container">
    <div className="footer-column brand">
      <div className="footer-logo">
        <div className="logo-circle">N</div>
        <span className="logo-text">NotesNExam</span>
      </div>
      <p>
        Your ultimate companion for academic success with comprehensive study materials and practice exams.
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>

    <div className="footer-column">
        <h4>Quick Links</h4>
        <ul className="clickable">
            <li>Home</li>
            <li>About Us</li>
            <li>Study Notes</li>
            <li>Practice Exams</li>
            <li>Blog</li>
        </ul>
        </div>

        <div className="footer-column">
        <h4>Subjects</h4>
        <ul className="clickable">
            <li>Computer Science</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Commerce</li>
        </ul>
    </div>
    


    <div className="footer-column">
      <h4>Contact Us</h4>
      <ul>
        <li><i className="fas fa-map-marker-alt"></i> 123 Education Street, Learning City, 560001</li>
        <li><i className="fas fa-envelope"></i> support@notesnexam.in</li>
        <li><i className="fas fa-phone"></i> +91 9876543210</li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} NotesNExam. All rights reserved.</p>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
