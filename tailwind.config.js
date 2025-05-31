tailwind.config = {
  theme: {
    extend: {
      colors: {
        primario: '#0F172A',       // Azul petróleo oscuro
        secundario: '#1E293B',     // Gris grafito
        acento: '#3B82F6',         // Azul acero
        fondo: '#FFFFFF',          // Fondo blanco
        texto: '#334155',          // Gris carbón (texto principal)
        textoSuave: '#64748B',     // Gris ceniza (texto secundario)
        sombra: '#111827',         // Gris muy oscuro (bordes, sombras)
        exito: '#22C55E',          // Verde profesional
        advertencia: '#EAB308',    // Amarillo dorado
        error: '#DC2626',          // Rojo elegante
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],        // Para títulos y UI
        cuerpo: ['Roboto', 'sans-serif'],     // Para párrafos
      },
    },
  },
  plugins: [],
}
