export default function Step1() {
  const save = () => {
    localStorage.setItem("name", "Ali");
    const n = localStorage.getItem("name");
    console.log(n);
  };

  const erase = () => {
    localStorage.removeItem("name");
    localStorage.clear();
  };

  return (
    <div>
      <button onClick={save}>Enregistrer</button>
      <button onClick={erase}>Effacer</button>
    </div>
  );
}
