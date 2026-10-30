export const ResetPasswordPage: React.FC = () => {
  return (
    <div className="w-full max-w-[420px] px-6 pt-24 pb-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-brand tracking-tighter">CEO SUITE</h1>
        <p className="text-[7px] text-gray-500 tracking-[0.2em] uppercase mt-1">
          First Choice for Global Workplace
        </p>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>
        <p className="text-[13px] text-gray-500 font-light">
          Enter your email to reset your password.
        </p>
      </div>

      <div className="w-full">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-[13px] text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>
          <button className="w-full bg-brand text-white py-3.5 rounded text-[13px] font-medium hover:bg-brand-dark transition">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};