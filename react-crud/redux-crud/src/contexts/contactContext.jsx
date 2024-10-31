import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [insert, setInsert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");

  const values = { insert, setInsert, edit, setEdit, search, setSearch };
  return (
    <ContactContext.Provider value={values}>{children}</ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
