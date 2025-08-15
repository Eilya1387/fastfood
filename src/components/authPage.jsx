import React, { useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/auth.css";

export default function Auth() {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const isSignup = tab === "signup";

  const validationSchema = useMemo(() => {
    const base = {
      email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
      password: Yup.string()
        .min(6, "حداقل ۶ کاراکتر")
        .required("رمز عبور الزامی است"),
    };

    if (isSignup) {
      return Yup.object({
        fullName: Yup.string()
          .min(2, "نام کامل را وارد کنید")
          .required("نام الزامی است"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "تکرار رمز مطابقت ندارد")
          .required("تکرار رمز الزامی است"),
        // terms: Yup.boolean().oneOf([true], "پذیرفتن قوانین الزامی است"),
        ...base,
      });
    }

    return Yup.object({
      ...base,
      remember: Yup.boolean(),
    });
  }, [isSignup]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: isSignup
      ? {
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }
      : { email: "", password: "", remember: false },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await new Promise((r) => setTimeout(r, 700));
        console.log(tab, values);
        toast.success(
          isSignup ? (
            <strong className="bold-toast">ثبت‌نام موفقیت آمیز بود</strong>
          ) : (
            <strong className="bold-toast">ورود موفقیت آمیز بود</strong>
          ),
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      } catch (err) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
    validateOnSubmit: true,
  });

  React.useEffect(() => {
    if (Object.keys(formik.errors).length > 0 && formik.submitCount > 0) {
      Object.entries(formik.errors).forEach(([key, message]) => {
        if (key !== "terms") {
          toast.error(<strong className="bold-toast">{message}</strong>, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
    }
  }, [formik.errors, formik.submitCount]);

  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    formik;

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="brand">MC donalds</h1>
          <div className="tabs">
            <button
              type="button"
              className={`tab ${tab === "login" ? "active" : ""}`}
              onClick={() => setTab("login")}
              aria-pressed={tab === "login"}
            >
              ورود
            </button>
            <button
              type="button"
              className={`tab ${tab === "signup" ? "active" : ""}`}
              onClick={() => setTab("signup")}
              aria-pressed={tab === "signup"}
            >
              ثبت‌نام
            </button>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {isSignup && (
            <div className="form-field">
              <input
                id="fullName"
                name="fullName"
                placeholder=" "
                value={values.fullName}
                onChange={handleChange}
                aria-invalid={touched.fullName && !!errors.fullName}
              />
              <label htmlFor="fullName">نام و نام‌خانوادگی</label>
            </div>
          )}

          <div className="form-field">
            <input
              id="email"
              name="email"
              type="email"
              placeholder=" "
              value={values.email}
              onChange={handleChange}
              aria-invalid={touched.email && !!errors.email}
            />
            <label htmlFor="email">ایمیل</label>
          </div>

          <div className="form-field">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={values.password}
              onChange={handleChange}
              aria-invalid={touched.password && !!errors.password}
            />
            <label htmlFor="password">رمز عبور</label>
            <button
              type="button"
              className="pwd-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label="نمایش یا مخفی کردن رمز"
            >
              {showPassword ? (
                <i className="bi bi-eye-slash-fill"></i>
              ) : (
                <i className="bi bi-eye-fill"></i>
              )}
            </button>
          </div>

          {isSignup && (
            <>
              <div className="form-field">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder=" "
                  value={values.confirmPassword}
                  onChange={handleChange}
                  aria-invalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                />
                <label htmlFor="confirmPassword">تکرار رمز عبور</label>
              </div>
              {/* 
              <div className="form-check">
                <label>
                  <input type="checkbox" name="terms" checked={values.terms} onChange={handleChange} />
                  <span>قوانین سایت را می‌پذیرم</span>
                </label>
                {touched.terms && errors.terms && <div className="error">{errors.terms}</div>}
              </div> */}
            </>
          )}

          {!isSignup && (
            <div className="form-check">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={values.remember}
                  onChange={handleChange}
                />
                <span>مرا به خاطر بسپار</span>
              </label>
            </div>
          )}

          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "در حال ارسال..." : isSignup ? "ثبت‌نام" : "ورود"}
          </button>
        </form>

        <div className="auth-footer">
          <small>با ورود شما با قوانین ما موافقید.</small>
        </div>
      </div>
    </div>
  );
}
