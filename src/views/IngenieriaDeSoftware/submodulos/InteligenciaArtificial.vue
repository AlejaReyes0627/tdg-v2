<template>
  <div class="page-wrapper">

    <!-- ═══════════════════════════════════════════════════════
         HERO
    ════════════════════════════════════════════════════════════ -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-glow"></div>

      <div class="hero-center">
        <div class="container hero-content">
          <div class="hero-badge" data-aos="fade-down" data-aos-delay="100">
            <span class="badge-dot"></span>
            {{ $t('ai_page.badge') }}
          </div>

          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
            {{ $t('ai_page.hero_title') }}
            <span class="hero-title-accent">{{ $t('ai_page.hero_accent') }}</span>
          </h1>

          <p class="hero-text" data-aos="fade-up" data-aos-delay="300">
            {{ $t('ai_page.hero_text') }}
          </p>

          <div data-aos="fade-up" data-aos-delay="400">
            <button class="cta-btn" @click="scrollToSection('chatbot')">
              <n-icon :component="SparklesOutline" size="18" />
              {{ $t('ai_page.btn_chat') }}
            </button>
          </div>
        </div>
      </div>

      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         CHATBOT IA
    ════════════════════════════════════════════════════════════ -->
    <section id="chatbot" class="content-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="ChatbubbleEllipsesOutline" size="14" />
            {{ $t('ai_page.chatbot_chip') }}
          </div>
          <h2 class="section-title">{{ $t('ai_page.chatbot_title') }}</h2>
          <p class="section-subtitle">{{ $t('ai_page.chatbot_subtitle') }}</p>
        </div>

        <div class="chatbot-card glass-card" data-aos="fade-up" data-aos-delay="100">
          <!-- Chat container -->
          <div class="chat-wrapper">
            <div class="chat-messages" ref="messagesContainer">
              <div
                v-for="(msg, i) in messages"
                :key="i"
                :class="['message', msg.role]"
              >
                <div class="message-avatar" :class="msg.role === 'assistant' ? 'avatar-ai' : 'avatar-user'">
                  <n-icon v-if="msg.role === 'assistant'" :component="ChatboxEllipsesOutline" size="16" />
                  <n-icon v-else :component="PersonOutline" size="16" />
                </div>
                <div class="message-bubble" :class="msg.role">
                  <div class="message-text" v-html="msg.content"></div>
                </div>
              </div>

              <!-- Typing indicator -->
              <div v-if="loading" class="message assistant">
                <div class="message-avatar avatar-ai">
                  <n-icon :component="ChatboxEllipsesOutline" size="16" />
                </div>
                <div class="message-bubble assistant">
                  <div class="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input -->
            <div class="chat-input-bar">
              <n-input
                v-model:value="userInput"
                :placeholder="$t('ai_page.input_placeholder')"
                @keydown.enter="sendMessage"
                :disabled="loading"
                class="chat-input"
                size="large"
              />
              <button class="send-btn" @click="sendMessage" :disabled="loading">
                {{ $t('ai_page.send_btn') }}
                <n-icon :component="SendOutline" size="20" />
              </button>
            </div>
          </div>

          <!-- Código de implementación -->
          <n-collapse class="impl-collapse">
            <n-collapse-item title="🔧 Ver implementación (100% Gratis, sin clave)">
              <div class="code-block-wrapper">
                <div class="code-label">Bash – Sin registro requerido</div>
                <pre class="code-block"><code>{{ hfNoKey }}</code></pre>
              </div>
              <div class="code-block-wrapper">
                <div class="code-label">JavaScript – Llamada a la API</div>
                <pre class="code-block"><code>{{ vueHFCode }}</code></pre>
              </div>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         IA PERSONAL VS EMPRESARIAL
    ════════════════════════════════════════════════════════════ -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="GitCompareOutline" size="14" />
            Comparativa 2025
          </div>
          <h2 class="section-title">IA Personal vs Empresarial</h2>
          <p class="section-subtitle">Herramientas disponibles para cada necesidad</p>
        </div>

        <div class="ia-table-card glass-card" data-aos="fade-up" data-aos-delay="100">
          <n-data-table
            :columns="iaColumns"
            :data="iaData"
            class="ia-table"
          />
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         USOS POR LENGUAJE
    ════════════════════════════════════════════════════════════ -->
    <section class="content-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-blue">
            <n-icon :component="CodeSlashOutline" size="14" />
            Por Tecnología
          </div>
          <h2 class="section-title">IA en Desarrollo por Lenguaje</h2>
          <p class="section-subtitle">Explora cómo integrar IA en tu stack tecnológico</p>
        </div>

        <div class="lang-grid">
          <div
            v-for="(lang, i) in languages"
            :key="i"
            class="lang-card glass-card"
            :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="i * 100"
          >
            <div class="lang-accent-bar" :style="{ background: lang.gradient }"></div>
            <div class="lang-header">
              <div class="lang-icon" :style="{ background: lang.gradient }">
                <n-icon :component="lang.icon" size="36" color="white" />
              </div>
              <div>
                <span class="lang-label">Lenguaje</span>
                <h3 class="lang-title">{{ lang.name }}</h3>
              </div>
            </div>

            <p class="lang-desc">{{ lang.desc }}</p>

            <n-collapse class="lang-collapse">
              <n-collapse-item title="Librerías y dependencias">
                <div class="lib-list">
                  <div v-for="(lib, j) in lang.libs" :key="j" class="lib-item">
                    <strong class="lib-name">{{ lib.name }}</strong>
                    <span class="lib-desc">{{ lib.desc }}</span>
                    <code class="lib-dep">{{ lib.dependency }}</code>
                  </div>
                </div>
              </n-collapse-item>
              <n-collapse-item title="Ejemplo de código">
                <pre class="code-block lang-code"><code>{{ lang.example }}</code></pre>
              </n-collapse-item>
            </n-collapse>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMPT ENGINEERING MASTERCLASS -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="SparklesOutline" size="14" />
            Ingeniería de Prompts
          </div>
          <h2 class="section-title">Prompt Engineering para Desarrolladores</h2>
          <p class="section-subtitle">Aprende a comunicarte eficazmente con modelos de lenguaje (LLMs)</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="glass-card prompt-card" data-aos="fade-up" data-aos-delay="100">
            <div class="prompt-num">1</div>
            <h3>Rol / Contexto</h3>
            <p>Define claramente quién debe ser la IA (ej. "Actúa como un arquitecto senior en Vue 3 y TypeScript").</p>
          </div>
          <div class="glass-card prompt-card" data-aos="fade-up" data-aos-delay="200">
            <div class="prompt-num">2</div>
            <h3>Tarea Específica</h3>
            <p>Detalla exactamente la función o solución requerida sin ambigüedades.</p>
          </div>
          <div class="glass-card prompt-card" data-aos="fade-up" data-aos-delay="300">
            <div class="prompt-num">3</div>
            <h3>Restricciones</h3>
            <p>Especifica qué NO debe hacer (ej. "No uses jQuery, usa solo Composition API pura").</p>
          </div>
          <div class="glass-card prompt-card" data-aos="fade-up" data-aos-delay="400">
            <div class="prompt-num">4</div>
            <h3>Formato de Salida</h3>
            <p>Pide respuestas en formato JSON, código comentado o listas numeradas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AUTOEVALUACIÓN INTERACTIVA DE IA -->
    <section class="content-section">
      <div class="container max-w-3xl mx-auto">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">Preguntas Clave sobre IA en Software</h2>
        </div>

        <div class="glass-card" data-aos="fade-up">
          <n-collapse accordion default-expanded-names="1">
            <n-collapse-item title="1. ¿Puede la IA reemplazar completamente a los Ingenieros de Software?" name="1">
              <p class="text-slate-300">No. La IA potencia la productividad acelerando la escritura de boilerplate y la depuración, pero los ingenieros son indispensables para comprender requisitos de negocio, diseñar arquitecturas complejas y evaluar el impacto de seguridad.</p>
            </n-collapse-item>
            <n-collapse-item title="2. ¿Qué riesgos éticos implica usar código generado por IA?" name="2">
              <p class="text-slate-300">Posibles vulnerabilidades de seguridad no detectadas, violaciones de licencias de derechos de autor (copyright) y la falta de pruebas de casos de borde si el desarrollador no audita el código.</p>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         CTA FINAL
    ════════════════════════════════════════════════════════════ -->
    <section class="cta-section">
      <div class="cta-glow"></div>
      <div class="container cta-content" data-aos="zoom-in">
        <div class="section-chip chip-purple" style="margin-bottom: 1.5rem;">
          <n-icon :component="RocketOutline" size="14" />
          Siguiente paso
        </div>
        <h2 class="cta-title">
          ¿Listo para <span class="cta-gradient-text">codificar con IA</span>?
        </h2>
        <p class="cta-subtitle">Vuelve al temario y explora más módulos de Ingeniería de Software</p>
        <button class="cta-btn cta-btn-secondary" @click="$router.push('/isw')">
          <n-icon :component="ArrowBackOutline" size="18" />
          Volver al Temario
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NDataTable } from 'naive-ui'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import {
  SparklesOutline,
  ArrowBackOutline,
  GitCompareOutline,
  CodeSlashOutline,
  ChatbubbleEllipsesOutline,
  ChatboxEllipsesOutline,
  PersonOutline,
  SendOutline,
  RocketOutline
} from '@vicons/ionicons5'

