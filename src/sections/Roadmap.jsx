import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "../components/design/Roadmap";
import TagLine from "../components/Tagline";
import RoadmapCard from "../components/RoadmapCard";

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we’re working on" />

            <RoadmapCard />

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="#roadmap">Our roadmap</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;