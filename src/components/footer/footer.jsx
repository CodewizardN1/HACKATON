import logo from "../../assets/logo.png"
import Wrapper from "../../layout/wrapper"

const Footer = () => {
    return (
        <div className='w-[100%] h-[500px]  bg-[#333333]  items-center justify-center  py-[15px]' >
            <Wrapper>
                <div className='flex align-middle gap-[1px] h-[57px] ml-[620px] mt-[20px] ' >
                    {/* <img src={img3} alt="" /> */}

                    <div className='mt-[10px] color-[white] '>
                        <img className='' src={logo} alt="" />
                        <h4 className='text-[10px] text-[white]'>ХОЗТОВАРЫ С ДОСТАВКОЙ</h4>
                    </div>

                </div>

                <div className='max-w-[1400px] items-center justify-center ml-14  py-[10px]  '>
                    <hr />
                </div>

                <div className=' pt-[10px] text-[white]  flex items-center  justify-around'>
                    <div>
                        <div>
                            <h3>Разделы сайта</h3>
                        </div>
                        <ul>
                            <li>Главная</li>
                            <li>Акции</li>
                            <li>Распродажа</li>
                            <li>Оплата и доставка</li>
                            <li>Гарантия и возврат</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                        </ul>
                        </div>

                        <div>
                        <div>
                            <h3>Каталог товаров</h3>
                        </div>
                        <ul>
                            <li>Афганские скороварки </li>
                            <li>Казаны и котлы</li>
                            <li>Учаги</li>
                            <li>Товары для дома и сада</li>

                        </ul>
                        </div>

                        <div>
                        <ul>
                            <li>Кастрюли</li>
                            <li>Мантоварки</li>
                            <li>Сковороды</li>
                        </ul>
                        </div>

                        <div>
                        <ul>
                            <li>Термосы</li>
                            <li>Чайники и френч-прессы</li>
                            <li>Сервировочная посуда</li>
                        </ul>
                        </div>

                        <div>
                        <div>
                            <h2>Контакты</h2>
                        </div>
                        <ul>
                            <li>Революционная 56 <br />
                            +7 (347) 276-91-92</li>
                            <li>Ежедневно <br />
                            10:00-21:00</li>
                            <li>info@newsite.ru</li>
                        </ul>
                    </div>

                </div>
                <div className='max-w-[1400px] items-center justify-center ml-14  py-[10px]  '>
                    <hr />
                </div>


                <div className='text-[grey] pt-[20px]   flex  items-center justify-around'>
                    <div>
                    <ul>
                        <li>Политика компании в отношении обработки <br />
                        персональных данных
                        </li>
                    </ul>
                    </div>

                    <div>
                    <ul>
                        <li>Политика компании в отношении обработки <br />
                        персональных данных
                        </li>
                    </ul>
                    </div>

                    <div>
                    <ul>
                        <li>Политика компании в отношении обработки <br />
                        персональных данных
                        </li>
                    </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer