import Button from "src/components/common/Button";
import FlexButtons from "src/components/common/FlexButtons";
import DatePickerController from "src/components/form/DatePickerController";
import Form from "src/components/form/Form";
import useRequestUsageSheet from "src/hooks/models/useage-sheet/useRequestUsageSheet";

const RequestUsageSheet = () => {
  const { control, handleSubmit, onSubmit } = useRequestUsageSheet();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mb-10">
      <DatePickerController
        name="fecha_inicio"
        control={control}
        label="Fecha de Inicio"
      />
      <DatePickerController
        name="fecha_fin"
        control={control}
        label="Fecha de Fin"
      />
      <FlexButtons>
        <Button isSubmit >Consultar</Button>
        <Button isPlainText>Nuevo registro</Button>
      </FlexButtons>
    </Form>
  );
};

export default RequestUsageSheet;
