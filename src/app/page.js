
import AllChat from "./all/page";

export default function Home() {
  return (
    <main className="flex">
      <section className="lg:w-[40%] w-full lg:h-full h-[calc(100vh-120px)] dark:bg-slate-900">
      <AllChat/>
      </section>
      <section className='bg-[url("/assets/telegrambg.jpeg")] h-[calc(100vh-120px)] lg:block hidden lg:flex-1 bg-cover'>

      </section>
    </main>
  );
}
