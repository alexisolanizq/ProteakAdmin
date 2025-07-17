import PropTypes from "prop-types";
import ButtonsForm from "src/components/form/ButtonsForm";
import Form from "src/components/form/Form";
import SelectController from "src/components/form/SelectController";

const EquipmentLifeSheetFilters = ({
  control,
  onSubmit,
  machines,
  workshops,
  handleSubmit,
  isLoadingMachines,
  isLoadingWorkshops,
}) => {
  return (
    <div className="p-4 bg-white mb-4 shadow rounded">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <SelectController
            name="matri"
            label="Equipos"
            control={control}
            options={machines}
            isLoading={isLoadingMachines}
          />
          <SelectController
            name="service"
            label="Servicios"
            control={control}
            options={[
              { id: 1, label: "Servicio programado", value: 0 },
              { id: 2, label: "Intervención", value: 1 },
            ]}
            valueKey="value"
            optionKey="label"
            isLoading={isLoadingMachines || isLoadingWorkshops}
          />
          <SelectController
            name="workshop"
            label="Taller"
            control={control}
            options={workshops}
            valueKey="idtaller"
            isLoading={isLoadingWorkshops}
          />
        </div>
        <ButtonsForm withCancel={false} submitText="Consultar" />
      </Form>
    </div>
  );
};

EquipmentLifeSheetFilters.propTypes = {
  control: PropTypes.any,
  onSubmit: PropTypes.func,
  machines: PropTypes.array,
  workshops: PropTypes.array,
  handleSubmit: PropTypes.func,
  isLoadingMachines: PropTypes.bool,
  isLoadingWorkshops: PropTypes.bool,
};

export default EquipmentLifeSheetFilters;
