<?php
$collectionPartner = [];

class Partner {
    public $svg;
    public $title;
    public $text;
}

$collectionPartner[] = (object) [
    'svg'   => 'safety',
    'title' => 'Надежность',
    'text'  => 'Регулярный мониторинг состояния сервера и профессиональное тех.обслуживание гарантируют бесперебойное функционирование проекта с аптаймом 99,5%. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'support',
    'title' => 'Поддержка',
    'text'  => 'Сотрудники HyperGuard готовы ответить на любой вопрос и проконсультировать по поводу всего, что связано с предоставляемыми услугами. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'devices',
    'title' => 'Премиум оборудование',
    'text'  => 'Многоядерные процессоры в сочетании с быстрой оперативной памятью и молниеносными SSD-накопителями обеспечат проекту гиперскоростную работу. ',
];

$collectionPartner[] = (object) [
    'svg'   => 'traffic',
    'title' => 'Без перегона трафика',
    'text'  => 'Все проекты на наших серверах защищены от DDoS-атак. Фильтрация осуществляется в России, без переадресации трафика в другие страны.',
];

?>
<div class="block__benefit" id="benefit">

    <div class="wrapper">

        <h3>Нужно выбрать нас<br>потому что:</h3>

        <ul class="b_benefit--wrapper">

            <? /** @var Partner[] $collectionPartner **/?>
            <? foreach ( $collectionPartner as $partner ) : ?>

            <li class="b_benefit--item">
                <img class="b_benefit--img" src="/img/icon/<?= $partner->svg?>.svg" alt="картинка на фоне">

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
