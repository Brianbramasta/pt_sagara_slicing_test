import { LoginForm } from "../components/LoginForm";

export const SignInPage: React.FC = () => {
  return (
    <div className="w-full max-w-[420px] mx-auto  px-6 pt-24 pb-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-brand tracking-tighter flex items-center gap-1">
          CEO SUITE
        </h1>
        <p className="text-[7px] text-gray-500 tracking-[0.2em] uppercase mt-1">
          First Choice for Global Workplace
        </p>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book your Room Now!</h2>
        <p className="text-[13px] text-gray-500 font-light">
          Please logged in to flexible and easy access.
        </p>
      </div>

      <LoginForm />
    </div>
  );
};