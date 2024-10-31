import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  deleteContact,
} from "../features/contacts/contactsThunks";
import { useContactContext } from "../contexts/contactContext";

function Records() {
  const contacts = useSelector((state) => state.user.contacts);
  const { setEdit, search } = useContactContext();
  const dispatch = useDispatch();

  const filtered = contacts.filter((contact) =>
    contact.phone.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (contacts.length) {
    return (
      <>
        {filtered.map((record, index) => (
          <tr className="border-b" key={index}>
            <td className="px-4 py-2">{record.id}</td>
            <td className="px-4 py-2">{record.name}</td>
            <td className="px-4 py-2 text-center">{record.role}</td>
            <td className="px-4 py-2">{record.email}</td>
            <td className="px-4 py-2">{record.phone}</td>
            <td className="px-4 py-2 flex gap-4">
              <button onClick={() => setEdit(record)}>✏️</button>
              <button onClick={() => handleDelete(record.id)}>❌</button>
            </td>
          </tr>
        ))}
      </>
    );
  } else {
    return (
      <tr>
        <td className="px-4 py-2 text-center" colSpan={6}>
          No Record Found
        </td>
      </tr>
    );
  }
}

export default Records;
