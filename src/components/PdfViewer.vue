<template>
  <div class="card border-secondary">
    <div class="card-header">
      <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group" role="group" aria-label="First group">
          <div class="flex items-center btn-group-sm">
            <button @click="zoomOut"
              class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 btn btn-outline-dark btn-sm">
              <i class="material-icons">zoom_out</i>
            </button>
            <span class="px-4 py-2">Zoom: {{ (scale * 100).toFixed(0) }}%</span>
            <button @click="zoomIn" class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 btn btn-outline-dark btn-sm">
              <i class="material-icons">zoom_in</i>
            </button>
          </div>
        </div>
        <div class="input-group btn-group-sm">
          <div class="flex items-center">
            <button @click="prevPage" :disabled="currentPage <= 1"
              class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400 btn btn-outline-dark btn-sm">
              <i class="material-icons">arrow_back_ios</i>
            </button>
            <span class="text-lg px-4 py-2">
              Página {{ currentPage }} de {{ totalPages }}
            </span>
            <button @click="nextPage" :disabled="currentPage >= totalPages"
              class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400 btn btn-outline-dark btn-sm">
              <i class="material-icons">arrow_forward_ios</i>
            </button>
          </div>
        </div>
        <div class="btn-group btn-group-sm" role="group" aria-label="Download group">
          <button @click="downloadPdf"
            class="px-4 py-2 bg-green-500 rounded hover:bg-green-600 btn btn-outline-dark btn-sm">
            <i class="material-icons">file_download</i>
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-4 w-full">
      <canvas ref="pdfCanvas" class="border border-gray-300 mb-4 mx-auto"></canvas>
    </div>
  </div>
</template>

<script>
import * as pdfjsLib from 'pdfjs-dist';

// Configurar el worker

export default {
  mounted() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; // Ajusta la ruta si es necesario
    this.loadPdf();
  },
  name: 'PdfViewer',
  props: {
    pdfPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      totalPages: 0,
      currentPage: 1,
      scale: 1, // Agregar escala para el zoom
    };
  },
  methods: {
    async loadPdf() {
      try {
        const pdf = await pdfjsLib.getDocument(this.pdfPath).promise;  // Cargar el PDF
        this.totalPages = pdf.numPages;  // Obtener el número total de páginas
        this.renderPage(this.currentPage, pdf, this.scale);  // Renderizar la página actual
      } catch (error) {
        console.error('Error al cargar el PDF: ', error);
      }
    },
    async renderPage(pageNumber, pdf, scale) {
      try {
        const page = await pdf.getPage(pageNumber);  // Obtener la página actual
        const viewport = page.getViewport({ scale }); // Usar la escala para el viewport

        const canvas = this.$refs.pdfCanvas;  // Obtener el canvas
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;  // Renderizar la página
      } catch (error) {
        console.error('Error al renderizar la página: ', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadPdf();  // Renderizar la nueva página
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPdf();  // Renderizar la nueva página
      }
    },
    zoomIn() {
      this.scale += 0.1; // Aumentar la escala
      this.loadPdf(); // Renderizar la página actual con la nueva escala
    },
    zoomOut() {
      if (this.scale > 0.1) { // Evitar que la escala sea menor a 0.1
        this.scale -= 0.1; // Disminuir la escala
      }
      this.loadPdf(); // Renderizar la página actual con la nueva escala
    },
    downloadPdf() {
      const pdfPath = this.pdfPath; // Assuming this.pdfPath contains the URL
      const filename = pdfPath.split('/').pop(); // Get the last segment of the URL
      const link = document.createElement('a');
      link.href = this.pdfPath; // Usar la ruta del PDF
      link.download = filename; // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
canvas {
  display: block;
  /* Asegúrate de que cada canvas esté en su propia línea */
  margin: 20px 0;
  /* Espaciado entre las páginas */
  max-width: 100%;
  /* Ajusta el ancho máximo del canvas */
}
</style>