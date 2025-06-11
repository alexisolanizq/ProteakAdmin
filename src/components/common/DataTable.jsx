import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import PropTypes from "prop-types";
import useDataGrid from "src/hooks/common/useDataGrid";

const DataTable = ({
  data = [],
  columns = [],
  isLoading,
  filter,
  sorting,
  isRandomID = false,
  rowID = "id",
  withMarginBottom = false,
  ...props
}) => {
  const classNameMB = withMarginBottom ? "mb-16" : "0";
  const { rowsFilter, generateRandom } = useDataGrid({ data });

  return (
    <div className={`w-full ${classNameMB}`}>
      <DataGrid
        sx={{ border: "none" }}
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
          filter: { filterModel: filter },
          sorting,
          columns: {columnVisibilityModel: {state: false}}
        }}
        pagination
        disableRowSelectionOnClick
        disableColumnResize
        // hideFooter
        autoHeight
        showToolbar
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        {...props}
      />
    </div>
  );
};

DataTable.propTypes = {
  filter: PropTypes.object,
  sorting: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
  isRandomID: PropTypes.bool,
  withMarginBottom: PropTypes.bool,
  rowID: PropTypes.string || PropTypes.number,
};

export const commonProperties = {
  flex:1,
  editable: false,
  sortable: true,
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