const router = useRouter()
const gridCols = ref(3)
const userInput  = ref('')
const loading    = ref(false)
const messages   = ref([
  { role: 'assistant', content: '¡Hola! Soy Mistral 7B vía Hugging Face. Pregúntame sobre código, frameworks, librerías o cualquier concepto de desarrollo. (Ej: "Crea un endpoint en Spring Boot")' }
])
const messagesContainer = ref<HTMLElement | null>(null)

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const HF_TOKEN = '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'

const sendMessage = async () => {
  if (!userInput.value.trim() || loading.value) return
  const question = userInput.value
  messages.value.push({ role: 'user', content: question })
  userInput.value = ''
  loading.value   = true

  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: `[INST] Eres un experto en desarrollo full-stack. Responde en español, con código si aplica: ${question} [/INST]`,
          parameters: { max_new_tokens: 500, temperature: 0.7, return_full_text: false }
        })
      }
    )
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    const answer = data[0]?.generated_text?.trim() || 'Sin respuesta del modelo.'
    messages.value.push({ role: 'assistant', content: answer.replace(/\n/g, '<br>') })
  } catch (err: any) {
    messages.value.push({ role: 'assistant', content: `Error: ${err.message || 'Modelo ocupado'}. Intenta de nuevo.` })
  } finally {
    loading.value = false
    await nextTick()
    messagesContainer.value?.scrollTo({ top: messagesContainer.value.scrollHeight, behavior: 'smooth' })
  }
}

