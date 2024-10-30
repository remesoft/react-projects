import React from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

function Insert() {
  const { addRecord, setEditor } = useAppContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await addRecord(data);
    setEditor(null);
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-2">✨</td>
      <td className="px-4 py-2">
        <input
          {...register("name")}
          placeholder="Enter Name"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="text-center px-4 py-2">
        <select {...register("role")} defaultValue="">
          <option value="" disabled>
            Select Role
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </td>
      <td className="px-4 py-2">
        <input
          {...register("email")}
          placeholder="example@domain.com"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="px-4 py-2">
        <input
          {...register("phone")}
          placeholder="+8801700-000000"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="px-4 py-2 flex gap-4">
        <button type="button" onClick={handleSubmit(onSubmit)}>
          💾
        </button>
        <button type="button" onClick={() => setEditor(null)}>
          ❌
        </button>
      </td>
    </tr>
  );
}

export default Insert;
