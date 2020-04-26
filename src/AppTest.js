import React, { Fragment, useEffect, useRef, useState } from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function AppTest() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Fragment>
      <Navbar sticky={isSticky} />
      <Welcome stickyRef={stickyRef} />
    </Fragment>
  );
}

export default AppTest;
