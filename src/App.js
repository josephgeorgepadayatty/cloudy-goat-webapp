import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const tabs = [
  {
    id: "mulesoft",
    label: "Mulesoft",
    logo: "https://seekvectors.com/files/download/Mulesoft-02.png",
  },
  {
    id: "agentforce",
    label: "Agentforce",
    logo: "https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/09/astroagentforce-fly.png",
  },
  {
    id: "salesforce",
    label: "Salesforce DevOps Center",
    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-salesforce/events/DevOpsCenter.png",
  },
];

// URLs for goat images and GIFs
const goatGif = "https://media1.tenor.com/m/Tm5lZtOaZ0EAAAAC/goatishere.gif";
const goatPic = "https://i.pinimg.com/originals/98/f8/c3/98f8c3eb55543229cd87f26dc80aea61.jpg";

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const [activeTab, setActiveTab] = useState("mulesoft");

  useEffect(() => {
    const tabIds = tabs.map((tab) => tab.id);
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabIds.indexOf(current);
        const nextIndex = (currentIndex + 1) % tabIds.length;
        return tabIds[nextIndex];
      });
    }, 5000); // Switch tab every 5 seconds

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Best in Class Innovation For Cloudy the Goat</h1>
      <div className="tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
          >
            <img src={tab.logo} alt={`${tab.label} logo`} className="tab-logo" /> {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence exitBeforeEnter>
        {activeTab === "mulesoft" && (
          <motion.div
            key="mulesoft"
            className="tab-content"
            role="tabpanel"
            id="mulesoft-panel"
            aria-labelledby="mulesoft-tab"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <MulesoftTab />
          </motion.div>
        )}
        {activeTab === "agentforce" && (
          <motion.div
            key="agentforce"
            className="tab-content"
            role="tabpanel"
            id="agentforce-panel"
            aria-labelledby="agentforce-tab"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <AgentforceTab />
          </motion.div>
        )}
        {activeTab === "salesforce" && (
          <motion.div
            key="salesforce"
            className="tab-content"
            role="tabpanel"
            id="salesforce-panel"
            aria-labelledby="salesforce-tab"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <SalesforceTab />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const MulesoftTab = () => (
  <div className="tab-panel">
    <h2>Mulesoft</h2>
    <motion.img
      src={goatPic}
      alt="Goat on snow"
      className="goat-pic"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    />
    <motion.img
      src={goatGif}
      alt="Goat playful GIF"
      className="goat-gif"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
  </div>
);

const AgentforceTab = () => (
  <div className="tab-panel">
    <h2>Agentforce</h2>
    <motion.img
      src={goatGif}
      alt="Goat playful GIF"
      className="goat-gif"
      animate={{ x: [0, 15, -15, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <motion.img
      src={goatPic}
      alt="Goat on snow"
      className="goat-pic"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    />
  </div>
);

const SalesforceTab = () => (
  <div className="tab-panel">
    <h2>Salesforce DevOps Center</h2>
    <motion.img
      src={goatPic}
      alt="Goat on snow"
      className="goat-pic"
      whileHover={{ scale: 1.1, rotate: 8 }}
      transition={{ type: "spring", stiffness: 120 }}
    />
    <motion.img
      src={goatGif}
      alt="Goat playful GIF"
      className="goat-gif"
      animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 6 }}
    />
  </div>
);

export default App;
