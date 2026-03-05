import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Hero Section Data
  const heroData = {
    badge: "✦ Optimize Your Weak Brand",
    heading: "Turn Your Weak Brand Into a Digital Authority",
    subheading: "We build websites, design, and LinkedIn presence that boost credibility and attract clients.",
    primaryBtn: "Book Your Free Consultation →",
    secondaryBtn: "View Our Work →",
  };




  return (
    <GlobalContext.Provider value={{ heroData }}>
      {children}
    </GlobalContext.Provider>
  );
};