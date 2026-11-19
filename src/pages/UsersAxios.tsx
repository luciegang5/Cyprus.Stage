import { useEffect, useState } from "react";
import axios from "axios";

type User = { id: number; name: string; email: string };

export default function UsersAxios() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError("Erreur de chargement");
      }
    };
    load();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
