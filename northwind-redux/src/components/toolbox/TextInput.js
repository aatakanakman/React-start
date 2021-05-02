import React from "react";

//HOOKS
//! Buraya geçilen obje notasyonlı değişkenler, this.props diye aldığımız değerler oluyor.
//! Üst comptan bu isimlerle gelen proplarla eşleşiyor.

const TextInput = ({name, label, onChange, placeHolder, value, error}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0 ) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
            name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></input>
        {/* Error varsa bunu çalıştır. Yoksa zaten ve çalışmayacak*/}
        {error&&<div className = "alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
