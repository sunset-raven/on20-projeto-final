import styles from '../styles/pages/sobre.module.css'
import myBestPic from '../assets/melhor-foto-que-tenho.png'
import githubLogo from '../assets/github.logo.png'
import linkedinLogo from '../assets/linkedin.logo.png'
import instagramLogo from '../assets/instagram.logo.png'

export function Sobre() {

    return (
        <div className={styles.sobre}>
            <img className={styles.myBestPic} src={myBestPic} />
            <div className={styles.introduction}>
                <p>Andréa Vetter é advogada de formação, buscando transição de carreira para a área de desenvolvimento front-end. Faz parte da turma On20 do bootcamp "Todas em Tech" da Reprograma.</p>


                <p>Pensou o atual projeto por conhecer alguns desafios relacionados a pessoas trans no Brasil. Para além do atendimento para a transição física, pouco se avançou no que tange o acompanhamento de saúde mental. É importante perceber neste ponto que se trata mais de uma necessidade dada pela transfobia de nossa sociedade muito mais do que qualquer aflição mental relacionada a transição.</p>
            </div>
            <div className={styles.linksMaster}>
                <a href="https://github.com/sunset-raven" target="_blank"><img className={styles.links} src={githubLogo} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/andrea-vetter-49727a259/" target="_blank"><img className={styles.links} src={linkedinLogo} alt="linkedin logo"/></a>
                <a href="https://www.instagram.com/andreav.raven/" target="_blank"><img className={styles.links}src={instagramLogo} alt="instagram logo"/></a>
            </div>
        </div>
    )
}