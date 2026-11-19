import { useParams, useNavigate } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Utilisateur numéro {id}</h1>
      <button onClick={() => navigate("/")}>Retour</button>
    </div>
  );
}
