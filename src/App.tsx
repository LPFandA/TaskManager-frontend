import { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import TestPage from "./pages/TestPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setLoggedIn(true);
  }, []);

  return (
    <div className="min-h-screen">
      {loggedIn ? <TestPage /> : <LoginPage onLogin={setLoggedIn} />}
    </div>
  );
}