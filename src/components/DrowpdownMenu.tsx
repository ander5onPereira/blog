import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Modal from "./Modal";
import Link from "next/link";

function DropdownMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    toggleMenu();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handlerExcluir = () => {
    closeModal();
  };

  return (
    <>
      <div className="relative">
        <button onClick={toggleMenu}>
          <IoIosMenu fontSize="28" color="#fff" />
        </button>
        {menuVisible && (
          <ul className="absolute z-10 mt-2 py-1 w-32 bg-white border border-gray-300 rounded shadow-lg right-0">
            <li>
              <Link
                href={{
                  pathname: `/posts/edit`,
                  query: { title: "Editar" },
                }}
                className="flex justify-center px-4 py-2 hover:bg-gray-100">
                Editar
              </Link>
            </li>
            <li>
              <button
                onClick={openModal}
                className="flex justify-center px-4 py-2 hover:bg-gray-100 w-full">
                Excluir
              </button>
            </li>
          </ul>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} title="">
        <div className="mt-5">
          <p className="px-5 pb-5  h-36 flex items-center justify-center w-72 font-medium text-lg">
            Deseja excluir esse post?
          </p>

          <button
            onClick={handlerExcluir}
            className="bg-violet-800 hover:bg-violet-900 w-full h-10 rounded-b-lg text-white text-lg">
            Excluir
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DropdownMenu;
