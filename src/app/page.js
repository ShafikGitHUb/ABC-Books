import Banner from "@/components/share/home/Banner";
import DataGet from "@/components/share/home/DataGet";
import Marque from "@/components/share/home/Marque";
import Image from "next/image";



export default async function Home () {
  const res = await fetch("https://abc-books.vercel.app/data.json");
  const data = await res.json();
  return (
  <div>
    <Banner></Banner>
    <Marque data={data}></Marque>
    <DataGet></DataGet>
  </div>
  );
}
