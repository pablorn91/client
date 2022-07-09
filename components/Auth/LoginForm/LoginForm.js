export default function LoginForm({ showRegisterForm }) {
  return (
    <div>
      <h1>Estamos en el formulario de Login</h1>
      <button onClick={showRegisterForm}>Ir al Registro</button>
    </div>
  );
}
