import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { deleteRecord } from "../api/userApi";

function Record() {
  const { records, setRecords, setUser, searchId } = useAppContext();
  const handleDelete = async (id) => {
    try {
      await deleteRecord(id);
      setRecords((prev) => prev.filter((record) => record.id !== id));
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };
  const filteredRecords = records.filter((record) =>
    record.id.toString().toLowerCase().includes(searchId.toLowerCase())
  );
  return (
    <>
      {filteredRecords.length > 0 ? (
        filteredRecords.map((record, index) => (
          <tr className="border-b" key={index}>
            <td className="px-4 py-2">{record.id}</td>
            <td className="px-4 py-2">{record.name}</td>
            <td className="px-4 py-2 text-center">{record.role}</td>
            <td className="px-4 py-2">{record.email}</td>
            <td className="px-4 py-2">{record.phone}</td>
            <td className="px-4 py-2 flex gap-4">
              <button onClick={() => setUser(record)}>✏️</button>
              <button onClick={() => handleDelete(record.id)}>❌</button>
            </td>
          </tr>
        ))
      ) : (
        <tr className="px-4 py-2">
          <td colSpan="6" className="text-center py-4">
            No records found
          </td>
        </tr>
      )}
    </>
  );
}

export default Record;
