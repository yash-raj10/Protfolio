import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className=" bg-violet-300 text-black h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/*Navbar*/}
      <Navbar />
      {/*header*/}
      <section className=" snap-center"></section>
      <Header />
      {/*about*/}
      {/*skills*/}
      {/*projects*/}
      {/*blogs*/}
      {/*contact*/}
      {/*footer*/}
    </div>
  );
}
