import React, { useState } from 'react';
import DocumentPage from './DocumentPage';

const BeenzPointPage = () => {
  const [beenzPoints, setBeenzPoints] = useState(1000);
  const [redemptionStatus, setRedemptionStatus] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);

  const handleDocumentUpload = (pointsToAdd) => {
    setBeenzPoints(beenzPoints + pointsToAdd);
  };

  const redeemReward = (rewardType, pointsRequired) => {
    if (beenzPoints >= pointsRequired) {
      setBeenzPoints(beenzPoints - pointsRequired);
      setRedemptionStatus(`You have successfully redeemed ${rewardType}!`);
      setSelectedReward(null); // Reset selected reward after redemption
    } else {
      setRedemptionStatus(`Insufficient BeenzPoints to redeem ${rewardType}.`);
    }
  };

  const renderRedeemOptions = () => {
    const rewardOptions = [
      { label: 'Redeem Book - "The Psychology of Money"', points: 500 },
      { label: 'Redeem CD - "Spiderman Home Coming"', points: 800 },
      { label: 'Redeem Vacation Trip to Switzerland', points: 1500 },
    ];

    return (
      <div className="card mt-4">
        <div className="card-body">
          <h2 className="card-title">Redeem Reward</h2>
          <p className="card-text">Select a reward to redeem:</p>

          {rewardOptions.map((option, index) => (
            <button
              key={index}
              className="btn btn-success m-1"
              onClick={() => handleRewardClick(option.label, option.points)}
            >
              {`${option.label} (${option.points} BeenzPoints)`}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleRewardClick = (rewardType, pointsRequired) => {
    redeemReward(rewardType, pointsRequired);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Welcome to BeenzPoint</h1>
      <p>Your BeenzPoints: {beenzPoints}</p>
      {redemptionStatus && <p className="alert alert-info">{redemptionStatus}</p>}

      {renderRedeemOptions()}

      <DocumentPage onDocumentUpload={handleDocumentUpload} />
    </div>
  );
};

export default BeenzPointPage;
