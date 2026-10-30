import { Routes, Route } from 'react-router';
import AppLayout from '../layout/AppLayout';
import ProtectedOutlet from './ProtectedOutlet';
import NotFound from '@/pages/OtherPage/NotFound';
import ReferenceUiPage from '@/pages/ReferenceUiPage';
import { KaryawanPage } from '@/features/karyawan';
import { LandingPage, ProductDetailPage } from '@/features/landing';
import { SignInPage, SignUpPage, VerifyOtpPage, ResetPasswordPage } from '@/features/auth';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/karyawan-demo" element={<KaryawanPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />

      <Route element={<ProtectedOutlet />}>
        <Route element={<AppLayout />}>
          <Route path="/reference-ui" element={<ReferenceUiPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
