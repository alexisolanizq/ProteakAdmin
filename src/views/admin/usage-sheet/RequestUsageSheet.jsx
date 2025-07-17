import ButtonsForm from "src/components/form/ButtonsForm";
import DatePickerController from "src/components/form/DatePickerController";
import Form from "src/components/form/Form";
import useRequestUsageSheet from "src/hooks/models/useage-sheet/useRequestUsageSheet";

const RequestUsageSheet = () => {
  const { control, handleSubmit, onSubmit } = useRequestUsageSheet();

  return (
    <div className="p-4 bg-white mb-4 shadow rounded">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-6">
          <DatePickerController
            name="fecha_inicio"
            control={control}
            label="Fecha de Inicio"
            rules={{ required: "Campo obligatorio" }}
          />
          <DatePickerController
            name="fecha_fin"
            control={control}
            label="Fecha de Fin"
            rules={{ required: "Campo obligatorio" }}
          />
        </div>
        <ButtonsForm withCancel={false} submitText="Consultar" />
      </Form>
    </div>
  );
};

export default RequestUsageSheet;
