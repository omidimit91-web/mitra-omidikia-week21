import{useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup.object({
  username:yup.string().required("نام کاربری"),
  password:yup.string().required("رمز عبور")
})
function Login() {
  const {
    register,handleSubmit,formState:{errors}
  }=useForm({resolver:yupResolver(schema)})
  const onSubmit= (data)=>{
    console.log(data)
  }
  return (
    <div>
      <h1>فرم ورود</h1>
      <form onSubmit> </form>
    </div>
  )
}

export default Login