export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-4" style={{ backgroundColor: 'var(--bg-section)' }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
        <p className="mb-0 text-muted-soft small">
          © {year} Eduardo Lemus. Todos los derechos reservados.
        </p>
        <div className="d-flex gap-3">
          <a
            href="/file/CV-dev0103_compressed.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-accent text-decoration-none small fw-semibold"
          >
            Descargar CV
          </a>
          <a
            href="https://wa.me/50251347064"
            target="_blank"
            rel="noreferrer"
            className="text-accent text-decoration-none small fw-semibold"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/lzelly3131"
            target="_blank"
            rel="noreferrer"
            className="text-accent text-decoration-none small fw-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