const hfNoKey = `# 100% GRATIS - SIN REGISTRO
# Usa el modelo público de Hugging Face
# No necesitas .env ni credenciales`

const vueHFCode = `const res = await fetch(
  'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
  {
    method: 'POST',
    headers: { 'Authorization': 'Bearer TU_TOKEN_HF' },
    body: JSON.stringify({
      inputs: '[INST] ' + prompt + ' [/INST]',
      parameters: { max_new_tokens: 500 }
    })
  }
)
const data = await res.json()
console.log(data[0].generated_text)`

const iaColumns = [
  { title: 'Herramienta',  key: 'name',  minWidth: 180 },
  { title: 'Tipo',         key: 'type' },
  { title: 'Precio',       key: 'price' },
  { title: 'Lenguajes',    key: 'langs' },
  { title: 'Cuándo Usar',  key: 'when',  minWidth: 200 }
]

const iaData = [
  { name: 'Hugging Face (Mistral 7B)', type: 'Personal',    price: '100% GRATIS',   langs: 'Todos',          when: 'Prototipos, demos sin clave' },
  { name: 'Ollama',                    type: 'Personal',    price: 'Gratis / Local', langs: 'Python / JS / Java', when: 'Offline, privacidad' },
  { name: 'GitHub Copilot',            type: 'Empresarial', price: '$10/mes',        langs: 'Python, JS, Java', when: 'IDE, autocompletado' },
  { name: 'Claude 3.5',                type: 'Empresarial', price: '$20/mes',        langs: 'Todos (API)',     when: 'Código complejo, análisis' }
]

