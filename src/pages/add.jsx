import Layout from "../layout/layout"
import Wrapper from "../layout/wrapper"
import hero from "../assets/hero.png"
import { useState } from "react"
import select from "../assets/select.png"
import logo_info from "../assets/logo_info.png"
import axios from "axios"
import { api_url } from "../constants/constants"

const Add = () => {

    const [name, setName] = useState()
    const [url, setUrl] = useState()
    const [info, setInfo] = useState()

    const [sale, setSale] = useState()
    const [prevPrice, setPrevPrice] = useState()
    const [price, setPrice] = useState()

    const addProduct = () => {
        if (name && url && info && sale && prevPrice && price) {
            axios.post(`${api_url}/api/product/create`, {
                name: name,
                url: url,
                info: info,
                seil: parseInt(sale), 
                oldPrice: parseInt(prevPrice),
                newPrice: parseInt(price)
            }, {
                headers: {
                    'token': localStorage.getItem("token")
                }
            }).then(() => {
                window.location.reload()
            })
        }
    }

    return (
        <div>
            <Layout>
                <div>

                    <div className="mt-[26px]">
                        <Wrapper>
                            <div>
                                <h2 className="text-[#000] text-[20px] font-[700]">Добавить продукт</h2>
                                <div className="mt-[20px] flex justify-between items-center gap-[40px]">
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">Название продукта</p>
                                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Название продукта" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">URL-адрес изображения</p>
                                        <input value={url} onChange={e => setUrl(e.target.value)} type="text" placeholder="URL-адрес изображения" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">Информация</p>
                                        <input value={info} onChange={e => setInfo(e.target.value)} type="text" placeholder="Информация" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                </div>
                                <div className="mt-[20px] flex justify-between items-center gap-[40px]">
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">Скидка</p>
                                        <input value={sale} onChange={e => setSale(e.target.value)} type="text" placeholder="Скидка" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">Предыдущая цена</p>
                                        <input value={prevPrice} onChange={e => setPrevPrice(e.target.value)} type="text" placeholder="Предыдущая цена" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                    <div className="flex flex-col w-[32%] gap-[4px]">
                                        <p className="text-[15px]">Текущая цена</p>
                                        <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="Текущая цена" className="rounded-[1px] border border-[#CECDCD] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[8px] py-[8px]" />
                                    </div>
                                </div>

                                <p onClick={addProduct} className="cursor-pointer hover:bg-[#c74049] w-fit px-[30px] py-[15px] bg-[#E24C55] rounded-[1px] text-center text-white font-[500] text-[18px] mt-[32px]">Добавить продукт</p>

                            </div>
                        </Wrapper>
                    </div>

                    <div className="mb-[85px] mt-[150px] pb-[40px] bg-[#fff]">
                        <Wrapper>
                            <p className="text-[#333] text-[24px] font-[700] text-center pt-[52px]">Поможем выбрать лучшее!</p>
                            <div className="mt-[11px] flex items-center justify-between">
                                <img src={select} alt="select" />
                                <img src={logo_info} alt="logo" />
                                <div>
                                    <p className="text-[#333] text-[20px] w-[295.205px] text-center">Проконсультируем и поможем Вам с выбором!</p>
                                    <div className="mt-[18px] flex-col flex gap-[8px]">
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#333]">Ваше имя</p>
                                            <input type="text" className="rounded-[1px] border border-[#E24C55] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[30px] py-[8px]" />
                                        </div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#333]">Номер телефона</p>
                                            <input type="text" className="rounded-[1px] border border-[#E24C55] bg-[rgba(255, 255, 255, 0.00)] focus:outline-none px-[30px] py-[8px]" />
                                        </div>
                                        <p className="w-full py-[15px] bg-[#E24C55] rounded-[1px] text-center text-white font-[500] text-[18px] mt-[25px]">Получить консультацию</p>
                                        <div className="flex items-center justify-start gap-[6px] mt-[12px]">
                                            <input id="check" type="checkbox" className="checkbox [--chkbg:theme(colors.white)] [--chkfg:gray] checked:border border checkbox-xs rounded" defaultChecked />
                                            <label htmlFor="check" className="text-[#929292] text-[12px]">Согласен на обработку персональных данных *</label>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Add