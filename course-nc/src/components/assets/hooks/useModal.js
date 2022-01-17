
import { useState } from "react"

export const useModal = (initialValue = false) => {

    const [modalState, setModalState] = useState(initialValue)

    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return [modalState,  openModal, closeModal]
}