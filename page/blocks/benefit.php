<?php
$collectionPartner = [];

class Partner {
    public $svg;
    public $title;
    public $text;
}

$collectionPartner[] = (object) [
    'svg'   => 'safety',
    'title' => 'Высокая надежность',
    'text'  => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'support',
    'title' => 'Высокая надежность',
    'text'  => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'devices',
    'title' => 'Премиум оборудования',
    'text'  => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'traffic',
    'title' => 'Без перегона трафика',
    'text'  => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
];

?>
<div class="block__benefit">

    <div class="wrapper">

        <h3>Нужно выбрать нас<br>потому что:</h3>

        <ul class="b_benefit--wrapper">

            <? /** @var Partner[] $collectionPartner **/?>
            <? foreach ( $collectionPartner as $partner ) : ?>

            <li class="b_benefit--item">
                <img class="b_benefit--img" src="/img/icon/traffic.svg" alt="картинка на фоне">

                <div class="b_benefit--layout">
                    <img class="b_benefit--ball" src="/img/decor/sphere.png" alt="Сфера">
                    <img class="b_benefit--icon" src="/img/icon/<?= $partner->svg?>.svg" alt="Иконка">
                </div>

                <h3 class="b_benefit--title"><?= $partner->title?></h3>
                <p class="b_benefit--text"><?= $partner->text?></p>
            </li>

            <? endforeach; ?>
        </ul>

    </div>

</div>
