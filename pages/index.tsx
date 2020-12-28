import { useEffect, useState } from "react";
import { History } from "../components/history";
import Layout from "../components/layout";
import { Login } from "../components/login";
import { parseToken } from "../lib/spotify";

const Home = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = parseToken();
    if (token) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
      setAccessToken(token);
    }
  }, []);

  return (
    <Layout>{accessToken ? <History token={accessToken} /> : <Login />}</Layout>
  );
};

export default Home;
