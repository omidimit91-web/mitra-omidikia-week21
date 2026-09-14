import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { register as registerUser } from "../api/auth";

const schema = yup.object({
  username: yup.string().required("نام کاربری"),
  password: yup.string().required("پسورد را واردکنید"),
});
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const result = await registerUser(data);
    console.log(result);
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="نام کاربری" {...register("username")} />
      {errors.username && <p>{errors.username.message}</p>}
      <input type="password" placeholder="پسورد" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">ثبت نام</button>
      <Link to="/login">ورود به حساب کاربری</Link>
    </form>
  );
}

export default Register;
