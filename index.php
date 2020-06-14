<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Hyper Guard</title>
        <? include "page/head.php" ?>
    </head>

    <body>

        <div id="wrap">

            <div id="content">

                <header class="block__header __main __full" id="header">

                    <div class="b_header--wrapper wrapper">

                        <div class="b_header--layout">

                            <a class="b_header--link" href="/">
                                <img class="b_header--logo" src="/img/logo.png" alt="Logo">
                            </a>

                            <? include "page/blocks/menu.php" ?>
                        </div>

                        <? include "page/blocks/welcome.php" ?>

                    </div>

                    <span class="b_header--dots"></span>
                    <span class="b_header--dots __sm"></span>

                </header>


                <? include "page/blocks/benefit.php" ?>

                <? include "page/blocks/service/index.php" ?>

                <? include "page/blocks/calc.php" ?>

                <? include "page/blocks/partners.php" ?>

            </div>

            <img class="decor--arrow __right" src="/img/decor/arrows.png">
            <img class="decor--arrow __left" src="/img/decor/arrows.png">

        </div>

        <? include "page/blocks/footer.php" ?>

        <? include "page/blocks/modal.php" ?>

        <? include "page/scripts.php" ?>

    </body>

</html>

