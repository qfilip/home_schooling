<?php
    global $title;
    $title = "Book";
    require("./components/template-top.php");
?>

<section>
    <h2>Available destinations</h2>
    <ul>
        <?php
            $dbContent = file_get_contents('/data/database.json');
            $destinations = json_decode($dbContent, true)['destinations'];
            foreach($destinations as $x) {
                echo "<li> {$x['place']} ({$x['country']}) </li>";
            }
        ?>
    </ul>
</section>

<?php require("./components/template-bottom.php"); ?>