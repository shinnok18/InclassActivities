<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if(empty($_POST['name'])==false)
    {
        echo $_POST['name'] . "<br>";
    }
    else
    {
        echo "Name: Not provided <br>";
    }

    if(empty($_POST['surname'])==false)
    {
        echo $_POST['surname'] . "<br>";
    }
    else
    {
        echo "Surname: Not provided <br>";
    }
    
    
    if(empty($_POST['username'])==false)
    {
        echo $_POST['username'] . "<br>";
    }
    else
    {
        echo "Username: Not provided <br>";
    }
    
    if(empty($_POST['password'])==false)
    {
        echo $_POST['password'] . "<br>";
    }
    else
    {
        echo "Password: Not provided <br>";
    }
    
    if(empty($_POST['address'])==false)
    {
        echo $_POST['address'] . "<br>";
    }
    else
    {
        echo "Address: Not provided <br>";
    }

    if(empty($_POST['countries'])==false)
    {
        echo $_POST['countries'] . "<br>";
    }

    if(empty($_POST['zipcode'])==false)
    {
        echo $_POST['zipcode'] . "<br>";
    }
    else
    {
        echo "Zipcode: Not provided <br>";
    }

    if(empty($_POST['email'])==false)
    {
        echo $_POST['email'] . "<br>";
    }
    else
    {
        echo "Email: Not provided <br>";
    }

    if(empty($_POST['gender'])==false)
    {
        echo $_POST['gender'] . "<br>";
    }
    else
    {
        echo "Gender: Not provided <br>";
    }

    if(empty($_POST["language"])==false)
    {
        
        for($i=0;$i<sizeof($_POST["language"]);$i++)
        {
            echo $_POST["language"][$i]. "<br>";
        }
    }
    else
    {
        echo "Language: Not provided <br>";
    }

    if(empty($_POST['comments'])==false)
    {
        echo $_POST['comments'] . "<br>";
    }
    else
    {
        echo "Comment: Not provided <br>";
    }
?> 
</body>
</html>