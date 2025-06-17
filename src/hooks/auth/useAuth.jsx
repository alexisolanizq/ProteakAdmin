import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { STORAGE_AUTH } from "src/constants/storage";
import {
  useLoginService,
  useRegisterService,
} from "src/services/auth/authService";
import { isValidAuth } from "src/utils/auth";
import { hashPassword } from "src/utils/sorting";
import { removeStorage } from "src/utils/storage";

const useAuth = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "erick.cruz@icloud.com",
      pass: "Inicio.01",
      passHash: "09defdec0d3c01e494d8ccdca47bcea46778c4ba",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  const loginMutation = useLoginService();
  const registerMutation = useRegisterService();

  const onAuth = async (body) => {
    const passHash = await hashPassword(body.pass);

    const bodyRequest = {
      passHash,
      ...body,
    };

    if (location.pathname === "/auth/register") {
      await registerMutation.mutateAsync(bodyRequest);
      navigate("/");
    } else {
      await loginMutation.mutateAsync(bodyRequest);
      if (isValidAuth) {
        navigate("/");
      }
    }
  };

  const onRestart = () => {
    removeStorage(STORAGE_AUTH);
    navigate('/auth/login')
  };

  const isLoadingMutation = loginMutation.isLoading;

  return {
    errors,
    onAuth,
    control,
    onRestart,
    handleSubmit,
    isLoadingMutation,
  };
};

export default useAuth;
