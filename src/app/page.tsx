import BillComponent from "@/components/BillComponent";
import PeopleComponent from "@/components/PeopleComponent";
import TipComponent from "@/components/TipComponent";
import TotalsComponent from "@/components/TotalsComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-8 lg:p-24 text-[24px] font-SpaceMonoBold bg-LightGrayishCyan">
      <h1 className=" text-VeryDarkCyan tracking-[0.3em]">SPLI</h1>
      <h1 className=" text-VeryDarkCyan tracking-[0.3em]">TTER</h1>
      <div className="w-full lg:w-[60vw] bg-white mt-6 lg:mt-[77px] rounded-b-none lg:rounded-b-3xl  rounded-t-3xl grid grid-cols-1 lg:grid-cols-2  p-[28px] gap-5">
        <div className="flex flex-col pr-4 text-VeryDarkCyan justify-between py-2 space-y-5" >
          <BillComponent />
          <TipComponent />
          <PeopleComponent />
        </div>
        <TotalsComponent />
      </div>
    </main>
  );
}
