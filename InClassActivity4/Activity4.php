<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="Activity4-preview.php" method="POST">
        <h1>Registration Form</h1><br/>
        <div>
        Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="name"/><br/><br/>
        </div>
        <div>
        Surname:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="surname"/><br/><br/>
        <div>
        Username:&nbsp;&nbsp;<input type="text" name="username"/><br/><br/>
        </div>
        <div>
        Password:&nbsp;&nbsp;&nbsp;<input type="password" name="password"/><br/><br/>
        </div>
        <div>
        Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="address"/><br/><br/>
        </div>
        <div>
        Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name="countries">
            <option value="Albania">Albania</option>
            <option value="Belgium">Belgium</option>
            <option value="Canada">Canada</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Turkey" selected>Turkey</option>
            <option value="United States">United States</option>
            <option value="Other Country">Other Country</option>
        </select><br/><br/>
        </div>
        <div>
        ZIP Code:&nbsp;&nbsp;&nbsp;<input type="text" name="zipcode"/><br/><br/>
        </div>
        <div>
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="email"/><br/><br/>
        </div>
        <div>
        Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gender" value="Male">Male
        <input type="radio" name="gender" value="Female">Female<br/><br/>
        </div>
        <div>
        Language:&nbsp;&nbsp;&nbsp;&nbsp;English<input type="checkbox" name="language[]" value="English"/>
        French<input type="checkbox" name="language[]" value="French"/>
        German<input type="checkbox" name="language[]" value="German"/><br/><br/>
        </div>
        <div>
        <span>About:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea name="comments"></textarea><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="submit"/>
        </div>
</form>
</body>
</html>
