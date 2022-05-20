import React, { useEffect } from "react";
import {
    useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate('/appointment')
  };
  useEffect(() => {
    if (emailError || googleError || updateError) {
      const newErrorMessage =
        googleError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ") ||
        emailError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ") ||
        updateError?.message;

      toast.error(newErrorMessage.toUpperCase());
    }
  }, [emailError, googleError, updateError]);

  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };
  if (user) {
    navigate(from)
  }


  return (
    <div className="flex h-[90vh] items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 mx-auto">
        <div className="card-title justify-center mt-6 -mb-5">
          <h1>Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered"
                {...register("name", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 font-semibold">Name is required</p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className="text-red-600 font-semibold">
                  Name can not be greater than 30 characters
                </p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-red-600 font-semibold">
                  Name must be greater than 3 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="text"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^(.+)@(.+)$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 font-semibold">Email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600 font-semibold">
                  Please Enter a valid email
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                id="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 font-semibold">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 font-semibold">
                  Password must be at least 6 characters
                </p>
              )}
            </div>
            <div className="form-control mt-3">
              <button
                disabled={emailLoading ? true : false}
                className={
                  emailLoading
                    ? "btn btn-accent loading no-animation"
                    : "btn btn-accent no-animation"
                }
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-center">
            Already have an accout?{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-10">
            <div className="divider">OR</div>
          </div>
          <button
            disabled={googleLoading ? true : false}
            className={
              googleLoading
                ? "btn btn-ghost py-3 rounded-md border-black text-accent border-[1px] no-animation loading"
                : "btn btn-ghost py-3 rounded-md border-black text-accent border-[1px] no-animation"
            }
            onClick={() => signInWithGoogle()}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
