import Hero from "../components/Hero";
import BentoFeatures from "../components/BentoFeatures";
import GithubActivity from "../components/GithubActivity";
import NetworkArchitecture from "../components/NetworkArchitecture";
export default function Home() {
  return (
    <>
      <Hero />
      <GithubActivity />
      <NetworkArchitecture />
      <BentoFeatures />
    </>
  );
}