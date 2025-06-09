import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import PropTypes from "prop-types";
import useDataGrid from "src/hooks/common/useDataGrid";

const DataTable = ({
  data = [],
  columns = [],
  isLoading,
  isRandomID = false,
  rowID = "id",
  ...props
}) => {
  const { rowsFilter, generateRandom } = useDataGrid({ data });

  return (
    <div className="min-h-96">
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={rowsFilter}
        getRowId={(item) => (isRandomID ? generateRandom() : item[rowID])}
        pageSizeOptions={[8, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
              page: 0,
            },
          },
        }}
        pagination
        disableRowSelectionOnClick
        disableColumnResize={false}
        // hideFooter
        showToolbar
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        {...props}
      />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
  isRandomID: PropTypes.bool,
  rowID: PropTypes.string || PropTypes.number,
};

export const commonProperties = {
  editable: false,
  sortable: true,
  flex: 1,
  // minWidth: 200,
  headerAlign: "center",
  align: "center",
};

export const statusProperties = (field = "status") => ({
  field,
  headerName: "Estatus",
  type: "boolean",
  hide: true,
});

export default DataTable;
