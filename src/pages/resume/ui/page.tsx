import { Wave } from "../../../shared/ui/wave"
import { AboutMe } from "../../../widgets/resume/aboutMe"
import { Header } from "../../../widgets/resume/header"
import { Intro } from "../../../widgets/resume/intro"
import { Projects } from "../../../widgets/resume/projects"
import { Skills } from "../../../widgets/resume/skills"

export const ResumePage = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Wave />
                <AboutMe />
                <Wave rotate_deg="0" />
                <Skills />
                <Wave />
                <Projects />
            </main>
        </>

    )
}