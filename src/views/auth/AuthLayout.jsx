import { Outlet } from "react-router-dom";
import AuthBg from "src/components/common/AuthBg";

const AuthLayout = () => {
  return (
    <section className="w-full flex h-dvh overflow-hidden">
      <div className="w-3/5 hidden lg:block">
        <AuthBg />
      </div>
      <div className="w-2/5 flex-1 px-10 lg:pr-28 my-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
