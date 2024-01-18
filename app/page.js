import EventButton from "@/components/EventButton";
import ParticlesBg from "@/components/ParticlesBg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <ParticlesBg />
      <section className="w-full grid content-center h-full z-10 ">
        <EventButton />
        <Link
          href="https://analytics.amplitude.com/share/65a8558434094c6895b5afde4b6f8c15"
          target="_blank"
          className="mt-4 py-6 px-10 w-96 mx-auto text-center font-semibold rounded-xl bg-[#191B1F] border-2 border-[#E8378B]"
        >
          Here you have a link to the chart!
        </Link>
      </section>
    </main>
  );
}
