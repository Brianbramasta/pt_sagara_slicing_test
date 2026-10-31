import { LoginForm } from "../components/LoginForm";

export const SignInPage: React.FC = () => {
  return (
    <div className="w-full h-screen max-w-lg mx-auto  px-6 pt-24 pb-12 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center mb-12 shadow-2xl shadow-red-500/20">
        <img src="/images/logo/logo.png" alt="CEO SUITE Logo" className="h-10 shadow-2xl shadow-red-500/20" />
      </div>
      <div className="w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book your Room Now!</h2>
          <p className="text-[13px] text-gray-500 font-light">
            Please logged in to flexible and easy access.
          </p>
        </div>

        <LoginForm />
      </div>
      <div></div>
    </div>
  );
};