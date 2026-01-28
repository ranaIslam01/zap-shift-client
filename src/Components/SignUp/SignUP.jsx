import React, { useState } from "react";
import { Eye, EyeOff, UserPlus, Loader2 } from "lucide-react";
import authImage from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [imagePreview, setImagePreview] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { createUser, signUpGoogle, updateUserProfile } = useAuth();

  const handleDivClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return Swal.fire(
          "Error",
          "Image size should be less than 5MB",
          "error",
        );
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const signUpWithGoogle = () => {
    signUpGoogle()
      .then(async (result) => {
        const user = result.user;
        console.log(user);

        // ১. ডাটাবেজে পাঠানোর জন্য অবজেক্ট তৈরি
        const newUser = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        try {
          // ২. Axios দিয়ে আপনার লোকাল সার্ভারে ডেটা পাঠানো
          const { data } = await axios.post(
            "http://localhost:3000/users",
            newUser,
          );

          // ৩. সাকসেস চেক
          if (data.insertedId || data.message === "User already exists") {
            Swal.fire({
              title: "Success!",
              text: "Google Sign-In successful and user ensured in DB.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            navigate(from);
          }
        } catch (dbError) {
          console.error("Database Save Error:", dbError);
        }
      })
      .catch((error) => {
        console.error("Google Auth Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Could not sign in with Google.",
          icon: "error",
        });
      });
  };

  const onSubmit = async (data) => {
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

    setIsSubmitting(true);

    try {
      // এখন আমরা data.image এর বদলে selectedFile ব্যবহার করছি
      const imageFile = selectedFile;

      if (!imageFile) {
        setIsSubmitting(false);
        return Swal.fire("Error", "Please select a profile photo", "error");
      }

      // ১. Cloudinary আপলোড
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", upload_preset);

      const imgRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData,
      );

      const photoURL = imgRes.data.secure_url;

      // ২. Firebase User Creation
     await createUser(data.email, data.password)
     .then(result => {
      console.log(result);
     })
     .catch(error => {
      console.log("user created", error);
     })
      

      // ৩. Firebase Profile Update
      await updateUserProfile(data.name, photoURL);

      // ৪. MongoDB User Object
      const newUser = {
        name: data.name,
        email: data.email.toLowerCase(),
        image: photoURL,
        role: "user",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      // ৫. MongoDB-তে ডাটা পাঠানো
      const dbRes = await axios.post("http://localhost:3000/users", newUser);

      if (
        dbRes.data.insertedId ||
        dbRes.data.message === "User already exists"
      ) {
        Swal.fire({
          title: "Success!",
          text: "Account created successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setIsSubmitting(false); // সাকসেস হোক বা এরর, লোডিং বন্ধ হবে
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Side: Register Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-10 md:py-12">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-primary-black mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            Register with ZapShift
          </p>

          {/* Profile Upload UI */}
          <div className="mb-6 sm:mb-8 flex flex-col items-start">
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="fileInput"
            />

            <div
              onClick={handleDivClick}
              className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-200 transition active:scale-95 overflow-visible"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <UserPlus className="text-gray-400 w-7 h-7" />
              )}

              {/* প্লাস আইকন ইন্ডিকেটর */}
              <div className="absolute -right-1 -bottom-1 bg-primary-green rounded-full p-1 border-2 border-white shadow-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-2 font-medium">
              Upload Photo
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent outline-none transition text-sm sm:text-base pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-10 sm:top-11 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 mt-4 sm:mt-6">
              <input type="checkbox" className="rounded" />
              <label className="text-xs sm:text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-primary-green font-semibold">
                  Terms & Conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary-green text-primary-black font-bold py-2 sm:py-3 rounded-lg transition text-base sm:text-lg mt-6 sm:mt-8 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-opacity-90"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Creating Account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4 sm:my-6">
            <div className="grow border-b border-gray-300"></div>
            <span className="px-2 sm:px-3 text-gray-500 text-xs sm:text-sm">
              OR
            </span>
            <div className="grow border-b border-gray-300"></div>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={signUpWithGoogle}
            className="w-full border-2 border-gray-300 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Sign Up with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-4 sm:mt-6 text-xs sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary-green font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={authImage}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUP;
