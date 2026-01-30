import { ProjectCard } from './Card'
import styles from '../styles/Projects.module.css'
import { Slider, useOnScreen } from '../../../../../../shared/ui'

export const ProjectSection = () => {
    const { isVisible, ref } = useOnScreen()
    return (
        <section id='projects' ref={ref} className={styles.projects}>
            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <h3 className='title'>Projects</h3>
                <Slider card={[
                    <ProjectCard name='onuSubscriberBot' src='/nest.logo.svg' stack={['ts', 'ci/cd', 'react', 'nestjs']} url='https://github.com/sohi2212/onuSubscriberBot' alt='NestJs logo' />,
                    <ProjectCard name='template-js-spa' src='/js.logo.png' stack={['js']} url='https://github.com/sohi2212/template-js-spa-' alt='JS logo' />,
                    <ProjectCard name='AmneziaWG-API Docks' src='/amnezia.logo.svg' stack={['docs']} url='https://github.com/sohi2212/AmneziaWG-API' alt='AmneziaWG logo' />,
                    <ProjectCard name='Monitoring System Web' src='/react.logo.png' stack={['react', 'ts', 'vite']} url='https://github.com/sohi2212/IstranetMonitor/tree/main/monitor-client' alt='React Logo' />,
                    <ProjectCard name='Monitoring System Backend' src='/nest.logo.svg' stack={['ts', 'nest', 'prisma', 'mysql']} url='https://github.com/sohi2212/IstranetMonitor/tree/main/monitor-server' alt='NestJS Logo' />,
                    <ProjectCard name='Portfolio' src='/react.logo.png' stack={['ts', 'react', 'css module', 'vite']} url='https://github.com/sohi2212/portfolio' alt='React Logo' />
                ]} />
            </div>
        </section>
    )
}