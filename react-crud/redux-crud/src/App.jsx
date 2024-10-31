import Edit from "./components/Edit";
import Header from "./components/Header";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
import Records from "./components/Records";
import Titles from "./components/Titles";
import { useContactContext } from "./contexts/contactContext";

function App() {
  const { insert, edit } = useContactContext();

  return (
    <div className="bg-[#F2F2F2] h-screen w-screen flex items-center justify-center font-inter">
      <main className="w-[80%] mx-auto">
        <Header />
        <table className="w-full border bg-white shadow-sm font-inter text-left text-sm">
          <thead className="border-b text-slate-700">
            <Titles />
          </thead>
          <tbody className="text-slate-600">
            {edit && <Edit />}
            {insert && <Input />}
            <Records />
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
