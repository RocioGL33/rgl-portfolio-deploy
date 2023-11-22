import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Model from "./components/model/Model";
import Qualification from "./components/qualification/Qualification";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Work />
          <Model />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </I18nextProvider>
    </>
  );
};

export default App;
