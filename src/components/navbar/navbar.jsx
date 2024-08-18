import React, { useState } from "react";
import Wrapper from "../../layout/wrapper";
import { logo, logotext, sup, tg, vk } from "../../assets";
import { FaVk } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";
import Card from "../card/card";
import axios from "axios";
import { api_url } from "../../constants/constants";
import profile from "../../assets/profile.png"

const Navbar = () => {
  const [value1, setValue1] = useState("all");

  const [name, setName] = useState();
  const [surename, setSurename] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false)

  const createUser = () => {
    if (name && surename && username && password) {
      setLoading(true)
      axios
        .post(`${api_url}/api/user/new`, {
          firstName: name,
          lastName: surename,
          username: username,
          password: password
        })
        .then((res) => {
          setLoading(false)
          document.getElementById("my_modal_2").close();
          document.getElementById("my_modal_3").showModal();
        });
    }
  };

  const loginUser = () => {
    if (username && password) {
      setLoading(true)
      axios
        .post(`${api_url}/api/user/login`, {
          username: username,
          password: password
        })
        .then((res) => {
          document.getElementById("my_modal_3").close();
          localStorage.setItem("token", res.data.token)
          window.location.reload()
        });
    }
  }

  return (
    <div>
      <Wrapper>
        <div className="flex items-center justify-between base:px-4 md2:px-0 gap-5 h-[60px]">
          <div className="flex align-middle gap-[1px] h-[57px] cursor-pointer">
            <Link to={"/"}>
              <div className="flex align-middle gap-[1px] h-[57px] cursor-pointer">
                <img src={logo} alt="" />
                <div className="pt-[13px]">
                  <img src={logotext} alt="" />
                  <h4 className="text-[10px] text-[#494949]">
                    ХОЗТОВАРЫ С ДОСТАВКОЙ
                  </h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="md2:hidden base:flex" >
            <Link to={"/add"}>
              <img src={profile} alt="profile" className="ml-[120px] w-fit mt-[5px]" />
            </Link>
          </div>
          <div className="md2:flex base:hidden align-items-center justify-between gap-3 ">
            <button className="md2:flex base:hidden align-middle gap-[3] text-white btn bg-[#E24C55] w-[200px] h-[40px] rounded-none ml-6 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="15"
                viewBox="0 0 25 15"
                fill="none"
              >
                <line
                  y1="1"
                  x2="25"
                  y2="1"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  y1="7.5"
                  x2="25"
                  y2="7.5"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  y1="14"
                  x2="25"
                  y2="14"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              Каталог товаров
            </button>

            <div className="w-[318px] h-[45px]  mt-[1px] md2:flex align-middle base:hidden  border-[#CECDCD] border-[1px] ">
              <input
                type="text"
                placeholder="Введите артикул или название товара..."
                className="w-[280px] h-[42px] pl-[10px] outline-none border-none placeholder:text-[13px]"
              />

              <div className="w-[40px] h-[43px] flex items-center  bg-[#CECDCD] justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="xl:flex align-items-center gap-2 flex base:hidden">
              <img className=" h-[42px]" src={vk} alt="" />
              <img
                className="w-[42px] h-[42px]"
                src={tg}
                alt=""
              />
              <img
                className="w-[42px] h-[42px]"
                src={sup}
                alt=""
              />
            </div>

            <div className="lg:flex items-center gap-2 base:hidden">
              <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[50%] border-[#C0C0C0] border-[1px]">
                <CiHeart />
              </div>
              <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[50%] border-[#C0C0C0] border-[1px]">
                <MdOutlineShoppingCart />
              </div>
            </div>
            {!localStorage.getItem("token") ? <button
              className="btn w-[154px] md2:flex base:hidden h-[40px] text-white bg-[#E24C55]"
              onClick={() =>
                document
                  .getElementById("my_modal_2")
                  .showModal()
              }
            >
              Зарегистрироваться
            </button> :
              <div className="w-fit md2:flex base:hidden">
                <Link to={"/add"}>
                  <img src={profile} alt="profile" className="ml-[120px] w-fit mt-[5px]" />
                </Link>
              </div>}
            <dialog id="my_modal_2" className="modal">
              {loading && <div className="z-[1888888888888881322143] fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-[#0000008a]">
                <div className="loading bg-white loading-spinner loading-lg"></div>
              </div>}
              <div className="modal-box">
                {/* modal header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[3px] h-[57px]">
                    <img src={logo} className="" alt="" />
                    <div className="pt-[13px]">
                      <img
                        className="w-[95px] h-[21px]"
                        src={logotext}
                        alt=""
                      />
                      <h4 className="text-[10px] text-[#494949]">
                        ХОЗТОВАРЫ С ДОСТАВКОЙ
                      </h4>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <form
                      method="dialog"
                      className="modal-backdrop"
                    >
                      <button>
                        <IoMdClose
                          color="#5B5B5B"
                          size={"29px"}
                        />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-[100%] h-[1px] bg-[#D7D7D7] mt-2"></div>

                {/* inputs */}
                <div className="pt-5 flex flex-col">
                  <label className="flex flex-col">
                    Имя
                    <input
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      type="text"
                      placeholder="Имя"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>
                  <label className="flex flex-col">
                    Фамилия
                    <input
                      value={surename}
                      onChange={(e) =>
                        setSurename(e.target.value)
                      }
                      type="text"
                      placeholder="Фамилия"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>
                  <label className="flex flex-col">
                    Имя пользователя
                    <input
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      type="text"
                      placeholder="Имя пользователя"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>
                  <label className="flex flex-col">
                    пароль
                    <input
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      type="text"
                      placeholder="пароль"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>

                  <p onClick={() => {
                    document.getElementById("my_modal_2").close();
                    document.getElementById("my_modal_3").showModal();
                  }} className="text-[14px] font-[700] text-[#0094FF]">
                    если у вас есть учетная запись
                  </p>

                  <button
                    onClick={createUser}
                    className="btn w-[100%  ] h-[40px] text-white bg-[#E24C55] rounded-none mt-3"
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            <dialog id="my_modal_3" className="modal">
              {loading && <div className="z-[1888888888888881322143] fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-[#0000008a]">
                <div className="loading bg-white loading-spinner loading-lg"></div>
              </div>}
              <div className="modal-box">
                {/* modal header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[3px] h-[57px]">
                    <img src={logo} className="" alt="" />
                    <div className="pt-[13px]">
                      <img
                        className="w-[95px] h-[21px]"
                        src={logotext}
                        alt=""
                      />
                      <h4 className="text-[10px] text-[#494949]">
                        ХОЗТОВАРЫ С ДОСТАВКОЙ
                      </h4>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <form
                      method="dialog"
                      className="modal-backdrop"
                    >
                      <button>
                        <IoMdClose
                          color="#5B5B5B"
                          size={"29px"}
                        />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-[100%] h-[1px] bg-[#D7D7D7] mt-2"></div>

                {/* inputs */}
                <div className="pt-5 flex flex-col">

                  <label className="flex flex-col">
                    Имя пользователя
                    <input
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      type="text"
                      placeholder="Имя пользователя"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>
                  <label className="flex flex-col">
                    пароль
                    <input
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      type="text"
                      placeholder="пароль"
                      className="input w-ful outline-none  border-[#CECDCD] w-[100%] rounded-none"
                      style={{
                        outline: "0",
                        border: "1px solid #CECDCD",
                      }}
                    />
                  </label>

                  <p onClick={() => {
                    document.getElementById("my_modal_3").close();
                    document.getElementById("my_modal_2").showModal();
                  }} className="text-[14px] font-[700] text-[#0094FF]">
                    если у вас нет учетной записи
                  </p>

                  <button
                    onClick={loginUser}
                    className="btn w-[100%  ] h-[40px] text-white bg-[#E24C55] rounded-none mt-3"
                  >
                    доступ
                  </button>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </Wrapper>
      <div className="w-[100%] h-[1px] bg-[#D7D7D7] mt-2"></div>

      <Wrapper>
        <div className="flex justify-between text-[16px] font-[600] my-4">
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Главная
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Акции
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Распродажа
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Оплата и доставка{" "}
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Гарантия и возврат
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            О нас
          </h1>
          <h1 className="hover:text-[gray] duration-200 cursor-pointer">
            Контакты
          </h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
