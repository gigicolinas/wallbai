"""Prepara una web estática para GitHub Pages, con dominio propio opcional."""
from pathlib import Path
from urllib.parse import urlsplit
import argparse
import html
import shutil


def build(url: str) -> Path:
    parts = urlsplit(url)
    if parts.scheme != "https" or not parts.netloc or parts.query or parts.fragment:
        raise ValueError("Indica una URL HTTPS completa, sin parámetros ni fragmentos")
    if parts.username or parts.password:
        raise ValueError("La URL no puede contener credenciales")
    url = url.rstrip("/")
    root = Path(__file__).resolve().parents[1]
    output = root / "_site"
    if output.exists():
        shutil.rmtree(output)
    output.mkdir()
    for name in ["index.html", "styles.css", "script.js", "favicon.svg", "robots.txt", ".nojekyll", "CNAME"]:
        source = root / name
        if source.is_file():
            shutil.copyfile(source, output / name)
    shutil.copytree(root / "assets", output / "assets")
    page = output / "index.html"
    content = page.read_text(encoding="utf-8")
    safe_url = html.escape(url, quote=True)
    metadata = (
        f'  <link rel="canonical" href="{safe_url}/">\n'
        f'  <meta property="og:url" content="{safe_url}/">\n'
        f'  <meta property="og:image" content="{safe_url}/assets/genadio-colinas-portada.jpg">\n'
    )
    content = content.replace("</head>", metadata + "</head>")
    page.write_text(content, encoding="utf-8")
    return output


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", required=True, help="URL de GitHub Pages o dominio propio")
    args = parser.parse_args()
    print(build(args.url))
