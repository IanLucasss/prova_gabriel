"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  function handleLogin() {
    if (email === "" || senha === "") {
      setErro(true);
      return;
    }

    setErro(false);
    router.push("/dashboard");
  }

  return (
    <div className="bg-neutral-900 border border-yellow-500 rounded-xl p-8 w-full max-w-md">
      
      <h1 className="text-yellow-500 text-3xl font-bold text-center mb-6">
        GOLDENWEAR
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 bg-black border border-yellow-500 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full mb-4 p-3 bg-black border border-yellow-500 rounded"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && (
        <p className="text-red-500 text-center mb-4">
          Preencha todos os campos.
        </p>
      )}

      <button
        onClick={handleLogin}
        className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:opacity-80 transition"
      >
        Entrar
      </button>
    </div>
  );
}