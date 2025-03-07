import { useGifts } from "../context/GiftContext";
import { Link } from "react-router-dom";

function ListPage() {
  const { gifts } = useGifts();

  if (gifts.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl">
        No hay regalos todavía
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Lista de Destinatarios
      </h2>
      <ul className="space-y-3">
        {gifts.map((gift) => (
          <li
            key={gift.id}
            className="p-4 bg-white shadow rounded hover:bg-gray-100"
          >
            <Link
              to={`/details/${gift.id}`}
              className="text-blue-500 hover:underline"
            >
              {gift.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;