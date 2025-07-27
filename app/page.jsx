"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [soal, setSoal] = useState([]);

  useEffect(() => {
    fetch("/soal.json").then((res) => res.json()).then(setSoal);
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simulasi CAT JFA</h1>
      <pre>{JSON.stringify(soal.slice(0, 1), null, 2)}</pre>
    </main>
  );
}
