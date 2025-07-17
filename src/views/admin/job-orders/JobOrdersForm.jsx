import PropTypes from "prop-types";
import ButtonsForm from "src/components/common/ButtonsForm";
import DatePickerController from "src/components/form/DatePickerController";
import Form from "src/components/form/Form";
import SelectController from "src/components/form/SelectController";
import TextAreaController from "src/components/form/TextAreaController";
import { jobOrderTypes } from "src/constants/jobOrders";
import { machines } from "src/constants/machines";
import { CONFIRMATION } from "src/constants/options";
import useJobOrderForm from "src/hooks/models/job-order/useJobOrderForm";

const JobOrdersForm = ({
  row = null,
  isUpdate = false,
  onEnd = () => {},
  onCancel = () => {},
}) => {  

  const { handleSubmit, control, isLoadingMutation, onSubmit, errors } =
    useJobOrderForm({ row, isUpdate, onEnd });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} errors={errors}>
      <SelectController
        name="idot"
        control={control}
        rules={[{ required: "Campo requerido" }]}
        label="Tipo de orden de trabajo"
        options={jobOrderTypes}
        optionKey="displayName"
        valueKey="idot"
      />
      <SelectController
        name="dentention"
        control={control}
        rules={[{ required: "Campo requerido" }]}
        label="Trabajo con detención de máquina"
        options={CONFIRMATION}
        optionKey="displayName"
      />
      <DatePickerController
        name="fecha_inicio"
        control={control}
        label="Fecha y hora de inicio"
      />
      <DatePickerController
        name="fecha_termino_real"
        control={control}
        label="Fecha y hora estimada de terminación"
      />
      <SelectController
        name="machine"
        control={control}
        rules={[{ required: "Campo requerido" }]}
        label="Máquina"
        options={machines}
      />
      <SelectController
        name="workshop"
        control={control}
        rules={[{ required: "Campo requerido" }]}
        label="Talleres"
        options={machines}
      />
      <SelectController
        name="owner"
        control={control}
        rules={[{ required: "Campo requerido" }]}
        label="Responsable"
        options={machines}
      />

      <TextAreaController
        control={control}
        name="obs"
        label="Descripción"
        rules={[{ required: "Campo requerido" }]}
      />

    </Form>
  );
};

JobOrdersForm.propTypes = {
  row: PropTypes.any,
  isUpdate: PropTypes.bool,
  onEnd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default JobOrdersForm;
