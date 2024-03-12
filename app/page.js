import Discount from "@/components/Home/Discount";
import Fashion from "@/components/Home/Fashion";
import LandingPage from "@/components/Home/LandingPage";
import PromoCode from "@/components/Home/PromoCode";
import Trending from "@/components/Home/Trending";

export default function Home() {
  return (
    <>
      <LandingPage />
      <PromoCode />
      <Trending />
      <Fashion />
      <Discount />
    </>
  );
}
