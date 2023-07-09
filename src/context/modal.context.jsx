import { useState, createContext, useContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalChild, setModalChild] = useState(null);

    const toggleModal = (e) => {
        e.preventDefault();
        setShowModal(prev => !prev);
    }

    const value = {
        showModal, setShowModal, toggleModal, modalChild, setModalChild
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalProvider;