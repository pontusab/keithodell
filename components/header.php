<!DOCTYPE html>
<html lang="sv" class="no-js">
<head>
	<meta charset="utf-8" />
	<title>Keith O'dell</title>
	<meta name="keywords" content="Relevanta nyckelord för detta dokument." />
	<meta name="description" content="En kort beskrivning av dokumentets syfte och innehåll." />
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="/assets/css/screen-min.css?v=1" />
</head>
	<html>
		<body class="preload">

			<div class="wrapper <?php echo ( isset( $img ) ? '' : 'no-img' ); ?>">

				<div class="menu">
					<div class="icon-menu"></div>
					<div class="mobile">
						<ul>
							<?php if( empty( $start ) ) : ?>
								<li>
									<a href="/">Start</a>
								</li>
							<?php endif; ?>
							<li>
								<a href="/story-map.php">Stories</a>
							</li>
							<li>
								<a href="/about.php">About me</a>
							</li>
							<li>
								<a href="/contact.php">Contact</a>
							</li>
						</ul>
					</div>
				</div>


				<div class="header <?php echo ( isset( $start ) ? '' : 'other' ); ?>">
					<ul class="nav">
						<?php if( empty( $start ) ) : ?>
							<li>
								<a href="/">Start</a>
							</li>
						<?php endif; ?>
						<li>
							<a href="/story-map.php">Stories</a>
						</li>
						<li>
							<a href="/about.php">About me</a>
						</li>
						<li>
							<a href="/contact.php">Contact</a>
						</li>
					</ul>

					<ul class="lang">
						<li>
							<a class="sv sel" href="/sv/">Svenska</a>
						</li>
						<li>
							<a class="en" href="/en/">English</a>
						</li>
					</ul>
				</div>