import React from "react";
import Button from "../../common/button";
import { useHistory } from "react-router";

const ThankYou = () => {
  const history = useHistory();

  return (
    <div className="no_cart">
      <h3>Thank you for shopping with us!</h3>
      <Button width="300px" onClick={() => history.push("/")}>
        Continue Shopping
      </Button>
    </div>
  );
};

export default ThankYou;
