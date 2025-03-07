import { useState } from "react";
import { useGifts } from "../context/GiftContext";
import { useNavigate } from "react-router-dom";

function AddPresent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addGift } = useGifts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addGift(name, description);
    navigate("/listPage");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Agregar Nuevo Regalo</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Para:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Manolo"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Descripción:</label>
          <input
            type="text"
            disabled={!name.trim()}
            className={`w-full border rounded-lg px-4 py-2 transition-all ${
              !name.trim()
                ? "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed"
                : "border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ej: Peluche Dragon Ball"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={!name.trim()}
        >
          Regalar
        </button>
      </form>
    </div>
  );
}

export default AddPresent;