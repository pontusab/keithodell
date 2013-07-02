<?php
$stories = true;
include 'components/header.php'; 
?>
<div class="stories">
	<div class="container">
		<div class="nav-bar">
			<!-- <div class="sort">
				<form action="" method="get">
					<div class="row">
						<select id="category" name="category">
							<option value="none">Category</option>
							<option value="adventure">Adventure</option>
							<option value="market">Market</option>
							<option value="fishing">Fishing</option>
							<option value="trip">Trip</option>
						</select>
					</div>

					<div class="row">
						<select id="contry" name="contry">
							<option value="none">Contry</option>
							<option value="adventure">Sweden</option>
							<option value="market">USA</option>
							<option value="fishing">Spain</option>
							<option value="trip">Italy</option>
						</select>
					</div>

					<div class="row submit">
						<input type="submit" class="btn" value="Filter">
					</div>

				</form>
			</div> -->

			<ul class="clearfix">
				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie1.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>

					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie2.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie3.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie4.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie5.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie6.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

				<li data-story-id="1">
					<div class="img">
						<div class="vignette"></div>
						<img src="http://keith.pontusab.se/assets/tmp/storie7.jpg"/>
					</div>

					<div class="copy">
						<h2>A single rule for wine tasting</h2>
						<p>
							It was 2009, and I thought Yellow Tail produced a great wine. When it was up to me to choose wine for a party.
						</p>

						<div class="meta">
							<a href="#"><span class="icon-location"></span>Stockholm, Sweden</a>
							<a href="#"><span class="icon-tag"></span>Adventure</a>
						</div>
					
					</div>
				</li>

			</ul>

			<div class="paging">
				<ul>
					<li>
						<a href="#">1</a>
						<a href="#">2</a>
						<a href="#" class="sel">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
						<span class="elipse">...</span>
						<a href="#">18</a>
					</li>
				</ul>

				<div class="switch">
					<a class="prev icon-left-open-big" alt="Previous story"  href="#"></a>
					<a class="next icon-right-open-big" alt="Next story" href="#"></a>
				</div>
			</div>
		</div>

		<div class="map">
			<div id="map-canvas"></div>
		</div>
	</div>
</div>

<?php include 'components/footer.php'; ?>