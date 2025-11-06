<template>
  <n-card class="pdf-viewer-card glass-card" hoverable :segmented="{ content: true, footer: 'soft' }" data-aos="fade-up"
    data-aos-delay="100">
    <!-- Header con controles -->
    <template #header>
      <div class="controls-bar">

        <n-space :size="12" align="center">
          <n-button @click="zoomOut" size="small" type="primary" ghost :disabled="scale <= 0.3" class="control-btn">
            <template #icon>
              <n-icon>
                <ZoomOut16Regular />
              </n-icon>
            </template>
          </n-button>

          <n-tooltip trigger="hover">
            <template #trigger>
              <div class="zoom-display">
                <n-progress type="circle" :percentage="Math.round(scale * 100)" :stroke-width="8"
                  :show-indicator="false" class="zoom-circle" />
                <span class="zoom-text">{{ Math.round(scale * 100) }}%</span>
              </div>
            </template>
            {{ 'Nivel de zoom' }}
          </n-tooltip>

          <n-button @click="zoomIn" size="small" type="primary" ghost :disabled="scale >= 3" class="control-btn">
            <template #icon>
              <n-icon>
                <ZoomIn16Regular />
              </n-icon>
            </template>
          </n-button>
        </n-space>

        <n-space :size="16" align="center" class="page-nav">
          <n-button @click="prevPage" :disabled="currentPage <= 1" size="small" type="info" ghost class="nav-btn">
            <template #icon>
              <n-icon>
                <ArrowReply16Regular />
              </n-icon>
            </template>
          </n-button>

          <div class="page-info">
            <n-input-number v-model:value="currentPage" :min="1" :max="totalPages" size="small" class="page-input"
              @update:value="goToPage" />
            <span class="page-separator">/</span>
            <strong>{{ totalPages }}</strong>
          </div>

          <n-button @click="nextPage" :disabled="currentPage >= totalPages" size="small" type="info" ghost
            class="nav-btn">
            <template #icon>
              <n-icon>
                <ArrowForward16Regular />
              </n-icon>
            </template>
          </n-button>
        </n-space>

        <n-button @click="downloadPdf" size="small" type="success" ghost class="download-btn">
          <template #icon>
            <n-icon>
              <ArrowDownload16Regular />
            </n-icon>
          </template>
          {{ $t('paginator.download') }}
        </n-button>
      </div>
    </template>

    <div class="pdf-container" data-aos="zoom-in" data-aos-delay="200">
      <canvas ref="pdfCanvas" class="pdf-canvas"
        :style="{ transform: `scale(${scale})`, transformOrigin: 'top center' }"></canvas>
    </div>

    <template #footer>
      <n-progress type="line" :percentage="pageProgress" :height="6" :show-indicator="false" class="page-progress" />
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, computed } from 'vue';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  ZoomIn16Regular,
  ZoomOut16Regular,
  ArrowReply16Regular,
  ArrowForward16Regular,
  ArrowDownload16Regular
} from '@vicons/fluent';

export default defineComponent({
  name: 'PdfViewer',
  components: {
    ZoomIn16Regular,
    ZoomOut16Regular,
    ArrowReply16Regular,
    ArrowForward16Regular,
    ArrowDownload16Regular
  },
  props: {
    pdfPath: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const pdfCanvas = ref<HTMLCanvasElement | null>(null);
    const totalPages = ref(0);
    const currentPage = ref(1);
    const scale = ref(1.0);
    const pdfDoc = ref<any>(null);


    const pageProgress = computed(() => {
      return totalPages.value > 0 ? (currentPage.value / totalPages.value) * 100 : 0;
    });


    const loadPdf = async () => {
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
        const pdf = await pdfjsLib.getDocument(props.pdfPath).promise;
        pdfDoc.value = pdf;
        totalPages.value = pdf.numPages;
        renderPage(currentPage.value);
      } catch (error) {
        console.error('Error cargando PDF:', error);
      }
    };


    const renderPage = async (pageNum: number) => {
      if (!pdfDoc.value) return;
      try {
        const page = await pdfDoc.value.getPage(pageNum);
        const viewport = page.getViewport({ scale: scale.value });
        const canvas = pdfCanvas.value;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error renderizando página:', error);
      }
    };


    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };


    const zoomIn = () => {
      if (scale.value < 3) scale.value = Math.min(scale.value + 0.2, 3);
    };

    const zoomOut = () => {
      if (scale.value > 0.3) scale.value = Math.max(scale.value - 0.2, 0.3);
    };


    const downloadPdf = () => {
      const link = document.createElement('a');
      link.href = props.pdfPath;
      link.download = props.pdfPath.split('/').pop() || 'documento.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };


    watch([currentPage, scale], () => {
      renderPage(currentPage.value);
    });

    onMounted(() => {
      loadPdf();
      AOS.init({ duration: 600, once: true });
    });

    return {
      pdfCanvas,
      totalPages,
      currentPage,
      scale,
      pageProgress,
      zoomIn,
      zoomOut,
      nextPage,
      prevPage,
      goToPage,
      downloadPdf,
      renderPage
    };
  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}


.pdf-viewer-card {
  background: rgba(15, 31, 57, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.pdf-viewer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}


.controls-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 0;
}

.control-btn,
.nav-btn,
.download-btn {
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.control-btn:hover,
.nav-btn:hover,
.download-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 16px rgba(96, 165, 250, 0.3);
}


.zoom-display {
  position: relative;
  width: 48px;
  height: 48px;
}

.zoom-circle {
  width: 48px !important;
  height: 48px !important;
}

.zoom-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  font-weight: 600;
  color: #60a5fa;
}


.page-nav {
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 16px;
  border: 1px solid rgba(96, 165, 250, 0.2);
}

.page-info {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #e2e8f0;
  font-weight: 500;
}

.page-input {
  width: 100px;
}

.page-input :deep(.n-input__input) {
  text-align: center;
  font-weight: 600;
  color: #60a5fa;
}

.page-separator {
  color: #94a3b8;
}


.pdf-container {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  margin: 1rem 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pdf-canvas {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
}


.page-progress {
  border-radius: 3px;
}

.page-progress :deep(.n-progress-custom-content) {
  display: none;
}


@media (max-width: 768px) {
  .controls-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .page-nav {
    justify-content: center;
  }

  .zoom-display {
    width: 40px;
    height: 40px;
  }

  .zoom-text {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {

  .control-btn,
  .nav-btn,
  .download-btn {
    padding: 6px 10px;
    font-size: 0.85rem;
  }

  .page-info {
    font-size: 0.9rem;
  }
}
</style>