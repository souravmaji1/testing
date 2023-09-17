import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

function App() {
  const { t, i18n } = useTranslation();
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t("hello")}</h1>
      <br />
      <div className="flex flex-row items-center justify-between w-screen gap-4"></div>
      
      <Button onClick={() => switchLanguage("en")}>English</Button>
      <Button onClick={() => switchLanguage("fr")}>French</Button>
      <Button onClick={() => switchLanguage("es")}>Spanish</Button>
    </div>
  );
}

export default App;
