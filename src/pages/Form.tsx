import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={name} onChange={onChange} />
      <button type="submit">Envoyer</button>
      <p>Valeur envoyée : {saved}</p>
    </form>
  );
}
