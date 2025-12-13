import { useForm } from "react-hook-form";

const Login = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="p-10 flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                        className="input input-bordered w-full"
                    />
                    {errors.email && <span>Email field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true , minLength: 6})}
                        className="input input-bordered w-full"
                    />
                    {errors.password?.type === 'required' && <span>Password is required</span>}
                    {errors.password?.type === 'minLength' && <span>Password must be at 6 character or longer</span>}
                </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-success w-full mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;