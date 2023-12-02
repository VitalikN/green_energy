import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useDynamicHeight = () => {
  const [dynamicHeight, setDynamicHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = Math.min(window.innerWidth, 1280);

      const w1 = 360,
        h1 = 200;
      const w2 = 768,
        h2 = 348;
      const w3 = 1280,
        h3 = 524;

      let calculatedHeight;

      if (viewportWidth <= w1) {
        calculatedHeight = h1;
      } else if (viewportWidth < w2) {
        calculatedHeight = h1;
      } else if (viewportWidth < w3) {
        calculatedHeight = h2;
      } else {
        calculatedHeight = h3;
      }
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dynamicHeight;
};

export const useElectricityCounter = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return count;
};

export const useCasesSlider = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setSlidesToShow(w <= 767 ? 1 : 2);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { sliderRef, slidesToShow, currentSlide, settings, next, previous };
};

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState("main");

  const handleMenuClick = (section) => {
    setActiveMenu(section);
    closeMenu();
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return { menuOpen, toggleMenu, closeMenu, handleMenuClick, activeMenu };
};
