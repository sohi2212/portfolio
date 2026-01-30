import { Wave } from "../../../shared/ui/wave"
import { AboutSection } from "./sections/aboutMe"
import { ContactSection } from "./sections/contact"
import { Header } from "./sections/header"
import { IntroSection } from "./sections/intro"
import { LifeSection } from "./sections/life"
import { ProjectSection } from "./sections/projects"
import { SkillSection } from "./sections/skills"

export const ResumePage = () => {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <Wave />
                <AboutSection />
                <Wave rotate_deg="0" />
                <SkillSection />
                <Wave />
                <ProjectSection />
                <Wave rotate_deg="0" />
                <LifeSection />
                <Wave />
                <ContactSection />
            </main>
        </>

    )
}