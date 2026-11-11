    # Reporte de Hallazgos de Seguridad

## 1. Hallazgo SAST (Semgrep)
- **Vulnerabilidad:** Inyección SQL por concatenación de variables.
- **Archivo:** `index.js`
- **Severidad:** Alta
- **Evidencia:** Semgrep detectó que la variable `id` ingresa directamente a la consulta SQL sin parametrización ni sanitización.

## 2. Hallazgo de Secretos (Gitleaks)
- **Vulnerabilidad:** Token hardcodeado (Secreto expuesto en el código fuente).
- **Archivo:** `index.js`
- **Severidad:** Crítica
- **Evidencia:** Gitleaks identificó un token de acceso expuesto en texto plano (`ghp_...`).