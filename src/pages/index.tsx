import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const coverImage = useBaseUrl("img/book_cover_leticia_coelho.jpeg");
  const astronautImage = useBaseUrl("img/dirty_code_11.svg");
  const stampImage = useBaseUrl("img/go-horse.jpg");
  return (
    <Layout
      title="Código Sujo"
      description="Um tutorial reverso de más práticas de programação"
    >
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroNoise} />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>[ SISTEMA DE CONTENÇÃO // ONLINE ]</p>
            <h1>
              CÓDIGO
              <br />
              <span>SUJO</span>
            </h1>
            <p className={styles.intro}>
              O anti-manual que transforma más práticas em conhecimento útil.
              Entre por sua conta e risco.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Iniciar contaminação <span>↗</span>
              </Link>
              <a className={styles.textButton} href="#manifesto">
                Ver o manifesto <span>↓</span>
              </a>
            </div>
          </div>
          <div className={styles.coverFrame}>
            <span className={styles.coverLabel}>
              ARQUIVO 001 / LETÍCIA COELHO
            </span>
            <img
              src={coverImage}
              alt="Galáxia roxa com lixo em órbita e um astronauta"
            />
            <img
              className={styles.astronaut}
              src={astronautImage}
              alt="Astronauta flutuando"
            />
            <span className={styles.orbitLine} />
          </div>
          <div className={styles.coordinates}>
            -23.5505° S<br />
            46.6333° W
          </div>
        </section>

        <section className={styles.manifesto} id="manifesto">
          <div className={styles.sectionIndex}>01 / MANIFESTO</div>
          <div className={styles.manifestoText}>
            <p className={styles.eyebrow}>UM TUTORIAL REVERSO</p>
            <h2>
              Aprender pelo
              <br />
              <em>contraste.</em>
            </h2>
            <p>
              Todo dev já escreveu código sujo alguma vez. Aqui, nós tornamos
              isso oficial: exemplos desastrosos, explicações sarcásticas e a
              revelação de por que tudo está totalmente errado.
            </p>
            <Link className={styles.arrowLink} to="/docs/intro">
              Conheça o projeto <span>→</span>
            </Link>
          </div>
          <div className={styles.quoteBlock}>
            <span>“</span>
            <p>
              Se tá funcionando,
              <br />
              não mexe.
            </p>
            <small>— todo desenvolvedor que já existiu</small>
          </div>
        </section>

        <section className={styles.dangerZone}>
          <div className={styles.sectionIndex}>02 / SINAIS VITAIS</div>
          <div className={styles.dangerHeader}>
            <div>
              <p className={styles.eyebrow}>MONITORAMENTO EM TEMPO REAL</p>
              <h2>O gráfico da produtividade</h2>
            </div>
            <p className={styles.status}>
              <i /> SISTEMA INSTÁVEL
            </p>
          </div>
          <div
            className={styles.chart}
            aria-label="Gráfico invertido mostrando a produtividade caindo enquanto o código sujo aumenta"
          >
            <div className={styles.chartY}>
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>
            <div className={styles.chartGrid}>
              <span className={styles.chartLine} />
              <span className={styles.chartLine} />
              <span className={styles.chartLine} />
              <span className={styles.chartLine} />
              <div className={styles.chartPath} />
              <b className={styles.chartPoint}>-87%</b>
            </div>
            <div className={styles.chartX}>
              <span>segunda</span>
              <span>terça</span>
              <span>quarta</span>
              <span>quinta</span>
              <span>deploy</span>
            </div>
          </div>
          <div className={styles.chartLegend}>
            <span>
              <i className={styles.purpleDot} /> produtividade
            </span>
            <span>
              <i className={styles.redDot} /> quantidade de gambiarra
            </span>
          </div>
        </section>

        <section className={styles.chapters}>
          <div className={styles.sectionIndex}>03 / ZONA DE IMPACTO</div>
          <div className={styles.chapterHeading}>
            <div>
              <p className={styles.eyebrow}>CAPÍTULOS SELECIONADOS</p>
              <h2>
                Escolha seu
                <br />
                <em>veneno.</em>
              </h2>
            </div>
            <Link
              className={styles.circleButton}
              to="/docs/chapters"
              aria-label="Abrir capítulos"
            >
              ↗
            </Link>
          </div>
          <div className={styles.chapterList}>
            <Link to="/docs/chapter-1">
              <span>01</span>
              <strong>Fácil de quebrar</strong>
              <small>O básico da destruição</small>
              <b>↗</b>
            </Link>
            <Link to="/docs/chapters">
              <span>02</span>
              <strong>Movido a gambiarra</strong>
              <small>Escalabilidade? Talvez.</small>
              <b>↗</b>
            </Link>
            <Link to="/docs/chapters">
              <span>03</span>
              <strong>Foque no desespero</strong>
              <small>Testes? Documentação?</small>
              <b>↗</b>
            </Link>
          </div>
        </section>
        <div className={styles.bug} aria-hidden="true">
          <span>BUG_404</span>◈
        </div>
        <footer className={styles.stampFooter}>
          <span>FIM DA TRANSMISSÃO // 2026</span>
          <img src={stampImage} alt="Selo de aprovação Go Horse" />
          <span>
            APROVADO PELO COMITÊ
            <br />
            DE MÁS DECISÕES
          </span>
        </footer>
      </main>
    </Layout>
  );
}
