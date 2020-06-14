<?php
$collectionService = [];

class Service {
    public $img;
}

$collectionService[] = (object) [ 'img' => 1 ];
$collectionService[] = (object) [ 'img' => 2 ];
$collectionService[] = (object) [ 'img' => 3 ];
$collectionService[] = (object) [ 'img' => 4 ];
?>
<div class="block__service __background" id="service">

    <div class="wrapper">

        <h2 class="b_service--title __decor">Наши услуги</h2>

        <div class="block__product">

            <ul class="b_product--list">

                <? /** @var Service[] $collectionService **/?>
                <? foreach ( $collectionService as $service ): ?>
                <li class="b_product--item">

                    <img class="b_product--img" src="/img/services/<?=$service->img?>.png" alt="Иконка услуги">

                    <h5 class="b_product--title">
                        <sup>Тариф</sup>
                        VPS - Super X
                    </h5>

                    <? include "property.php" ?>

                    <a class="b_product--button color" href="/services.php">
                        Купить за 5000₽
                    </a>

                </li>
                <? endforeach; ?>

            </ul>

        </div>

        <div class="b_service--layout">
            <a class="color button __border" href="/services.php">
                <span>Показать все</span>
            </a>
        </div>

    </div>


</div>
