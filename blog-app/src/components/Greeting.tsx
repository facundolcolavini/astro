import { useState } from  "react";

interface Messages {
    messages: string[];
}
export default function Greeting({messages}: Messages) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}