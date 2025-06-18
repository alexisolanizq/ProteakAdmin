import { useState } from "react";
import { useForm } from "react-hook-form";
import { convertDatesToTimestamps } from "src/hooks/common/convertDateToTimestamps";
import { useUsageSheetService } from "src/services/usage-sheet/usageSheetService";
import { isValid } from "src/utils/values";

const useRequestUsageSheet = () => {
  const [timestamps, setTimestamps] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const { isLoading, refetch } = useUsageSheetService({
    timestamp_start: timestamps?.start,
    timestamp_end: timestamps?.end,
    enable: isValid(timestamps),
  });

  const onSubmit = async (body) => {
    const { start, end } = convertDatesToTimestamps({
      startDate: body.fecha_inicio,
      endDate: body.fecha_fin,
    });

    setTimestamps({
      start,
      end,
    });

    await refetch;
  };

  return {
    errors,
    control,
    onSubmit,
    isLoading,
    handleSubmit,
  };
};

export default useRequestUsageSheet;