const languages = [
  {
    name: 'Python',
    desc: 'Automatiza scripts, ML, pruebas unitarias con IA y análisis de datos.',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    icon: CodeSlashOutline,
    lang: 'python',
    example: `from langchain import LLMChain\nfrom openai import OpenAI\n\nllm = OpenAI(model="gpt-4o")\nchain = LLMChain(llm=llm)\nprint(chain.run("Genera test"))`,
    libs: [
      { name: 'LangChain', desc: 'Cadenas de prompts', dependency: 'pip install langchain' },
      { name: 'OpenAI',    desc: 'API GPT-4',          dependency: 'pip install openai' }
    ]
  },
  {
    name: 'JavaScript',
    desc: 'Chatbots web, componentes React con IA y machine learning en el navegador.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    icon: CodeSlashOutline,
    lang: 'javascript',
    example: `const { OpenAI } = require('openai');\nconst openai = new OpenAI();\nconst res = await openai.chat.completions.create({\n  messages: [{ role: 'user', content: '...' }]\n});\nconsole.log(res.choices[0].message);`,
    libs: [
      { name: 'LangChain.js',    desc: 'Cadenas de IA', dependency: 'npm i langchain' },
      { name: 'TensorFlow.js',   desc: 'ML en browser', dependency: 'npm i @tensorflow/tfjs' }
    ]
  },
  {
    name: 'Java Spring',
    desc: 'Microservicios inteligentes, autenticación con IA y endpoints de análisis.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: CodeSlashOutline,
    lang: 'java',
    example: `@RestController\npublic class AIController {\n  @Autowired OpenAIClient client;\n\n  @GetMapping("/ai")\n  public String generate() {\n    return client.complete("Explica microservicios");\n  }\n}`,
    libs: [
      { name: 'Spring AI',   desc: 'Integración LLMs',  dependency: 'spring-ai-openai-spring-boot-starter' },
      { name: 'LangChain4j', desc: 'Cadenas en Java',   dependency: 'io.langchain4j:langchain4j' }
    ]
  }
]

watch(() => window.innerWidth, (w) => {
  gridCols.value = w < 640 ? 1 : w < 1024 ? 2 : 3
}, { immediate: true })

onMounted(() => {
  AOS.init({ duration: 900, easing: 'ease-out-quart', once: true })
  if (typeof window !== 'undefined') window.hljs = hljs
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

:root {
  --clr-surface: rgba(255,255,255,0.055);
  --clr-border:  rgba(255,255,255,0.10);
  --clr-text:    #e2e8f0;
  --clr-muted:   #94a3b8;
  --clr-code-bg: #0d1117;
  --radius-lg:   20px;
  --radius-md:   14px;
  --radius-sm:   8px;
  --shadow-glow: 0 0 40px rgba(139,92,246,0.18);
  --shadow-card: 0 8px 32px rgba(0,0,0,0.35);
  --transition:  all 0.35s cubic-bezier(0.4,0,0.2,1);
}

.page-wrapper { min-height: 100vh; }

.container { max-width: 1250px; margin: 0 auto; padding: 0 1.5rem; }

.glass-card {
  background: var(--clr-surface);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
}

/* ─── HERO ─── */
.hero-section {
  height: 88vh;
  min-height: 620px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/assets/images/ai-bg.jpg') center/cover no-repeat;
  filter: brightness(0.4) contrast(1.1);
  transform: scale(1.04);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10,15,30,0.92), rgba(139,92,246,0.35), rgba(236,72,153,0.2));
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 55%, rgba(139,92,246,0.28), transparent 65%);
}

