import { frameWorks, language, tools } from '../../../../../../shared/config'
import { useOnScreen } from '../../../../../../shared/ui'
import styles from '../styles/Skills.module.css'
import { SkillCardContainer } from './CardContainer'
import { SkillCard } from './SkillCard'

export const SkillSection = () => {
    const { isVisible, ref } = useOnScreen()
    return (
        <section id="skills" ref={ref} className={styles.skills}>
            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <h3 className="title">Skills</h3>
                <div className={styles.inner}>
                    <h4>Programming Skills</h4>
                    <SkillCardContainer>
                        {language.map(i => (
                            <SkillCard name={i.text} src={i.src} key={i.text} />
                        ))}
                    </SkillCardContainer>
                    <h4>Frameworks</h4>
                    <SkillCardContainer>
                        {frameWorks.map(i => (
                            <SkillCard name={i.text} src={i.src} key={i.text} />
                        ))}
                    </SkillCardContainer>
                    <h4>Other Skills</h4>
                    <SkillCardContainer>
                        {tools.map(i => (
                            <SkillCard name={i.text} src={i.src} key={i.text} />
                        ))}
                    </SkillCardContainer>
                </div>
            </div>
        </section>
    )
}