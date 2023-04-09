<!DOCTYPE html>
<html>
<head>
	<title>Currency Calculation Program</title>
    <style>
		.result {
			text-indent: -80px;
            width: 200px;
		}
        .amount{
			text-align: left;
            width: 200px;
        }
	</style>
</head>
<body>
	<h1>Currency Calculation Program</h1>
	<?php
	// Define exchange rates
	$rates = array(
        "US Dollar" => 1.0,
		"Euro" => 0.91,
		"Canadian Dollar" => 1.36,
	);

	// Initialize variables
	$amount = 0;
	$from = "USD";
	$to = "USD";
	$result = 0;

	// Handle form submission
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$amount = $_POST["amount"];
		$from = $_POST["from"];
		$to = $_POST["to"];

		if (is_numeric($amount) && isset($rates[$from]) && isset($rates[$to])) {
			$converted_amount = $amount * ($rates[$to] / $rates[$from]);
			$result = "$converted_amount";
		} else {
			$result = "Invalid input";
		}
	}
	?>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
		<label for="amount">From:</label>
		<input class="amount" type="text" name="amount" id="amount" value="<?php echo $amount; ?>">

		<label for="from">Currency:</label>
		<select name="from" id="from">
			<?php foreach ($rates as $currency => $rate) { ?>
				<option value="<?php echo $currency; ?>" <?php if ($from == $currency) echo "selected"; ?>><?php echo $currency; ?></option>
			<?php } ?>
		</select><br>
		<div style="margin-left: 18px;">
        <label for="result">To:</label>
		<input class="result" type="text" name="result" id="result" value="<?php if (!empty($result)) { ?>
		<?php echo $result; ?>
	<?php } ?>">
		<label for="to">Currency:</label>
		<select name="to" id="to">
			<?php foreach ($rates as $currency => $rate) { ?>
				<option value="<?php echo $currency; ?>" <?php if ($to == $currency) echo "selected"; ?>><?php echo $currency; ?></option>
			<?php } ?>
		</select><br>
		</div>
		<div style="margin-left: 380px;">
		<input type="submit" value="Convert">
	</div>
	</form>
</body>
</html>