.hero-center {
  z-index: 2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content { max-width: 900px; padding: 0 1.5rem; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(139,92,246,0.18);
  border: 1px solid rgba(139,92,246,0.38);
  border-radius: 50px;
  padding: 7px 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #c4b5fd;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #a78bfa;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}

.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 1.2rem;
  display: block;
}

.hero-title-accent {
  display: block;
  background: linear-gradient(120deg, #a78bfa, #ec4899, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text {
  font-size: 1.15rem;
  color: rgba(226,232,240,0.85);
  line-height: 1.75;
  max-width: 720px;
  margin: 0 auto 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Inter', sans-serif;
  box-shadow: 0 10px 30px rgba(139,92,246,0.4);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(139,92,246,0.55);
}

.floating-shapes { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.shape { position: absolute; border-radius: 50%; background: rgba(139,92,246,0.14); filter: blur(50px); animation: float 7s ease-in-out infinite; }
.shape-1 { width: 240px; height: 240px; top: 15%; left: 5%;   animation-delay: 0s; }
.shape-2 { width: 180px; height: 180px; bottom: 20%; right: 8%; animation-delay: 2.5s; }
.shape-3 { width: 130px; height: 130px; top: 55%; left: 48%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-22px) rotate(6deg); }
}

/* ─── Secciones reutilizables ─── */
.content-section { padding: 88px 0; }
.section-alt { background: rgba(15,23,42,0.5); }

.section-header { text-align: center; margin-bottom: 2.5rem; }

.section-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(59,130,246,0.12);
  border: 1px solid rgba(59,130,246,0.28);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #93c5fd;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.chip-purple { background: rgba(139,92,246,0.12); border-color: rgba(139,92,246,0.28); color: #c4b5fd; }
.chip-green  { background: rgba(16,185,129,0.12); border-color: rgba(16,185,129,0.28); color: #6ee7b7; }
.chip-blue   { background: rgba(59,130,246,0.12); border-color: rgba(59,130,246,0.28); color: #93c5fd; }

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #a78bfa, #ec4899, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.75rem;
}

.section-subtitle { font-size: 1.05rem; color: var(--clr-muted); margin: 0; }

/* ─── CHATBOT ─── */
.chatbot-card { padding: 2rem; }

.chat-wrapper {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.chat-messages {
  height: 460px;
  overflow-y: auto;
  padding: 1.5rem;
  background: rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.1) transparent;
}

.message {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  max-width: 82%;
}

.message.assistant { align-self: flex-start; }
.message.user      { align-self: flex-end; flex-direction: row-reverse; }

.message-avatar {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.avatar-ai   { background: linear-gradient(135deg, #8b5cf6, #ec4899); }
.avatar-user { background: linear-gradient(135deg, #3b82f6, #06b6d4); }

.message-bubble {
  padding: 0.9rem 1.2rem;
  border-radius: 18px;
  font-size: 0.93rem;
  line-height: 1.6;
}

.message-bubble.assistant {
  background: rgba(139,92,246,0.18);
  border: 1px solid rgba(139,92,246,0.25);
  color: var(--clr-text);
  border-bottom-left-radius: 4px;
}

.message-bubble.user {
  background: linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.2));
  border: 1px solid rgba(59,130,246,0.3);
  color: var(--clr-text);
  border-bottom-right-radius: 4px;
}

.message-text code {
  background: rgba(0,0,0,0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85em;
}

/* Typing indicator */
.typing-indicator {
  display: flex;
  gap: 5px;
  padding: 4px 2px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c4b5fd;
  animation: typing 1.2s ease-in-out infinite;
}

.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30%            { transform: translateY(-8px); opacity: 1; }
}

/* Chat input bar */
.chat-input-bar {
  display: flex;
  gap: 10px;
  padding: 1rem;
  background: rgba(0,0,0,0.2);
  border-top: 1px solid var(--clr-border);
}

.chat-input { flex: 1; }

.chat-input :deep(.n-input__input-el) {
  background: rgba(255,255,255,0.06);
  color: var(--clr-text);
}

.send-btn {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  flex-shrink: 0;
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.08);
  box-shadow: 0 8px 20px rgba(139,92,246,0.4);
}

.send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Collapse de implementación */
.impl-collapse :deep(.n-collapse-item__header) {
  color: var(--clr-text);
  font-weight: 600;
}

/* Code blocks */
.code-block-wrapper { margin-bottom: 1.25rem; }

.code-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-muted);
  margin-bottom: 6px;
}

.code-block {
  background: var(--clr-code-bg);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-sm);
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.65;
  color: #e2e8f0;
}

.code-block code { white-space: pre; }

/* ─── IA Table ─── */
.ia-table-card { padding: 1.5rem; overflow: hidden; }

.ia-table :deep(.n-data-table-th) {
  background: rgba(139,92,246,0.1) !important;
  color: var(--clr-text) !important;
  font-weight: 600;
  border-bottom: 1px solid rgba(139,92,246,0.2) !important;
}

.ia-table :deep(.n-data-table-td) {
  color: var(--clr-muted) !important;
  border-bottom: 1px solid var(--clr-border) !important;
}

.ia-table :deep(.n-data-table-tr:hover .n-data-table-td) {
  background: rgba(255,255,255,0.03) !important;
}

/* ─── Lang Cards ─── */
.lang-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.lang-card {
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
}

.lang-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card);
}

