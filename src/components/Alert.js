import React from 'react';

function Alert(props) {
  const alert = props.Alert;

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
