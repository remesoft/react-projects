import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useContactContext } from "../contexts/contactContext";
import { updateContact } from "../features/contacts/contactsThunks";
import { useDispatch } from "react-redux";

function Edit() {
  const dispatch = useDispatch();
  const { edit, setEdit } = useContactContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (edit) reset(edit);
  }, [edit, reset]);

  const onSubmit = (data) => {
    dispatch(updateContact({ id: edit.id, data }));
    setEdit(null);
  };

  return (
    <tr className="border-b bg-blue-50">
      <td className="px-4 py-2">✨</td>
      <td className="px-4 py-2">
        <input
          type="text"
          placeholder="Enter Name"
          className="focus:outline-none bg-transparent"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </td>
      <td className="px-4 py-2 text-center ">
        <select
          {...register("role", { required: "Role is required" })}
          className="bg-transparent"
        >
          <option value="">Select Status</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        {errors.role && <span>{errors.role.message}</span>}
      </td>
      <td className="px-4 py-2">
        <input
          type="text"
          placeholder="example@domain.com"
          className="focus:outline-none bg-transparent"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </td>
      <td className="px-4 py-2">
        <input
          type="text"
          placeholder="+8801000-000000"
          className="focus:outline-none bg-transparent"
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </td>
      <td className="px-4 py-2 flex gap-4">
        <button onClick={handleSubmit(onSubmit)}>💾</button>
        <button onClick={() => setEdit(null)}>❌</button>
      </td>
    </tr>
  );
}

export default Edit;
