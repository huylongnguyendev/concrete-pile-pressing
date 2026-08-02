import { createFileRoute } from "@tanstack/react-router";
import { About } from "#/components/sections/About";
import { Features } from "#/components/sections/Features";
import { Hero } from "#/components/sections/Hero";
import { Projects } from "#/components/sections/Projects";
import { Services } from "#/components/sections/Services";
import { Process } from "#/components/sections/Process";
import { Testimonials } from "#/components/sections/Testimonials";
import { Faq } from "#/components/sections/Faq";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Projects />
			<Process />
			<Features />
			<Testimonials />
			<Faq />
		</>
	);
}
