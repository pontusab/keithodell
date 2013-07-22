<?php include 'components/header.php'; ?>
<div class="stories">

	<div class="container">
		<div class="list">
			<div class="toggle"></div>

			<div class="story-items">
  				<ul class="slides">
					<li data-id="0">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie1.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>France</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="1">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie2.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Linköping</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="2">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie3.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>New York</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="3">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie4.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Spain</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="4">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie5.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Stockholm</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="5">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie6.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Africa</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="6">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie7.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Canada</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="7">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie8.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Greenland</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="8">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie9.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Cuba</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="9">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie10.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Ireland</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="10">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie11.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>Paraguay</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
					<li data-id="11">
						<div class="block">
							<a href="story.php">
								<div class="vignette"></div>
								<img src="assets/tmp/storie12.jpg">
							
								<div class="content">
									<h2>International Chocolate</h2>
									<div class="meta">
										<span>New Zeland</span>
									</div>

									<div class="btn">Read story</div>
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="map">
			<div class="control">
				<div class="in">+</div>
				<div class="out">-</div>
			</div>
			<div id="map-canvas"></div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var data = [
	    ['France', 46.227638,2.213749, '/story.php', 'Read about International Chocolate'],
	    ['Linköping', 58.410807,15.621373, '/story.php', 'Read about International Chocolate'],
	    ['New York', 40.714353,-74.005973, '/story.php', 'Read about International Chocolate'],
	    ['Spain', 40.463667,-3.74922, '/story.php', 'Read about International Chocolate'],
	    ['Stockholm', 59.32893,18.06491, '/story.php', 'Read about International Chocolate'],
	    ['Africa', -8.783195,34.508523, '/story.php', 'Read about International Chocolate'],
	    ['Canada', 56.130366,-106.346771, '/story.php', 'Read about International Chocolate'],
	    ['Greenland', 71.706936,-42.604303, '/story.php', 'Read about International Chocolate'],
	    ['Cuba', 21.521757,-77.781167, '/story.php', 'Read about International Chocolate'],
	    ['Ireland', 53.41291,-8.24389, '/story.php', 'Read about International Chocolate'],
	    ['Paraguay', -23.442503,-58.443832, '/story.php', 'Read about International Chocolate'],
	    ['New Zeland', -40.900557,174.885971, '/story.php', 'Read about International Chocolate'],
	];
</script>

<script type="text/javascript" src="/assets/js/vendors/googlemaps.js"></script>
<?php include 'components/footer.php'; ?>