import { useParams, useNavigate, Link } from "react-router-dom";
import { useGifts } from "../context/GiftContext";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getGiftById } = useGifts();

  const gift = getGiftById(id);

  if (!gift) {
    return (
      <div className="container mx-auto px-4 mt-10">
        <p className="text-center text-xl">Regalo no encontrado</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Detalles del Regalo
      </h2>
      <p className="mb-2">
        <strong>Para:</strong> {gift.name}
      </p>
      <p className="mb-4">
        <strong>Descripción:</strong> {gift.description}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Link to="/listPage">Volver</Link>
      </button>
    </div>
  );
}

export default DetailsPage;