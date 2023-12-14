import { useState } from "react";
import Modal from "./Modal";

function DeleteModal() {
  const [modal, setModal] = useState(false);

  
  return (
    <Modal modal={modal} setModal={setModal} title="Delete" textBtn="Remove" classBtn="w-full">
      <Modal.Body>
          <div className="py-4">Do you sure delete your blog?</div>
      </Modal.Body>
      <Modal.Footer>
          <button onClick={()=> setModal(!modal)} className='btn btn-sm md:btn-md mt-4 md:col-span-2 btn-primary'>No</button>
          <button onClick={()=> setModal(!modal)} className='btn btn-sm md:btn-md mt-4 md:col-span-2 btn-error'>Delete</button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal