import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import mainLogo from "./media/mainLogo.png";

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
    }, 15000); // Switch tab every 5 seconds

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
    <div className="app-container">
        <img
      src={mainLogo}
      alt="Cloudy the Goat Logo"
      className="corner-logo"
    />
      <h1 className="app-title">GREATEST OF ALL TECH</h1>
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
    <motion.video
      src={require("./media/Mulesoft Video.mp4")}
      className="mulesoft-video"
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
);

const AgentforceTab = () => (
  <div className="tab-panel">
    <h2>Agentforce</h2>
    <motion.video
      src={require("./media/Agentforce Video.mp4")}
      className="agentforce-video"
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
);

const SalesforceTab = () => (
  <div className="tab-panel">
    <h2>Salesforce DevOps Center</h2>
    <motion.video
      src={require("./media/Devops Video.mp4")}
      className="salesforce-video"
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
);


export default App;
