import NewApp from "@/components/home/NewFarm";
import { HomeView } from "@/views/HomeView";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center ">
      <NewApp />
    </main>
  );
}