.lang-accent-bar {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 3px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.lang-header {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 1rem;
}

.lang-icon {
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}

.lang-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-muted);
  display: block;
}

.lang-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--clr-text);
  margin: 4px 0 0;
}

.lang-desc {
  font-size: 0.92rem;
  color: var(--clr-muted);
  line-height: 1.7;
  margin: 0 0 1rem;
}

.lang-collapse :deep(.n-collapse-item__header) {
  color: var(--clr-text);
  font-weight: 600;
  font-size: 0.88rem;
}

.lib-list { display: flex; flex-direction: column; gap: 10px; }

.lib-item {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.lib-name  { font-weight: 700; color: var(--clr-text); font-size: 0.9rem; }
.lib-desc  { color: var(--clr-muted); font-size: 0.83rem; }
.lib-dep   {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.77rem;
  background: rgba(139,92,246,0.15);
  color: #c4b5fd;
  padding: 2px 8px;
  border-radius: 4px;
  margin-top: 2px;
  width: fit-content;
}

.lang-code {
  font-size: 0.78rem;
  line-height: 1.6;
  max-height: 220px;
  overflow-y: auto;
}

/* ─── CTA ─── */
.cta-section {
  position: relative;
  padding: 96px 0;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(10,15,30,0.8), rgba(20,10,40,0.95));
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(139,92,246,0.22), transparent 65%);
  pointer-events: none;
  filter: blur(20px);
}

.cta-content { position: relative; z-index: 1; }

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--clr-text);
  margin: 0 0 1rem;
}

.cta-gradient-text {
  background: linear-gradient(120deg, #a78bfa, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-subtitle { font-size: 1.05rem; color: var(--clr-muted); margin: 0 0 2rem; }

.cta-btn-secondary {
  background: rgba(139,92,246,0.15);
  border: 1px solid rgba(139,92,246,0.4);
  box-shadow: 0 8px 24px rgba(139,92,246,0.2);
}

.cta-btn-secondary:hover {
  background: rgba(139,92,246,0.28);
  border-color: #a78bfa;
  transform: translateY(-3px);
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .lang-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .hero-section    { height: 80vh; min-height: 520px; }
  .lang-grid       { grid-template-columns: 1fr; }
  .content-section { padding: 56px 0; }
  .chat-messages   { height: 360px; }
}
</style>