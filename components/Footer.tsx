import Image from "next/image";
import React from "react";
import logo from "/public/Logo.webp";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<footer>
			<div className='footer lg:px-24 lg:py-8 md:p-16 p-8  mx-auto container'>
				<div className='logo'>
					<Image src={logo} width={180} height={30} alt='logo' />
					<p>
						Small, artisan label that offers a thoughtfully curated collection
						of high quality everyday essentials made.
					</p>
					<div className='icon-container'>
						<div>
							<Twitter size={20} />
						</div>
						<div>
							<Facebook size={20} />
						</div>
						<div>
							<Linkedin size={20} />
						</div>
					</div>
				</div>

				<div className='footer-links'>
					<h3>Company</h3>
					<ul>
						<li>About</li>
						<li>Terms of Use</li>
						<li>Privacy Policy</li>
						<li>How it Works</li>
						<li>Contact Us</li>
					</ul>
				</div>

				<div className='footer-links'>
					<h3>Support</h3>
					<ul>
						<li>Support Carrer</li>
						<li>24h Service</li>
						<li>Quick Chat</li>
					</ul>
				</div>

				<div className='footer-links'>
					<h3>Contact</h3>
					<ul>
						<li>Whatsapp</li>
						<li>Support 24h</li>
					</ul>
				</div>
			</div>

			<div className='copyright'>
				<p>Copyright © 2022 Dine Market</p>
				<p>
					Design by. <span>Weird Design Studio</span>
				</p>
				<p>
					Code by. <span>shaikh-piaic on github</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
