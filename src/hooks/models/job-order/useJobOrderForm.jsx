import { useForm } from "react-hook-form";
import { useJobOrderAddService } from "src/services/jobOrder/jobOrderService";

const useJobOrderForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: row ?? {},
  });

  const mutation = useJobOrderAddService();

  const onSubmit = async (body) => {
    if (isUpdate) {
      return;
    }

    await mutation.mutateAsync(body);
    onEnd();
  };

  const isLoadingMutation = mutation.isLoading;

  return {
    errors,
    control,
    onSubmit,
    handleSubmit,
    isLoadingMutation,
  };
};

export default useJobOrderForm;
