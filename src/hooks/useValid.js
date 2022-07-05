import { useEffect, useState } from "react";

export const useValid = ({ submit, formState, validate }) => {
  const [form, setForm] = useState({
    ...formState,
  });

  const [error, setError] = useState({});

  const [isValid, setIsValid] = useState(false);

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
    setError({ ...error, [name]: "" });
    // setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onBlurHandler = ({ target }) => {
    const { name, value } = target;
    if (!value.length) {
      setError({ ...error, [name]: "The field cannot be empty" });
    }
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const { error } = await validate(form);
    setError(error);

    if (!Object.keys(error).length) {
      e.target.reset();
      setIsValid(true);
    }
  };

  useEffect(() => {
    if (!Object.keys(error).length && isValid) submit();
  }, [error]);

  return {
    onChangeHandler,
    onBlurHandler,
    onSubmitHandle,
    error,
    form,
    isValid,
  };
};
