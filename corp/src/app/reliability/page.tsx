import Hero from "@/components/hero";
import reliabilityImg from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="welding"
      title="We serve high reliability hosting"
    />
  );
}
