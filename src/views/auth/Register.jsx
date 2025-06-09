import ButtonSave from "src/components/common/ButtonSave";
import Form from "src/components/form/Form";
import TextFieldController from "src/components/form/TextFieldController";
import useAuth from "src/hooks/auth/useAuth";

const Register = () => {
  const { handleSubmit, onAuth, errors, control } = useAuth();

  return (
    <>
      <div className="text-4xl text-center mb-6">
        <p className="text-indigo-600 font-semibold">Registrate</p>
        <p className="">en tu panel de administración</p>
      </div>

      <Form onSubmit={handleSubmit(onAuth)} errors={errors}>
        <TextFieldController
          name="name"
          control={control}
          label="Nombre"
          className="mb-5"
          rules={[
            {
              required: "Campo requerido",
            },
          ]}
        />
        <TextFieldController
          name="email"
          control={control}
          label="Correo"
          className="mb-5"
          type="email"
          rules={[
            {
              required: "Campo requerido",
            },
          ]}
        />
        <TextFieldController
          name="pass"
          control={control}
          label="Contraseña"
          className="mb-5"
          type="password"
          rules={[
            {
              required: "Campo requerido",
            },
          ]}
        />

        <ButtonSave buttonText="Registrarse" />
      </Form>
    </>
  );
};

export default Register;
