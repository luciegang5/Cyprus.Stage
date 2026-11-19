type User = { name: string; age: number };

export default function Step2() {
  const save = () => {
    const user: User = { name: "Ali", age: 20 };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const read = () => {
    const text = localStorage.getItem("user");
    const back: User | null = text ? JSON.parse(text) : null;
    console.log(back?.name);
  };

  return (
    <div>
      <button onClick={save}>Enregistrer</button>
      <button onClick={read}>Lire</button>
    </div>
  );
}
