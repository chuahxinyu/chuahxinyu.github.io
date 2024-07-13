import Laptop from "@/components/laptop";

export default function Home() {
  return (
    <main className="flex-1 flex h-full flex-col md:flex-row items-center justify-center container max-gap">
      <div className="prose">
        <h1 className="prose-h1">Lorem Ipsum</h1>
        <p>💻 Fullstack Developer</p>
      </div>
      <div className="max-w-screen">
        <Laptop />
      </div>
    </main>
  );
}
