import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const onSubmit = (data) => {
    console.log("Password Data:", data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Change Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Old Password
            </label>
            <div className="relative">
              <input
                type={showPassword.old ? "text" : "password"}
                placeholder="Enter old password"
                {...register("oldPassword", { required: "Old password is required" })}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => ({ ...prev, old: !prev.old }))}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.oldPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.oldPassword.message}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                placeholder="Enter new password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => ({ ...prev, new: !prev.new }))}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.newPassword.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm new password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
                }
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
