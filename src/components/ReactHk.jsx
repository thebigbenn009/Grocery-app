import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ReactHk = () => {
  const {
    register,
    control,
    handleSubmit,
    formState,
    getValues,
    setError,
    setValue,
    watch,
    reset,
  } = useForm();
  const { errors, isSubmitted, isValid, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
    console.log(isValid);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }, [isSubmitSuccessful]);
  const saveDraft = (data) => {
    console.log(getValues());
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="text" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="">address</label>
          <input type="text" {...register("address", { required: true })} />
        </div>
      </div>
      <div>
        <button type="submit">submit</button> <br />
        <button type=" button" onClick={saveDraft}>
          Draft
        </button>
      </div>
    </form>
  );
};

export default ReactHk;
