import { AuthModal } from './authModal/AuthModal';
import { RegisterForm } from './registerForm/RegisterForm';
import { SocialRegister } from './socialRegister/SocialRegister';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';

export default function ModalRegisterForm() {
  return (
    <AuthModal>
      <SocialRegister />

      <RegisterForm />

      <EnterOrRegisterAccount link="/login" linkText="Увійти" text="Вже маєте акаунт?" />
    </AuthModal>
  );
}
