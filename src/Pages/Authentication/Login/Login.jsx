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
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-success w-full mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;