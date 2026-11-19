import { useEffect, useState } from "react";

export default function Notes() {
  const [note, setNote] = useState<string>(
    () => localStorage.getItem("note") ?? ""
  );

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <textarea value={note} onChange={(e) => setNote(e.target.value)} />
  );
}
