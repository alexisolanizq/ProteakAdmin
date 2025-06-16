import PropTypes from "prop-types";
import DataTable from "src/components/common/DataTable";
import useMachineMaterialsService from "src/hooks/models/machine/useMachineMaterialsService";

const MaterialsService = ({ id, onEnd }) => {
  const { columns, materials, isLoading } = useMachineMaterialsService({
    id,
    onEnd,
  });

  return (
    <div className="w-full">
      <DataTable
        hideToolbar
        isRandomID
        data={materials}
        columns={columns}
        isLoading={isLoading}
      />
    </div>
  );
};

MaterialsService.propTypes = {
  onEnd: PropTypes.func,
  // id: PropTypes.any,
  id: PropTypes.number,
};

export default MaterialsService;
