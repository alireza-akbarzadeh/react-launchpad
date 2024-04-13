import { Portal } from 'components/common/portal';
import { useState } from 'react';

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={toggleModal}>View More</button>
      {isModalOpen && (
        <Portal id="modal-root" elements="p">
          <h2>More Information</h2>
          <button onClick={toggleModal}>Close</button>
        </Portal>
      )}
    </div>
  );
}
