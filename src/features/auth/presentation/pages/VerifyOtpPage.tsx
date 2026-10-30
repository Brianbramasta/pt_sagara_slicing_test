export const VerifyOtpPage: React.FC = () => {
  return (
    <div className="w-full max-w-[420px] px-6 pt-24 pb-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-brand tracking-tighter">CEO SUITE</h1>
        <p className="text-[7px] text-gray-500 tracking-[0.2em] uppercase mt-1">
          First Choice for Global Workplace
        </p>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
        <p className="text-[13px] text-gray-500 font-light">
          Enter the OTP code sent to your email.
        </p>
      </div>

      <div className="w-full space-y-4">
        <input
          type="text"
          placeholder="000000"
          className="w-full px-4 py-3 rounded border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-center tracking-[0.3em] text-2xl"
        />
        <button className="w-full bg-brand text-white py-3.5 rounded text-[13px] font-medium hover:bg-brand-dark transition">
          Verify
        </button>
      </div>
    </div>
  );
};