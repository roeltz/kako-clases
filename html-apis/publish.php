<?php

$name = sha1(uniqid(true)).".jpg";
move_uploaded_file($_FILES["image"]["tmp_name"], "uploads/$name");
echo json_encode(["success"=>true]);