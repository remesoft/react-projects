import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

function Update() {
  const { user, setUser, editRecord } = useAppContext();
  const { register, handleSubmit, setValue } = useForm({ defaultValues: user });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("role", user.role);
      setValue("email", user.email);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    await editRecord(user.id, data);
  };

  return (
    <tr className="border-b bg-gray-50">
      <td className="px-4 py-2">{user.id}</td>
      <td className="px-4 py-2">
        <input
          {...register("name")}
          placeholder="Enter Name"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="px-4 py-2">
        <select {...register("role")}>
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
          placeholder="Enter Email"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="px-4 py-2">
        <input
          {...register("phone")}
          placeholder="Enter Phone"
          className="bg-transparent focus:outline-none"
        />
      </td>
      <td className="px-4 py-2 flex gap-4">
        <button type="button" onClick={handleSubmit(onSubmit)}>
          💾
        </button>
        <button type="button" onClick={() => setUser(null)}>
          ❌
        </button>
      </td>
    </tr>
  );
}

export default Update;
