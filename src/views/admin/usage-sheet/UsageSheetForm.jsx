import PropTypes from "prop-types";
import Form from "src/components/form/Form";
import TextFieldController from "src/components/form/TextFieldController";
import useUsageSheetForm from "src/hooks/models/useage-sheet/useUsageSheetForm";

const UsageSheetForm = ({ isUpdate = false, onEnd, row = null, ...props }) => {
  const { control, errors, handleSubmit, onSubmit } = useUsageSheetForm({
    row,
    isUpdate,
    onEnd,
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)} errors={errors} {...props}>
      {/* <Flex gap={20}> */}
      <TextFieldController
        control={control}
        name="matri"
        rules={{ required: "Campo obligatorio" }}
        label="Número de hoja de uso"
        isDisabled
      />
      <TextFieldController
        control={control}
        name="date"
        rules={{ required: "Campo obligatorio" }}
        label="Fecha"
        isDisabled
      />
      <TextFieldController
        control={control}
        name="solicitante"
        label="Solicitante"
      />
      <TextFieldController
        control={control}
        name="tipomision"
        label="Actividad"
      />
      <TextFieldController
        control={control}
        name="medicionHr"
        label="Horómetro"
      />
      <TextFieldController
        control={control}
        name="medicionHrAnt"
        label="Horómetro Anterior"
      />
      <TextFieldController
        control={control}
        name="medicionKm"
        label="Kilometraje"
      />
      <TextFieldController
        control={control}
        name="medicionKmAnt"
        label="Kilometraje Anterior"
      />
      <TextFieldController control={control} name="piloto" label="Operador" />
      <TextFieldController control={control} name="zona" label="Área" />
      <TextFieldController control={control} name="tipouso" label="Turno" />
    </Form>
  );
};

UsageSheetForm.propTypes = {
  row: PropTypes.any,
  onEnd: PropTypes.func,
  isUpdate: PropTypes.bool,
};

export default UsageSheetForm;
