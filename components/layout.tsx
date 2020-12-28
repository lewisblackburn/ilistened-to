import Head from "next/head";
import "../styles/main.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>I Listened To</title>
        <link rel="icon" href="vercel.svg" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
