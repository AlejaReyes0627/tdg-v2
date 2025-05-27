<template>
  <n-card class="pdf-viewer-card" bordered>
    <template #header>
      <n-space justify="space-between" align="center">
        <n-space>
          <n-button @click="zoomOut" size="small" type="info">
            <template #icon>
              <n-icon>
                <ZoomOut16Regular />
              </n-icon>
            </template>
            Zoom: {{ (scale * 100).toFixed(0) }}%
          </n-button>
          <n-button @click="zoomIn" size="small" type="info">
            <template #icon>
              <n-icon>
                <ZoomIn16Regular />
              </n-icon>
            </template>
          </n-button>
        </n-space>
        <n-space>
          <n-button @click="prevPage" :disabled="currentPage <= 1" size="small" type="info">
            <template #icon>
              <n-icon>
                <ArrowReply16Regular />
              </n-icon>
            </template>
          </n-button>
          <span>
            {{ $t('paginator.page') }} {{ currentPage }} {{ $t('paginator.of') }} {{ totalPages }}
          </span>
          <n-button @click="nextPage" :disabled="currentPage >= totalPages" size="small" type="info">
            <template #icon>
              <n-icon>
                <ArrowForward16Regular />
              </n-icon>
            </template>
          </n-button>
        </n-space>
        <n-button @click="downloadPdf" size="small" type="info">
          <template #icon>
            <n-icon>
              <ArrowDownload16Regular />
            </n-icon>
          </template>
          {{ $t('paginator.download') }}
        </n-button>
      </n-space>
    </template>

    <div class="flex justify-center mb-4 w-full">
      <canvas ref="pdfCanvas" class="border border-gray-300 mb-4 mx-auto"></canvas>
    </div>
  </n-card>
</template>

<script>
import * as pdfjsLib from 'pdfjs-dist';
import {
  NCard,
  NSpace,
  NButton,
  NIcon
} from 'naive-ui';
import {
  ZoomIn16Regular,
  ZoomOut16Regular,
  ArrowReply16Regular,
  ArrowForward16Regular,
  ArrowDownload16Regular
} from '@vicons/fluent';

export default {
  name: 'PdfViewer',
  components: {
    NCard,
    NSpace,
    NButton,
    NIcon,
    ZoomIn16Regular,
    ZoomOut16Regular,
    ArrowReply16Regular,
    ArrowForward16Regular,
    ArrowDownload16Regular
  },
  mounted() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    this.loadPdf();
  },
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
      scale: 1,
    };
  },
  methods: {
    async loadPdf() {
      try {
        const pdf = await pdfjsLib.getDocument(this.pdfPath).promise;
        this.totalPages = pdf.numPages;
        this.renderPage(this.currentPage, pdf, this.scale);
      } catch (error) {
        console.error('Error al cargar el PDF: ', error);
      }
    },
    async renderPage(pageNumber, pdf, scale) {
      try {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const canvas = this.$refs.pdfCanvas;
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error al renderizar la página: ', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadPdf();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPdf();
      }
    },
    zoomIn() {
      this.scale += 0.1;
      this.loadPdf();
    },
    zoomOut() {
      if (this.scale > 0.1) {
        this.scale -= 0.1;
      }
      this.loadPdf();
    },
    downloadPdf() {
      const pdfPath = this.pdfPath;
      const filename = pdfPath.split('/').pop();
      const link = document.createElement('a');
      link.href = this.pdfPath;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.pdf-viewer-card {
  margin: 20px 0;
}

canvas {
  display: block;
  margin: 20px 0;
  max-width: 100%;
}
</style>