const COLOR_TOKENS = [
  {
    name: 'azulPex',
    hex: '#0573E4',
    usage: 'Color primario, botones principales, íconos activos',
    className: 'bg-azulPex',
    textClass: 'text-white',
  },
  {
    name: 'azulSecondPex',
    hex: '#4A72BF',
    usage: 'Azul secundario',
    className: 'bg-azulSecondPex',
    textClass: 'text-white',
  },
  {
    name: 'deepBluePex',
    hex: '#034A80',
    usage: 'Azul oscuro',
    className: 'bg-deepBluePex',
    textClass: 'text-white',
  },
  {
    name: 'textoBasicoPex',
    hex: '#405478',
    usage: 'Texto principal',
    className: 'bg-textoBasicoPex',
    textClass: 'text-white',
  },
  {
    name: 'textoSeleccionadoPex',
    hex: '#719BE0',
    usage: 'Texto seleccionado',
    className: 'bg-textoSeleccionadoPex',
    textClass: 'text-white',
  },
  {
    name: 'bordePex',
    hex: '#D6DBE1',
    usage: 'Bordes, separadores',
    className: 'bg-bordePex',
    textClass: 'text-textoBasicoPex',
  },
  {
    name: 'secondFondoPex',
    hex: '#F9F9F9',
    usage: 'Fondo de páginas, cards secundarios',
    className: 'bg-secondFondoPex',
    textClass: 'text-textoBasicoPex',
  },
  {
    name: 'blancoPex',
    hex: '#F7FBFE',
    usage: 'Blanco con tinte azul',
    className: 'bg-blancoPex',
    textClass: 'text-textoBasicoPex',
  },
  {
    name: 'blancoSecondPex',
    hex: '#F5FAFE',
    usage: 'Blanco alternativo',
    className: 'bg-blancoSecondPex',
    textClass: 'text-textoBasicoPex',
  },
]

const EXTRA_COLORS = [
  {
    name: 'placeHolder',
    hex: '#D6D6D6',
    usage: 'Placeholders de inputs',
    className: 'bg-placeHolder',
    textClass: 'text-textoBasicoPex',
  },
  {
    name: 'errorColor',
    hex: '#C65962',
    usage: 'Errores',
    className: 'bg-errorColor',
    textClass: 'text-white',
  },
  {
    name: 'buttonOutlineRed',
    hex: '#CF5786',
    usage: 'Botones de peligro/outline rojo',
    className: 'bg-buttonOutlineRed',
    textClass: 'text-white',
  },
]

