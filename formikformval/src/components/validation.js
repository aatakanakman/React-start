import * as yup from "yup";

const messages = {
  required: "Zorunlu alan",
  email: "Geçerli bir email giriniz.",
  passwordMin: "Parolanız en az 5 karakter olmalı.",
  passwordConfirm: "Paralolar eşleşmiyor.",
};

const validations = yup.object().shape({
  email: yup.string().email(messages.email).required(messages.required),
  password: yup
    .string()
    .min(5, messages.passwordMin)
    .required(messages.required),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], messages.passwordConfirm)
    .required(messages.required),
});

export default validations;
