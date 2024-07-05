import { AuthModal } from "./authModal/AuthModal";
import EnterOrRegisterAccount from "./shared/enterOrRegisterAccount/EnterOrRegisterAccount";

export default function ModalLoginForm() {
  return (
    <AuthModal>
      <EnterOrRegisterAccount />
    </AuthModal>
  );
}
