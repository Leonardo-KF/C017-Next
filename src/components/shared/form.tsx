type FormProps = {
  inputs: {
    name: string;
    type: string;
    placeholder: string;
    defaultValue?: string;
  }[];
  submitUrl: string;
};

export function Form({ inputs, submitUrl }: FormProps) {
  return (
    <form action={submitUrl} method="POST">
      {inputs.map((input, index) => {
        return (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            defaultValue={input.defaultValue}
            key={index}
          />
        );
      })}
      <button type="submit">Enviar</button>
    </form>
  );
}
