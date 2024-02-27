import { PropsWithChildren, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import Icon from "components/svg/Icon";

const MobileMenu = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const menu = useOutsideClick<HTMLDivElement>(() => setOpen(false));
  return (
    <div ref={menu} className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 m-1  text-slate-500 border-slate-500 border rounded-lg hover:bg-slate-500 active:bg-slate-400 hover:text-white transition-colors">
        <Icon type="menu" className="w-6 h-6" />
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-1 w-fit overflow-visible flex flex-col items-end gap-3  rounded-3xl bg-white p-3 text-base shadow-lg border border-slate-300 focus:outline-none sm:text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
