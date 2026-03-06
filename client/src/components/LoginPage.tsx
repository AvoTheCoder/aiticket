import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginResponse = {
  success: boolean;
};

export default function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevents page refresh

    try {
      console.log("Email:", emailInput);
      console.log("Password:", passwordInput);
      console.log("About to fetch...");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      console.log("Fetch returned. Status:", res.status);

      const data: LoginResponse = await res.json();
      console.log("Response JSON:", data);

      if (!res.ok || !data.success) {
        console.log("Login failed");
        setLoginError(true);
      } else {
        console.log("Login successful");
        setLoginError(false);
        navigate("/admin");
      }
    } catch (err) {
      console.error("Fetch crashed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-4xl font-bold bg-[#2c68b7] text-white">
      <h1 className="mb-4">Admin Login</h1>

      <form
        onSubmit={handleLogin}
        className=" flex flex-col justify-end gap-4 p-20 h-96 w-[600px] rounded-3xl bg-white/80 shadow-2xl"
      >
        <input
          type="email"
          placeholder="Email"
          className="border-4 border-black p-2 text-black text-[25px] "
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border-4 border-black p-2 text-black text-[25px]"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        {loginError && (
          <p className="text-red-600 text-lg font-semibold">
            Invalid email or password
          </p>
        )}

        <button
          type="submit"
          className="border border-black hover:bg-sky-300 text-black rounded-xl shadow-xl"
        >
          Log in
        </button>
      </form>
    </div>
  );
}