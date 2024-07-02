import { AuthModal } from './authModal/AuthModal';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';

export default function ModalRegisterForm() {
  return (
    <AuthModal>
      Логин
      <EnterOrRegisterAccount link="/" linkText="Увійти" text="Вже маєте акаунт?" />
    </AuthModal>
  );
}
