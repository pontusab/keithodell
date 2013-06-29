<?php include 'components/header.php'; ?>
<div class="page">

	<div class="container">
		<div class="head">
			<h1>It usually starts with a hello</h1>
			<div class="border"></div>
		</div>

		<div class="content">
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

			
		</div>

		<div class="share">
			<a href="#" class="fb icon-facebook-circled"></a>
			<a href="#" class="gp icon-gplus-circled"></a>
			<a href="#" class="tw icon-twitter-circled"></a>
		</div>

	</div>
</div>

<?php include 'components/footer.php'; ?>