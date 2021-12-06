import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/notFound.css";

export default function NotFound() {
  const location = useLocation();
  return (
    <div className='notFoundCard'>
      <h2>404</h2>
      <p>
        404, no result for <code>{location.pathname}</code>
      </p>
    </div>
  );
}
