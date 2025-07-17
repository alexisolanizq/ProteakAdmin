import { useState } from "react"
import { useDetentionListService } from "src/services/detention/detentionService"
import { useMachineListService } from "src/services/machine/machineService"
import DetentionColumns from "src/views/admin/detentions/DetentionColumns"

const useDetentions = () => {

    const [machine, setMachine] = useState(null)
    const [fetchDetention, setFetchDetention] = useState(false)

    const { data: detentions, isLoading, refetch } = useDetentionListService({ enable: fetchDetention, matri: machine })

    const { data: machines, isLoading: isLoadingMachines } = useMachineListService()

    const columns = DetentionColumns()

    const onSelectMachine = (e) => {
        setMachine(e.target.value)
    }

    const onFetch = async (idmatri) => {
        setMachine(idmatri)
        await refetch()
    }

    return {
        onFetch,
        machine,
        columns,
        machines,
        isLoading,
        detentions,
        onSelectMachine,
        isLoadingMachines,
        setFetchDetention,
    }
}

export default useDetentions