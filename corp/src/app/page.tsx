import Hero from "@/components/hero";
import heroImg from "../../public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={heroImg}
      imgAlt="car factory"
      title="Proffesional Cloud Hosting"
    />
  );
}
