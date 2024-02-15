import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/vitor-holanda-05232b275/"
              target="_blank"
            >
              <img
                src="/imagens/linkedin.png"
                alt="Link do Linkedin"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/holandajvitor" target="_blank">
              <img
                src="/imagens/github.png"
                alt="Link do GitHub"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_hlnd.jv/" target="_blank">
              <img
                src="/imagens/instagram.png"
                alt="Link do Instagram"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo Organograma" />
      </section>
      <section>
        <p>
          Desenvolvido por <strong>Vitor Holanda</strong>.
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
