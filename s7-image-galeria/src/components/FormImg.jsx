import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex" >
          {" "}
          <input className="form-control me-2" placeholder="Busca Algo :)" type="text" name="inputText" />{" "}

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
