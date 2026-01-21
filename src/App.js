import { motion } from "framer-motion";
import "./App.css";
import heroPoster from "./assests/image.png"; // ✅ ADD IMAGE IMPORT
import mriecqr from "./assests/mriecqr.png";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const slideInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.7 } }
};

/* ================= APP ================= */

export default function App() {
  return (
    <div className="page">
      <Hero />
      <VisionMission />
      <WhyStudyAbroad />
      <Services />
      <Objectives />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <motion.div
        className="hero-left"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
      >
        <h1 className="hero-title">
          YOUR GATEWAY TO <br />
          <span className="hero-highlight">
            INTERNATIONAL <br /> EDUCATION
          </span>
        </h1>

        <p className="hero-subtitle">
          MR International Education Centre (MRIEC) – Global Education Connect
        </p>

        <div className="hero-buttons">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Free Consultation
          </motion.button>

          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Programs
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT IMAGE (UNCHANGED) */}
      <motion.div
        className="hero-right"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-image-wrapper" whileHover={{ scale: 1.03 }}>
          <img
            src={heroPoster}
            alt="MR International Education Centre"
            className="hero-image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ================= SECTION WRAPPER ================= */

function Section({ title, children, alt }) {
  return (
    <motion.section
      className={alt ? "section alt" : "section"}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="section-title" variants={fadeUp}>
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

/* ================= CONTENT ================= */

function VisionMission() {
  return (
    <Section title="Our Vision & Mission">
      <div className="card-grid">
        {[
          "Create lasting global academic partnerships",
          "Transform students into confident global professionals"
        ].map((text, i) => (
          <motion.div key={i} className="card" variants={scaleIn}>
            <div className="card-number">{i + 1}</div>
            {text}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WhyStudyAbroad() {
  return (
    <Section title="Why Study Abroad?" alt>
      <div className="points-grid">
        {[
          "International Exposure",
          "Enhanced Career Prospects",
          "World-Class Education",
          "Multicultural Experience",
          "Personal Development",
          "Research Excellence"
        ].map((text, i) => (
          <motion.div key={i} className="point-box" variants={rotateIn}>
            <span className="point-number">{String(i + 1).padStart(2, "0")}</span>
            {text}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section title="Our Services">
      <div className="services-grid">
        {[
          "Test Preparation",
          "University Selection",
          "Application Support",
          "Document Writing",
          "Visa Assistance",
          "Student Support"
        ].map((title, i) => (
          <motion.div key={i} className="service-card" variants={slideInUp}>
            <div className="service-number">{i + 1}</div>
            {title}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Objectives() {
  return (
    <Section title="Our Objectives" alt>
      <div className="points-grid">
        {[
          "Global University Network",
          "Dual Degree Programs",
          "Research Initiatives",
          "Internship Opportunities",
          "Exchange Programs"
        ].map((text, i) => (
          <motion.div key={i} className="point-box" variants={fadeUp}>
            {/* <span className="point-number">{String(i + 1).padStart(2, "0")}</span> */}
            {text}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section title="Our Process">
      <div className="card-grid">
        {[
          "Career Counseling",
          "University Shortlisting",
          "Application Submission",
          "Visa Preparation",
          "Pre-Departure Training",
          "Graduate Support"
        ].map((step, i) => (
          <motion.div key={i} className="card" variants={scaleIn}>
            {/* <div className="process-step">{i + 1}</div> */}
            <strong className="step-label">Step {i + 1}</strong>
            <p>{step}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <motion.section
      className="stats"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {[
        ["1000+", "Students Placed"],
        ["50+", "Partner Universities"],
        ["15+", "Countries Covered"],
        ["98%", "Success Rate"]
      ].map(([value, label], i) => (
        <motion.div key={i} className="stat-box" variants={slideInUp}>
          <h3>{value}</h3>
          <p>{label}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}

function CTA() {
  return (
    <motion.section
      className="cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Begin Your International Education Journey</h2>
      <p>Connect with our expert counselors today for personalized guidance</p>

      {/* QR + Button Wrapper */}
      <div className="cta-actions">
        {/* QR CODE */}
        <motion.div
          className="cta-qr"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={mriecqr}
            alt="Scan to Contact MRIEC"
            className="qr-image"
          />
          <span className="qr-text">Scan for Quick Registration</span>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Schedule Consultation
        </motion.button>
      </div>
    </motion.section>
  );
}


function Footer() {
  return (
    <footer className="footer">
      © 2026 MR International Education Centre
    </footer>
  );
}
