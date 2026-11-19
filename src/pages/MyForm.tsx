import { useForm } from "react-hook-form";
import { useState } from "react";

type Person = {
  name: string;
  email: string;
  age: number;
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>();
  const [result, setResult] = useState<Person | null>(null);

  const onSubmit = (data: Person) => {
    setResult(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nom"
        {...register("name", { required: "Nom obligatoire" })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        placeholder="Email"
        {...register("email", {
          required: "Email obligatoire",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Email invalide" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="number"
        placeholder="Âge"
        {...register("age", {
          valueAsNumber: true,
          min: { value: 18, message: "Minimum 18 ans" },
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Valider</button>
      {result && <p>{result.name} - {result.email} - {result.age}</p>}
    </form>
  );
}
