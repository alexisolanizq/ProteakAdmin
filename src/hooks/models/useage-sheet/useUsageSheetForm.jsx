import { useForm } from "react-hook-form";

const useUsageSheetForm = ({ row, isUpdate, onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: row,
    defaultValues: row ?? {},
  });

  const onSubmit = async (body) => {
    if (isUpdate) {
      console.log(body);

      onEnd();
    }
    onEnd();
  };

  return {
    errors,
    control,
    onSubmit,
    handleSubmit,
  };
};

export default useUsageSheetForm;
