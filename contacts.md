---
layout: page
title: Contact Me
nav-menu: true
image: assets/images/tiles/contacts.jpg
position: 1
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="social"  class="background-accent3">
	<div class="inner">
		<div class="row">
			<div class="6u 12u$(small)">
				<header class="major">
					<h1>Social</h1>
				</header>
				<ul class="social_custom">
					{% if site.twitter_url %}
					<li><a href="{{ site.twitter_url }}" class="icon alt fa-twitter" target="_blank"><span >	&nbsp;Twitter</span></a> </li>
					{% endif %}
					{% if site.googleplus_url %}
					<li><a href="{{ site.googleplus_url }}" class="icon alt fa-google-plus" target="_blank"><span >	&nbsp;Google+</span></a></li>
					{% endif %}
					{% if site.facebook_url %}
					<li><a href="{{ site.facebook_url }}" class="icon alt fa-facebook" target="_blank"><span >	&nbsp;Facebook</span></a></li>
					{% endif %}
					{% if site.instagram_url %}
					<li><a href="{{ site.instagram_url }}" class="icon alt fa-instagram" target="_blank"><span >	&nbsp;Instagram</span></a></li>
					{% endif %}
					{% if site.pinterest_url %}
					<li><a href="{{ site.pinterest_url }}" class="icon alt fa-pinterest" target="_blank"><span >	&nbsp;Pinterest</span></a></li>
					{% endif %}
					{% if site.gitlab_url %}
					<li><a href="{{ site.gitlab_url }}" class="icon alt fa-gitlab" target="_blank"><span >	&nbsp;GitLab</span></a></li>
					{% endif %}
					{% if site.github_url %}
					<li><a href="{{ site.github_url }}" class="icon alt fa-github" target="_blank"><span >	&nbsp;GitHub</span></a></li>
					{% endif %}
					{% if site.slack_url %}
					<li><a href="{{ site.slack_url }}" class="icon alt fa-slack" target="_blank"><span >	&nbsp;Slack</span></a></li>
					{% endif %}
					{% if site.linkedin_url %}
					<li><a href="{{ site.linkedin_url }}" class="icon alt fa-linkedin" target="_blank"><span >	&nbsp;LinkedIn</span></a></li>
					{% endif %}
				</ul>
			</div>	
			<div class="6u 12u$(small)">
				<header class="major">
					<h1>External links</h1>
				</header>
				<ul>
					<li><a href="https://ei.is.tuebingen.mpg.de/person/gvisona" target="_blank">MPI-IS profile page</a></li>
					<li><a href="https://mlfpm.eu/projects-and-students/" target="_blank">MLFPM projects and students</a></li>
					<li><a href="https://epi-logos.com/people/" target="_blank">Epi-Logos members</a></li>
					<li><a href="https://scholar.google.com/citations?user=rKTQxfkAAAAJ" target="_blank">Google Scholar profile</a></li>
				</ul>
			</div>	
		</div>
    </div>
</section>


<!-- Contact -->
<section id="contact"  class="background-accent6">
	<div class="inner">
		<section>
		<header class="major">
			<h1>Send me a message</h1>
			<h3><a id="contact-link" href="" onclick="decodeEmail()"><i class="fa fa-solid fa-link"></i> Contact me via email</a></h3>
		</header>
			<p>For any research or business inquiry contact me via email or on my social accounts.</p>
		</section>
		<section class="split">
			<!-- <section>
				<div class="contact-method">
					<span class="icon alt fa-envelope"></span>
					<h3>Email</h3>
					<a href="mailto:{{ site.email }}">{{ site.email }}</a>
					{% if site.additional_email %}
						<a href="mailto:{{ site.additional_email }}">{{ site.additional_email }}</a>
					{% endif %}
				</div>
			</section> -->
			<!-- <section>
				<div class="contact-method">
					<span class="icon alt fa-phone"></span>
					<h3>Phone</h3>
					<span>{{ site.phone }}</span>
				</div>
			</section> -->
			<section>
				<div class="contact-method">
					<span class="icon alt fa-building"></span>
					<h3>Institutional Address</h3>
					<span>
					{% if site.institution %}
					    <b>{{ site.institution }}</b><br />
					{% endif %}
					{% if site.street_address %}
					    {{ site.street_address }}<br />
					{% endif %}
					{% if site.city %}
					    {{ site.city }},
					{% endif %}
					{% if site.state %}
					    {{ site.state }} 
					{% endif %}
					{% if site.zip_code %}
					    {{ site.zip_code }}<br />
					{% endif %}
					{% if site.country %}
					    {{ site.country }}
					{% endif %}
					</span>
				</div>
			</section>
		</section>
	</div>
</section>



</div>