const COMPONENT_PATTERNS = [
  {
    title: 'Card de servicio / favorito',
    classes:
      'rounded-xl border border-bordePex/50 border-l-4 border-l-azulPex bg-white p-4 shadow-sm transition-all hover:border-azulPex/30 hover:shadow-md',
  },
  {
    title: 'Card de categoría',
    classes:
      'rounded-2xl border border-bordePex/50 bg-white p-6 shadow-sm hover:border-azulPex/30 hover:bg-azulPex/5',
  },
  {
    title: 'Ícono en círculo',
    classes:
      'flex size-12 items-center justify-center rounded-xl bg-azulPex/10 text-azulPex',
  },
  {
    title: 'Estado vacío',
    classes:
      'rounded-xl border border-dashed border-bordePex bg-white px-6 py-12 text-center',
  },
  {
    title: 'Input de búsqueda',
    classes:
      'rounded-2xl border border-bordePex bg-white py-4 pl-12 pr-4 text-textoBasicoPex placeholder:text-textoBasicoPex/50 focus:border-azulPex focus:ring-2 focus:ring-azulPex/20',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-secondFondoPex text-textoBasicoPex">
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-6 md:px-6">
        <section className="space-y-2">
          <h1 className="text-2xl font-bold text-textoBasicoPex">
            Documentación UX Paylink
          </h1>
          <p className="text-sm text-textoBasicoPex/70">
            Referencia rápida de colores, patrones y componentes para mantener
            consistencia visual en el desarrollo de interfaces.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
              Colores principales
            </h2>
            <span className="text-xs text-textoBasicoPex/50">
              Tokens Tailwind + hex
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {COLOR_TOKENS.map((color) => (
              <div
                key={color.name}
                className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex size-16 items-center justify-center rounded-lg ${color.className}`}
                  >
                    <span className={`text-xs font-semibold ${color.textClass}`}>
                      Aa
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-textoBasicoPex">
                      {color.name}
                    </p>
                    <p className="text-xs text-textoBasicoPex/60">
                      {color.hex} · {color.usage}
                    </p>
                    <p className="text-xs text-textoBasicoPex/50">
                      Clase: <span className="font-mono">{color.className}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
              Colores adicionales
            </h2>
            <span className="text-xs text-textoBasicoPex/50">
              Estados y soporte
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {EXTRA_COLORS.map((color) => (
              <div
                key={color.name}
                className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex size-16 items-center justify-center rounded-lg ${color.className}`}
                  >
                    <span className={`text-xs font-semibold ${color.textClass}`}>
                      Aa
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-textoBasicoPex">
                      {color.name}
                    </p>
                    <p className="text-xs text-textoBasicoPex/60">
                      {color.hex} · {color.usage}
                    </p>
                    <p className="text-xs text-textoBasicoPex/50">
                      Clase: <span className="font-mono">{color.className}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
            Patrones de componentes
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {COMPONENT_PATTERNS.map((pattern) => (
              <div
                key={pattern.title}
                className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-textoBasicoPex">
                  {pattern.title}
                </p>
                <p className="mt-2 rounded-lg bg-secondFondoPex px-3 py-2 text-[11px] text-textoBasicoPex/80">
                  {pattern.classes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
            Ejemplos rápidos
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-textoBasicoPex">
                Botón primario
              </p>
              <button
                type="button"
                className="mt-3 rounded-xl bg-azulPex px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-azulPex/90"
              >
                Pagar servicio
              </button>
            </div>
            <div className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-textoBasicoPex">
                Tarjeta con borde destacado
              </p>
              <div className="mt-3 rounded-xl border border-bordePex/50 border-l-4 border-l-azulPex bg-white p-4">
                <p className="text-sm font-semibold text-textoBasicoPex">
                  Favorito destacado
                </p>
                <p className="text-xs text-textoBasicoPex/60">
                  Usa `border-l-azulPex` para resaltar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
            Vista previa de componentes
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-textoBasicoPex">
                ProviderList (card)
              </p>
              <div className="mt-3 rounded-xl border border-bordePex/50 border-l-4 border-l-azulPex bg-white p-4">
                <p className="text-sm font-semibold text-textoBasicoPex">
                  Proveedor destacado
                </p>
                <p className="text-xs text-textoBasicoPex/60">
                  Pago de servicio básico
                </p>
                <p className="mt-1 text-[11px] text-textoBasicoPex/50">
                  Código: 0103038
                </p>
              </div>
              <p className="mt-3 text-xs text-textoBasicoPex/60">
                Código Tailwind:
              </p>
              <p className="mt-1 rounded-lg bg-secondFondoPex px-3 py-2 text-[11px] text-textoBasicoPex/80">
                rounded-xl border border-bordePex/50 border-l-4 border-l-azulPex
                bg-white p-4
              </p>
            </div>

            <div className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-textoBasicoPex">
                EditFavoriteModal (contenido)
              </p>
              <div className="mt-3 rounded-xl border border-bordePex/50 bg-white p-4">
                <p className="text-sm font-semibold text-textoBasicoPex">
                  Editar favorito
                </p>
                <div className="mt-3 space-y-2">
                  <div className="rounded-xl border border-bordePex px-3 py-2 text-xs text-textoBasicoPex/60">
                    Nombre del favorito
                  </div>
                  <div className="rounded-xl border border-bordePex px-3 py-2 text-xs text-textoBasicoPex/60">
                    Descripción del favorito
                  </div>
                  <div className="flex gap-2 pt-2">
                    <div className="flex-1 rounded-xl border border-bordePex bg-white px-3 py-2 text-center text-xs font-semibold text-textoBasicoPex">
                      Cancelar
                    </div>
                    <div className="flex-1 rounded-xl bg-azulPex px-3 py-2 text-center text-xs font-semibold text-white">
                      Guardar
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-textoBasicoPex/60">
                Código Tailwind:
              </p>
              <p className="mt-1 rounded-lg bg-secondFondoPex px-3 py-2 text-[11px] text-textoBasicoPex/80">
                rounded-xl border border-bordePex/50 bg-white p-4 · inputs:
                rounded-xl border border-bordePex px-3 py-2 text-xs · botones:
                rounded-xl border border-bordePex bg-white px-3 py-2 text-xs
                font-semibold / bg-azulPex text-white
              </p>
            </div>

            <div className="rounded-xl border border-bordePex/50 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-textoBasicoPex">
                ConfirmActionModal (contenido)
              </p>
              <div className="mt-3 rounded-xl border border-bordePex/50 bg-white p-4">
                <p className="text-sm font-semibold text-textoBasicoPex">
                  ¿Quitar de mis favoritos?
                </p>
                <p className="mt-2 text-xs text-textoBasicoPex/60">
                  Confirma si deseas eliminar este favorito.
                </p>
                <div className="mt-3 flex gap-2">
                  <div className="flex-1 rounded-xl border border-bordePex bg-white px-3 py-2 text-center text-xs font-semibold text-textoBasicoPex">
                    Cancelar
                  </div>
                  <div className="flex-1 rounded-xl bg-red-500 px-3 py-2 text-center text-xs font-semibold text-white">
                    Quitar
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-textoBasicoPex/60">
                Código Tailwind:
              </p>
              <p className="mt-1 rounded-lg bg-secondFondoPex px-3 py-2 text-[11px] text-textoBasicoPex/80">
                rounded-xl border border-bordePex/50 bg-white p-4 · botones:
                rounded-xl border border-bordePex bg-white px-3 py-2 text-xs
                font-semibold / bg-red-500 text-white
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-textoBasicoPex/70">
            Resumen Tailwind usado
          </h2>
          <div className="rounded-xl border border-bordePex/50 bg-white p-4 text-sm text-textoBasicoPex/70 shadow-sm">
            <p className="font-semibold text-textoBasicoPex">Layout y spacing</p>
            <p className="mt-1">
              `max-w-5xl`, `mx-auto`, `px-4`, `py-6`, `space-y-8`, `gap-4`
            </p>
            <p className="mt-3 font-semibold text-textoBasicoPex">
              Tipografía y color
            </p>
            <p className="mt-1">
              `text-textoBasicoPex`, `text-textoBasicoPex/60`,
              `text-textoBasicoPex/70`, `text-azulPex`, `text-white`
            </p>
            <p className="mt-3 font-semibold text-textoBasicoPex">
              Contenedores y cards
            </p>
            <p className="mt-1">
              `rounded-xl`, `border`, `border-bordePex/50`, `bg-white`,
              `shadow-sm`, `border-l-4`, `border-l-azulPex`
            </p>
            <p className="mt-3 font-semibold text-textoBasicoPex">
              Botones y estados
            </p>
            <p className="mt-1">
              `bg-azulPex`, `hover:bg-azulPex/90`, `transition-all`
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-bordePex/60 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3 text-[11px] text-textoBasicoPex/60 md:px-6">
          <span>© {new Date().getFullYear()} unlinks. All rights reserved.</span>
          <span className="mx-2">·</span>
          <a
            href="https://oscoco.github.io/newprofile/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-azulPex hover:text-azulPex/80"
          >
            by: oscoco.dev
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
