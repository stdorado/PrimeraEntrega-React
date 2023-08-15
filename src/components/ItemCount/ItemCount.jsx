import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, setCount }) => {
  const [Count, setLocalCount] = useState(parseInt(initial));

  const Restar = () => {
    if (Count > 1) {
      setLocalCount(Count - 1);
    }
  };

  const Sumar = () => {
    if (Count < stock) {
      setLocalCount(Count + 1);
    }
  };

  useEffect(() => {
    setLocalCount(parseInt(initial));
  }, [initial]);

  useEffect(() => {
    setCount(Count);
  }, [Count, setCount]);

  return (
    <div className="Contador">
      <button className="btn btn-light restar" disabled={Count <= 1} onClick={Restar}>
        -
      </button>
      <span className="text-center numberStock">{Count}</span>
      <button className="btn btn-light sumar" disabled={Count >= stock} onClick={Sumar}>
        +
      </button>
    </div>
  );
};