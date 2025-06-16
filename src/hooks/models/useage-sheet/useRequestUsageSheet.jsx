import { useForm } from "react-hook-form";
import {convertDatesToTimestamps} from "src/hooks/common/convertDateToTimestamps";

const useUsageSheet = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = (body) => {
    const { startTimestamp, endTimestamp } = convertDatesToTimestamps(
      body.fecha_inicio,
      body.fecha_fin
    );
    console.log(startTimestamp, endTimestamp);
    
  };
  

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useUsageSheet;
