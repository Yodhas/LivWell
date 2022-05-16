import ResponsiveAppBar from "./ResponsiveAppBar";
import Carousels from "./Carousels";
import Search from "./Search";
import CardsNew from "./CardsNew";
import Testimonials from "./Testimonialss";
import Info from "./Info";
import Footer from "./Footer_Home";
import OwlCarousel from "react-owl-carousel";

function HomePage() {
  return (
    <>
      <ResponsiveAppBar />
      <Carousels />
      <Search />
      <OwlCarousel
        className="featured-carousel owl-carousel"
        items={3}
        loop
        autoplay={true}
        autoplayTimeout={5000}
        margin={20}
        nav>
        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />

        <CardsNew
          propertyName="LOTUS 802, SHIV ELITE"
          type="3 BHK Flat."
          owner="Mr. Mihir Patwari."
          price="10,000/-"
        />
      </OwlCarousel>
      <Testimonials name="Ashutosh" />
      <Info />
      <Footer />
    </>
  );
}

export default HomePage;
