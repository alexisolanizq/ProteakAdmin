import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleRightSidebar } from "src/redux/uiSlice"

const useUI = () => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const isOpenRightSidebar = useSelector((state) => state.ui.rightSidebarOpen)


    useEffect(() => {
        if (isOpenRightSidebar) setVisible(true);
    }, [isOpenRightSidebar]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => dispatch(toggleRightSidebar(!isOpenRightSidebar)), 300);
    };

    return {
        visible,
        handleClose,
        isOpenRightSidebar,
        toggleRightSidebar: () => dispatch(toggleRightSidebar())
    }
}

export default useUI