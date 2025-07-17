import useUI from "src/hooks/models/useUI"
import DataTable from "src/components/common/DataTable"
import RightSidebar from "src/components/common/RightSidebar"
import GeneralLayout from "src/components/common/GeneralLayout"
import useDetentions from "src/hooks/models/detention/useDetentions"
import Button from "src/components/common/Button"
// import DetentionIDSelect from "./DetentionIDSelect"

const Detentions = () => {
    const { isOpenRightSidebar, handleClose, visible } = useUI()
    const { machines, isLoadingMachines, detentions, onFetch, columns } = useDetentions()

    const actions = [
        <Button key={1} onClick={() => handleClose()}>
            Equipos
        </Button>,
    ];

    return (
        <GeneralLayout isLoading={isLoadingMachines} isFullWidth title="Detenciones" resumen="Gestiona las operaciones de detención de matricula con los detalles correspondientes." actions={actions}>
            {/* <DetentionIDSelect machines={machines} onChange={onSelectMachine} onSubmit={onFetch} value={machine} /> */}
            {detentions.length !== 0 && (
                <DataTable data={detentions} columns={columns} rowID="idmatri_state" />
            )}
            {
                isOpenRightSidebar && (

                    <RightSidebar isOpen={isOpenRightSidebar} toggle={handleClose} title="Maquinas" visible={visible}>
                        <div className="flex flex-col gap-4">
                            {
                                machines && machines.map((item) => (
                                    <Button isPlainText key={item.id} onClick={() => onFetch(item.idmatri)}>
                                        {item.name}
                                    </Button>
                                ))
                            }
                        </div>
                    </RightSidebar>
                )
            }
        </GeneralLayout>
    )
}

export default Detentions