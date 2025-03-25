import { NavLink } from "react-router-dom";
import Translation from "../translation";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
        <nav className="w-full fixed top-0 left-0 shadow max-md:hidden py-4">
            <div className="container flex items-center justify-between">
                <NavLink to="/" className="w-[75px] h-[75px]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" alt="" />
                </NavLink>
                <ul className="flex items-center gap-16">
                    <li>
                        <a href="" className="font-medium">{t("navbar.home")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.about")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.course")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.contact")}</a>
                    </li>
                </ul>
                <Translation />
            </div>
        </nav>
        <nav className="w-full fixed top-0 left-0 shadow md:hidden bg-white py-4">
            <div className="container flex items-center justify-between">
                <NavLink to="/" className="w-[75px] h-[75px] max-md:w-[50px] max-md:h-[50px]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" alt="" />
                </NavLink>
                <ul className={`w-full flex flex-col items-center justify-center gap-3 transition-all duration-300 absolute top-full shadow z-50 py-3 ${isOpen ? "right-0" : "right-[-100%]"}`}>
                    <li>
                        <a href="" className="font-medium">{t("navbar.home")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.about")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.course")}</a>
                    </li>
                    <li>
                        <a href="" className="font-medium">{t("navbar.contact")}</a>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <Translation />
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;