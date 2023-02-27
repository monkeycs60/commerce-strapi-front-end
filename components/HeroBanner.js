import { HeroBannerStyle } from "@/styles/HeroBannerStyle";

const HeroBanner = () => {
  return (
    <HeroBannerStyle>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Welcome to my blog</h1>
        <p className="hero-banner__text">
          This is a blog about web development and other stuff.
        </p>
      </div>
    </HeroBannerStyle>
  );
};

export default HeroBanner;
