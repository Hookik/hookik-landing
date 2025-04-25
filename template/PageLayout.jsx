import FootBanner from "@/components/FootBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PageLayout = ({ children, title, description, btnLabel, route, footBanner }) => {
  return (
    <>
      <Navbar />
      {children}
      {footBanner !== false && (
        <FootBanner
          title={title}
          description={description}
          btnLabel={btnLabel}
          route={route}
        />
      )}
      <Footer />
    </>
  );
};

export default PageLayout;
