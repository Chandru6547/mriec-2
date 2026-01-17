import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/* ================= APP ================= */

export default function App() {
  return (
    <div style={styles.page}>
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
    <section style={styles.hero}>
      <motion.div
        style={styles.left}
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
      >
        <h1 style={styles.title}>
          MR International <br />
          <span style={styles.highlight}>Education Centre</span>
        </h1>

        <p style={styles.subtitle}>
          Your Premier Partner for Global Higher Education Excellence
        </p>

        <div style={styles.buttonGroup}>
          <motion.button
            style={styles.primaryBtn}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(22, 66, 125, 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
          </motion.button>

          <motion.button
            style={styles.secondaryBtn}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(22, 66, 125, 0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Programs
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        style={styles.right}
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={styles.imageBox}
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div style={styles.heroText}>Global Education Partnership</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= VISION & MISSION ================= */

function VisionMission() {
  return (
    <motion.section
      style={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.sectionTitle}
        variants={fadeUp}
      >
        Our Vision & Mission
      </motion.h2>

      <div style={styles.cardGrid}>
        {[
          { text: "Create lasting global academic partnerships" },
          { text: "Transform students into confident global professionals" }
        ].map((item, i) => (
          <motion.div
            key={i}
            style={styles.card}
            variants={scaleIn}
            whileHover={{
              y: -10,
              boxShadow: "0 15px 40px rgba(22, 66, 125, 0.12)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              style={styles.cardNumber}
            >
              {i + 1}
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {item.text}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ================= WHY STUDY ABROAD ================= */

function WhyStudyAbroad() {
  return (
    <motion.section
      style={styles.altSection}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.sectionTitle}
        variants={fadeUp}
      >
        Why Study Abroad?
      </motion.h2>

      <div style={styles.pointsGrid}>
        {[
          { text: "International Exposure" },
          { text: "Enhanced Career Prospects" },
          { text: "World-Class Education" },
          { text: "Multicultural Experience" },
          { text: "Personal Development" },
          { text: "Research Excellence" }
        ].map((item, i) => (
          <motion.div
            key={i}
            style={styles.pointBox}
            variants={rotateIn}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 12px 30px rgba(22, 66, 125, 0.1)",
              backgroundColor: "#f8fafb",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              style={styles.pointNumber}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.text}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <motion.section
      style={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.sectionTitle}
        variants={fadeUp}
      >
        Our Services
      </motion.h2>

      <div style={styles.servicesGrid}>
        {[
          { title: "Test Preparation" },
          { title: "University Selection" },
          { title: "Application Support" },
          { title: "Document Writing" },
          { title: "Visa Assistance" },
          { title: "Student Support" }
        ].map((service, i) => (
          <motion.div
            key={i}
            style={styles.serviceCard}
            variants={slideInUp}
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: "0 20px 50px rgba(22, 66, 125, 0.15)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              style={styles.serviceNumber}
            >
              {i + 1}
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {service.title}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ================= OBJECTIVES (FIXED) ================= */

function Objectives() {
  return (
    <motion.section
      style={styles.altSection}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.sectionTitle}
        variants={fadeUp}
      >
        Our Objectives
      </motion.h2>

      <div style={styles.pointsGrid}>
        {[
          { text: "Global University Network" },
          { text: "Dual Degree Programs" },
          { text: "Research Initiatives" },
          { text: "Internship Opportunities" },
          { text: "Exchange Programs" }
        ].map((obj, i) => (
          <motion.div
            key={i}
            style={styles.pointBox}
            variants={fadeUp}
            whileHover={{
              y: -10,
              boxShadow: "0 12px 30px rgba(22, 66, 125, 0.1)",
              backgroundColor: "#f8fafb",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              style={styles.pointNumber}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {obj.text}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ================= PROCESS (FIXED) ================= */

function Process() {
  return (
    <motion.section
      style={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        style={styles.sectionTitle}
        variants={fadeUp}
      >
        Our Process
      </motion.h2>

      <div style={styles.cardGrid}>
        {[
          { step: "Career Counseling" },
          { step: "University Shortlisting" },
          { step: "Application Submission" },
          { step: "Visa Preparation" },
          { step: "Pre-Departure Training" },
          { step: "Graduate Support" }
        ].map((item, i) => (
          <motion.div
            key={i}
            style={styles.card}
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(22, 66, 125, 0.12)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              style={styles.processStep}
            >
              {i + 1}
            </motion.div>
            <motion.strong
              style={styles.stepNumber}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Step {i + 1}
            </motion.strong>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {item.step}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ================= STATS ================= */

function Stats() {
  return (
    <motion.section
      style={styles.statsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {[
        { label: "Students Placed", value: "1000+" },
        { label: "Partner Universities", value: "50+" },
        { label: "Countries Covered", value: "15+" },
        { label: "Success Rate", value: "98%" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          style={styles.statBox}
          variants={slideInUp}
          whileHover={{
            scale: 1.08,
            backgroundColor: "rgba(255,255,255,0.12)",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.h3
            style={styles.statValue}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {stat.value}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </motion.section>
  );
}

/* ================= CTA ================= */

function CTA() {
  return (
    <motion.section
      style={styles.cta}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      <motion.h2
        style={styles.ctaTitle}
        variants={fadeUp}
      >
        Begin Your International Education Journey
      </motion.h2>
      <motion.p
        style={styles.ctaText}
        variants={fadeUp}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Connect with our expert counselors today for personalized guidance
      </motion.p>
      <motion.button
        style={styles.ctaBtn}
        variants={scaleIn}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        Schedule Consultation
      </motion.button>
    </motion.section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        © 2026 MR International Education Centre
      </motion.div>
    </motion.footer>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    fontFamily: "sans-serif",
    background: "#f5f6f8",
    minHeight: "100vh"
  },

  hero: {
    minHeight: "100vh",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 40px",
    display: "flex",
    gap: "80px",
    alignItems: "center",
    background: "linear-gradient(135deg, #142d4a 0%, #1a3a52 100%)",
    color: "#fff",
    borderRadius: "0",
    marginTop: "0",
    marginBottom: "0",
    boxShadow: "none"
  },

  left: { flex: 1 },
  right: { flex: 1, display: "flex", justifyContent: "center" },

  title: {
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "25px",
    textShadow: "none",
    color: "#ffffff"
  },

  highlight: {
    background: "rgba(255, 255, 255, 0.15)",
    padding: "8px 16px",
    borderRadius: "6px",
    backdropFilter: "blur(10px)"
  },

  subtitle: {
    fontSize: "18px",
    color: "rgba(255,255,255,0.9)",
    margin: "25px 0 40px 0",
    lineHeight: "1.6",
    fontWeight: "400"
  },

  buttonGroup: { display: "flex", gap: "16px", flexWrap: "wrap" },

  primaryBtn: {
    background: "#0066cc",
    color: "#fff",
    padding: "16px 36px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 102, 204, 0.3)"
  },

  secondaryBtn: {
    border: "2px solid rgba(255,255,255,0.9)",
    background: "transparent",
    color: "#fff",
    padding: "14px 34px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease"
  },

  imageBox: {
    width: "320px",
    height: "320px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,255,255,0.15)"
  },

  heroEmoji: {
    fontSize: "80px",
    marginBottom: "10px",
    animation: "bounce 2s infinite"
  },

  heroText: {
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "0.5px"
  },

  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "100px 40px",
    borderRadius: "0",
    background: "#fff",
    marginBottom: "0",
    boxShadow: "none"
  },

  altSection: {
    background: "#f5f6f8",
    padding: "100px 40px",
    borderRadius: "0",
    marginBottom: "0"
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "70px",
    color: "#142d4a",
    letterSpacing: "-0.5px"
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px"
  },

  card: {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e7eb",
    lineHeight: "1.7",
    fontSize: "16px",
    color: "#3f4651"
  },

  cardNumber: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#0066cc",
    marginBottom: "15px"
  },

  cardIcon: {
    fontSize: "48px",
    marginBottom: "15px",
    display: "block"
  },

  pointsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  pointBox: {
    background: "#fff",
    padding: "30px 25px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e7eb",
    fontSize: "16px",
    fontWeight: "500",
    color: "#3f4651"
  },

  pointNumber: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#0066cc",
    marginBottom: "12px",
    display: "block"
  },

  pointIcon: {
    fontSize: "44px",
    marginBottom: "12px",
    display: "block"
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  serviceCard: {
    background: "linear-gradient(135deg, #142d4a 0%, #1a3a52 100%)",
    color: "#fff",
    padding: "40px 30px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(20, 45, 74, 0.15)",
    transition: "all 0.3s ease",
    fontSize: "18px",
    fontWeight: "600",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  serviceNumber: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "12px",
    opacity: 0.8
  },

  serviceIcon: {
    fontSize: "48px",
    marginBottom: "15px",
    display: "block"
  },

  processIcon: {
    fontSize: "40px",
    marginBottom: "12px",
    display: "block"
  },

  processStep: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0066cc",
    marginBottom: "12px"
  },

  stepNumber: {
    display: "block",
    color: "#0066cc",
    fontSize: "13px",
    marginBottom: "8px",
    fontWeight: "600"
  },

  statsSection: {
    background: "linear-gradient(135deg, #142d4a 0%, #1a3a52 100%)",
    color: "#fff",
    padding: "100px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "40px",
    textAlign: "center",
    borderRadius: "0",
    margin: "0",
    maxWidth: "100%"
  },

  statBox: {
    padding: "40px 25px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease"
  },

  statEmoji: {
    fontSize: "52px",
    marginBottom: "15px"
  },

  statValue: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#ffffff"
  },

  cta: {
    padding: "100px 40px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0066cc 0%, #004b99 100%)",
    borderRadius: "0",
    margin: "0",
    maxWidth: "100%",
    color: "#fff",
    boxShadow: "none"
  },

  ctaTitle: {
    fontSize: "44px",
    fontWeight: "700",
    marginBottom: "15px",
    letterSpacing: "-0.5px",
    color: "#ffffff"
  },

  ctaText: {
    fontSize: "18px",
    marginBottom: "40px",
    opacity: 0.95,
    fontWeight: "400"
  },

  ctaBtn: {
    background: "#fff",
    color: "#0066cc",
    padding: "16px 40px",
    fontSize: "16px",
    fontWeight: "700",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  },

  footer: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#0d1f2d",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "0"
  }
};
