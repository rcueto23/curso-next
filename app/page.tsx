import { Navbar } from "@/components"

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl text-slate-900">Hola mundo</h1>
      </main>
    </>
    
  );
}
