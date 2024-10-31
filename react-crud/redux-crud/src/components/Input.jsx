import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createContact } from "../features/contacts/contactsThunks";
import { useContactContext } from "../contexts/contactContext";

function Input() {
  const dispatch = useDispatch();
  const { setInsert } = useContactContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ name: "", role: "", email: "", phone: "" });

  const onSubmit = (data) => {
    dispatch(createContact(data));
    setInsert(false);
  };

  return (
    <>
      <tr className="border-b">
        <td className="px-4 py-2">✨</td>
        <td className="px-4 py-2">
          <input
            type="text"
            placeholder="Enter Name"
            className="focus:outline-none"
            {...register("name")}
          />
        </td>
        <td className="px-4 py-2 text-center">
          <select {...register("role")}>
            <option value="">Select Status</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </td>
        <td className="px-4 py-2">
          <input
            type="text"
            placeholder="example@domain.com"
            className="focus:outline-none"
            {...register("email")}
          />
        </td>
        <td className="px-4 py-2">
          <input
            type="text"
            placeholder="+8801000-000000"
            className="focus:outline-none"
            {...register("phone")}
          />
        </td>

        <td className="px-4 py-2 flex gap-4">
          <button onClick={handleSubmit(onSubmit)}>💾</button>
          <button onClick={() => setInsert(false)}>❌</button>
        </td>
      </tr>
    </>
  );
}

export default Input;
