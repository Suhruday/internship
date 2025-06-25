// import React from 'react';

function Admin() {
  return (
  <div>I am admin</div>
  )
}

function Principal() {
  return(
     <div>I am principal</div>
  )
}

function HOD() {
  return (
  <div>I am HOD</div>
  )
}

function Login(prop) {
  if (prop.role == "Principal") {
    return <Principal />;
  } else if (prop.role === "HOD") {
    return <HOD />;
  } else if (prop.role == "Admin") {
    return <Admin />;
  } else {
    return <div>Invalid role</div>;
  }
}

function Faclog() {
  return (
    <div>
      <Login role="HOD" />
    </div>
  );
}

export default Faclog;