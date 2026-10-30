import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuthStore";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password, rememberMe });
    const dummyUser = {
      id: "1",
      email: email || "user@example.com",
      name: "Jane Doe",
      fullName: "Jane Doe",
      role: "admin",
    };
    const dummyToken = "dummy-token-for-testing";
    
    localStorage.setItem("access_token", dummyToken);
    localStorage.setItem("refresh_token", "dummy-refresh-token");
    localStorage.setItem("user", JSON.stringify(dummyUser));
    
    login(dummyUser, dummyToken);
    navigate("/");
  };

return (
    <form className="w-full" onSubmit={handleSignIn}>
      <div className="mb-5">
        <label htmlFor="email" className="block text-[13px] text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-gray-300 transition"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block text-[13px] text-gray-700 mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-gray-300 transition pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showPassword ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.169L9.879 14.173a4 4 0 10-2.82-4.898M7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                />
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex items-center justify-center w-4 h-4">
            <input
              type="checkbox"
              className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-brand checked:border-brand cursor-pointer focus:outline-none transition-colors"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <svg
              className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="text-[12px] text-gray-700 group-hover:text-gray-900">
            Remember me
          </span>
        </label>

        <a href="#" className="text-[12px] text-brand hover:text-brand-dark hover:underline transition">
          Forgot Password
        </a>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand text-white py-3.5 rounded text-[13px] font-medium hover:bg-brand-dark transition shadow-sm mb-6"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>

      <div className="text-center text-[12px] text-gray-500">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-brand font-medium hover:underline ml-1">
          Sign Up Here
        </a>
      </div>
    </form>
  );
};