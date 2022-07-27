import React, { useContext, useState, useEffect } from "react";
import { OrderContext } from "../components/OrderContext";
import { Col } from "react-bootstrap";

const Details = () => {
  const { order, setOrder } = useContext(OrderContext);
  console.log("cart", order);
  const [demo, setDemo] = useState([]);

  const ClearStorage = () => {
    if (typeof window !== "undefined") {
      setOrder([]);
      setDemo([]);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDemo(order);
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <div className="text-center">
        <>
          {demo.length > 0 && (
            <div>
              <h4>you can refresh page</h4>
              <button onClick={ClearStorage}>Clear Order Storage</button>
            </div>
          )}

          <h1 className="text-center">LocalStorage with useContext</h1>
          {demo.map((product, index) => {
            return (
              <Col xl={12} lg={12} key={index + "product"}>
                <div
                  className="card h-100 text-center p-4"
                  onClick={() => Click(product)}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 15)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Details;