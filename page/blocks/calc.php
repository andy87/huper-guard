<div class="block__calc" >

    <div class="wrapper">

        <div class="b_calc--overlay __left">

            <img class="b_calc--img" src="/img/server.gif" alt="Картинка сервера">

            <h6 class="b_calc--title" >Шаблоны конфигураций:</h6>

            <div class="block__config">

                <button class="b_config--button">
                    <span class="b_config--header">DS #5</span>
                    <span class="b_config--description">Мощное решение для серьезных задач.</span>
                </button>

                <button class="b_config--button">
                    <span class="b_config--header">DS #5</span>
                    <span class="b_config--description">Мощное решение для серьезных задач.</span>
                </button>

                <button class="b_config--button">
                    <span class="b_config--header">DS #5</span>
                    <span class="b_config--description">Мощное решение для серьезных задач.</span>
                </button>

            </div>

        </div>

        <div class="b_calc--overlay __right">

            <div class="b_calc--layout">
                <h3>Конфигуратор<br>сервера</h3>
                <a class="color button __border js-modal" href="#calc">
                    <span>Индивидуальная</span>
                </a>
            </div>

            <div class="b_calc--layout">

                <form class="block__form __calc" id="calc" action="/" method="post">

                    <div class="b_form--row">

                        <a class="b_form--tab" href="#">Виртуальный сервер</a>
                        <a class="b_form--tab __active" href="#">Виртуальный сервер</a>

                    </div>

                    <div class="b_form--row">

                        <h6 class="b_form--title"> Дата-центр: </h6>

                        <div class="b_form--radio __inline">

                            <label class="b_form--label">
                                <input type="radio" name="name_server" checked>
                                <span> NAMESERVER (MSK) </span>
                            </label>

                            <label class="b_form--label">
                                <input type="radio" name="name_server">
                                <span> NAMESERVER (MSK) </span>
                            </label>

                        </div>

                    </div>

                    <div class="b_form--row">

                        <div class="b_form--layout" style="width: 80%">
                            <h6 class="b_form--title">
                                Заголовок ползунука:
                            </h6>
                            <label class="block__range ">
                                <input type="range"
                                       name="range_1"
                                       data-slider-step="1"
                                       data-slider-value="48"
                                       data-slider-min="1"
                                       data-slider-max="100"
                                       data-target="name_slider_1">
                                <!-- data-target="name_slider_1" - name ИНПУТА куда будет отправляться значение при slide ползунка -->

                            </label>
                        </div>

                        <label class="b_form--layout __padding" style="width: 20%">
                            <input class="b_form--input range"
                                   type="text"
                                   name="name_slider_1"
                                   value="48"
                                   id="form_slider"
                                   data-target="range_1">
                            <!-- data-target="range_1" - name РЕЙНДЖА куда будет отправляться значение при установке его вручную -->

                        </label>

                    </div>

                    <div class="b_form--row">
                        <h6 class="b_form--title" >Оперативная память</h6>
                        <label class="b_form--select">
                            <select>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР</option>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР 2</option>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР 3</option>
                            </select>
                            <i></i>
                        </label>

                    </div>

                    <div class="b_form--row">
                        <h6 class="b_form--title">Оперативная память</h6>
                        <label class="b_form--select">
                            <select>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР</option>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР 2</option>
                                <option>ВИРТУАЛЬНЫЙ СЕРВЕР 3</option>
                            </select>
                            <i></i>
                        </label>
                    </div>

                    <div class="b_form--row">

                        <div class="b_form--radio __margin">

                            <div class="b_form--layout">
                                <label class="b_form--label">
                                    <input type="radio" name="data_center" >
                                    <span>текст чекбокса сайта</span>
                                </label>
                                <label class="b_form--label">
                                    <input type="radio" name="data_center" checked>
                                    <span>текст чекбокса сайта</span>
                                </label>
                            </div>

                            <div class="b_form--layout">
                                <label class="b_form--label">
                                    <input type="radio" name="data_center_2" checked>
                                    <span>Включить что то?</span>
                                </label>
                                <label class="b_form--label">
                                    <input type="radio" name="data_center_2">
                                    <span>Включить что то?</span>
                                </label>
                            </div>

                        </div>

                    </div>

                    <div class="b_form--row">

                        <div class="b_form--layout" style="width: 67%">
                            <h6 class="b_form--title">
                                Заголовок ползунука:
                            </h6>
                            <label class="block__range">
                                <input type="range"
                                       name="range_2"
                                       data-slider-step="100"
                                       data-slider-value="3500"
                                       data-slider-min="1"
                                       data-slider-max="10000"
                                       data-target="name_slider_2">
                                <!-- data-target="name_slider_2" - name ИНПУТА куда будет отправляться значение при slide ползунка -->
                            </label>
                        </div>

                        <label class="b_form--layout __padding" style="width: 33%">
                            <input class="b_form--input range"
                                   type="text"
                                   value="3 500"
                                   name="name_slider_2"
                                   data-target="range_2">
                            <!-- data-target="range_2" - name РЕЙНДЖА куда будет отправляться значение при установке его вручную -->

                        </label>

                    </div>

                    <div class="b_form--row __sm-full">

                        <div class="b_form--layout" style="width: 30%">
                            <label class="b_form--select">
                                <select>
                                    <option>2 МЕСЯЦА</option>
                                    <option>3 МЕСЯЦА</option>
                                    <option>4 МЕСЯЦА</option>
                                </select>
                                <i></i>
                            </label>

                        </div>

                        <div class="b_form--layout" style="width: 70%">
                            <a class="b_form--button color" href="/services.php">
                                Заказать за <span id="total_price">500</span> RUB
                            </a>
                        </div>

                    </div>

                </form>

            </div>

        </div>

    </div>

</div>