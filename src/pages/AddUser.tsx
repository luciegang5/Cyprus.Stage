export default function AddUser() {
  const addUser = async () => {
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Ali" }),
    });
    const created = await res.json();
    console.log(created);
  };

  return <button onClick={addUser}>Ajouter Ali</button>;
}
