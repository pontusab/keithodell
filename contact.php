<?php 
$img = true;
include 'components/header.php'; 
?>

<div class="page text">
	<div class="images">

		<div class="infoboxes">
			<h1>
				“THE MOST IMPORTANT THING IS TO MAKE PEOPLE HAPPY, BUT THE SECOND IS TO GIVE THEM SOMETHING TO THINK ABOUT.”
			</h1>
			<a href="#contact">More information</a>
		</div>	

		<div class="vignette"></div>
		<img src="assets/tmp/header2.jpg"/>
	</div>


	<div class="container">
		<div class="head">
			<h1>Contact</h1>
			<div class="border"></div>
		</div>

		<form class="form" autocomplete="on">
			<div class="row">
				<label for="name">Name</label>
			 	<input type="text" id="name" name="name" required>
			 </div>

			 <div class="row">
				<label for="email">Email</label>
			 	<input type="text" id="email" name="email" required>
			 </div>

			 <div class="row">
				<label for="message">Message</label>
			 	<textarea type="text" id="message" name="message" required></textarea>
			 </div>

			 <div class="row">
			 	<input type="submit" value="Send" class="btn">
			 </div>
		</form>

		<div id="contact">

			<div class="row">
				<strong>Phone number</strong>
				+46705653981
			</div>

			<div class="row">
				<strong>Mail</strong>
				<a href="mailto:contact@keithodell.me">contact@keithodell.me</a>
			</div>

			<div class="row">
				<strong>CV</strong>
				<a href="#">Download my cv</a>
			</div>
			
		</div>
	</div>
</div>

<?php include 'components/footer.php'; ?>