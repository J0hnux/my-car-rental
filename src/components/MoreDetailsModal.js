import "./MoreDetailsModal.scss";

const MoreDetailsModal = () => {
  return (
    <div className="slide-details-modal">
      <div className="detail-modal-container">
        <button className="close-details-modal">X</button>
        <h2>Mercedes Benz</h2>
        <ul>
          <li>From ₱2,000 per hour</li>
          <li>3 passengers</li>
          <li>2022 model</li>
        </ul>
      </div>
    </div>
  );
};

export default MoreDetailsModal;
