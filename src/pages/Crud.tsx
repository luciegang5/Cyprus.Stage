import { useEffect, useState } from "react";
import axios from "axios";

type User = { id: number; name: string };
const API = "http://localhost:3001/users";

export default function Crud() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");

  const load = async () => {
    const res = await axios.get<User[]>(API);
    setUsers(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    await axios.post(API, { name });
    setName("");
    load();
  };

  const rename = async (id: number) => {
    await axios.patch(API + "/" + id, { name: "Nouveau" });
    load();
  };

  const remove = async (id: number) => {
    await axios.delete(API + "/" + id);
    load();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={add}>Ajouter</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => rename(u.id)}>Modifier</button>
            <button onClick={() => remove(u.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
