import FeatureImage from "../components/FeatureImage/FeatureImage";
import Header from "../components/Header/Header";
import HomeNavigation from "../components/HomeNavigation/HomeNavigation";



export default function Home() {
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <FeatureImage />
        <HomeNavigation />
      </main>
    </div>
  );
}
