import HomePage from "@/components/HomePage";
import WhyUs from "@/components/WhyUs";
import landingPage from "@/data/landing-page-data.json";
export default function Home() {
  return (
    <main>
      <HomePage homePage={landingPage.homePage} />
      <WhyUs whyUs={landingPage.whyus} />
    </main>
  );
}
