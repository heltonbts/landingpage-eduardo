import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import StorySection from "./Section2.tsx";
import { MethodSection } from "./components/Section3.tsx";
import { TestimonialsSection } from "./components/TestimonialsSection.tsx";
import { PricingSection } from "./components/PricingSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <StorySection />
    <MethodSection />
    <TestimonialsSection />
    <PricingSection />
  </StrictMode>
);
