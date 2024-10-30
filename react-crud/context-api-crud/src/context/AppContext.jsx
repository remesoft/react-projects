import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} from "../api/userApi";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [editor, setEditor] = useState(null);
  const [user, setUser] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  const totalPages = Math.ceil(records.length / recordsPerPage);
  const paginatedRecords = records.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      const data = await getRecords();
      setRecords(data);
    } catch (error) {
      console.error("Error loading records:", error);
    }
  };

  const addRecord = async (data) => {
    const newRecord = await createRecord(data);
    setRecords([...records, newRecord]);
  };

  const removeRecord = async (id) => {
    await deleteRecord(id);
    setRecords(records.filter((record) => record.id !== id));
  };

  const editRecord = async (id, data) => {
    await updateRecord(id, data);
    loadRecords();
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        records,
        editor,
        user,
        setEditor,
        setUser,
        loadRecords,
        addRecord,
        removeRecord,
        editRecord,
        searchId,
        setSearchId,
        records: paginatedRecords,
        setRecords,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
