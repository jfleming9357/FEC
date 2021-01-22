import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <img draggable src="./logo.png" alt="logo" height="40" width="150" />
        </div>
        <div className="d-flex">
          <button
            onDragLeaveCapture={() => {
              let hiddenAudio = document.getElementById('myAudio');
              hiddenAudio.volume = 0.5;
              hiddenAudio.play();
            }}
            className="btn btn-outline-light"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};
