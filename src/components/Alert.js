import React from 'react';

function Alert(props) {
  const alert = props.Alert;

  if (alert === null) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      <strong>{alert.type}</strong>: {alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  );
}

export default Alert;
