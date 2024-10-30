import React from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Insert from "./components/Insert";
import Record from "./components/Record";
import Empty from "./components/Empty";
import { useAppContext } from "./context/AppContext";
import Update from "./components/Update";

function App() {
  const { editor, records, user } = useAppContext();

  return (
    <div className="h-screen bg-[#f2f2f2] w-screen overflow-scroll flex items-center justify-center">
      <main className="w-[80%] mx-auto">
        <Header />
        <table className="w-full border bg-white shadow-sm font-inter text-left text-sm">
          <thead className="border-b text-slate-700">
            <tr>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 text-center">Role</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {user && <Update />}
            {editor && <Insert />}
            {records.length ? <Record /> : <Empty />}
          </tbody>
        </table>
        <Pagination />
      </main>
    </div>
  );
}

export default App;
