<?php
    global $headerTags;
    global $title;
    $headerTags = "
        <link rel='stylesheet' href='./css/home.css' media='screen' />
    ";
    $title = "Home";
    require("./components/template-top.php");
?>

<section>
    <h2>About us</h2>

    <p>
        With us, say goodbye and fly. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, laudantium adipisci sed vitae culpa minus at mollitia nemo unde facilis, reiciendis voluptate praesentium debitis corporis modi cupiditate odit corrupti hic!
    </p>
</section>

<section>
    <h2>Destinations</h2>
    <p>Reach any corner of this round planet of ours...</p>
    <a href="./book.php">Book now!</a>
</section>

<?php require("./components/template-bottom.php"); ?>