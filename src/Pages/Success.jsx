import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10); // Countdown starts at 10
  const navigate = useNavigate();

  useEffect(() => {
    // Set up a countdown timer
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // When countdown hits zero, navigate to home
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]); // Effect depends on countdown and navigate

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Success! Your reservation is confirmed!</h1>
        <h2>Redirecting to Home in {countdown} seconds...</h2>
        <Link to="/">
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
