<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-10 px-4">
    <div class="max-w-6xl mx-auto"> <!-- Aumentado para dar más espacio -->
      <!-- Título -->
      <div class="text-center mb-8">
              <h2 class="section-title" data-aos="fade-up">
                Actividad de Git (En construcción)
              </h2>
        <p class="text-sm text-gray-500 mt-1">tdg-v2</p>
      </div>

      <!-- Tarjeta principal -->
      <n-card
        class="bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-2xl overflow-hidden"
        :bordered="false"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-6">
          
          <!-- COMMITS (IZQUIERDA) -->
          <div class="order-2 md:order-1">
            <div class="text-sm font-semibold text-gray-700 mb-3">Últimos commits</div>
            <n-spin :show="loadingCommits" size="small">
              <n-empty v-if="!loadingCommits && !commits.length" description="Sin commits" size="small" />
              <div v-else class="space-y-2 text-xs max-h-64 overflow-y-auto pr-1">
                <div
                  v-for="commit in commits.slice(0, 8)"
                  :key="commit.sha"
                  class="p-2 rounded hover:bg-gray-50 transition border border-transparent hover:border-gray-200"
                >
                  <a
                    :href="commit.html_url"
                    target="_blank"
                    class="block font-medium text-gray-800 hover:text-blue-600 line-clamp-1"
                  >
                    {{ commit.commit.message.split('\n')[0] }}
                  </a>
                  <div class="flex items-center gap-2 text-gray-500 mt-1">
                    <span class="truncate max-w-24">{{ commit.commit.author.name }}</span>
                    <span>•</span>
                    <span>{{ formatDate(commit.commit.author.date) }}</span>
                    <code class="ml-auto font-mono bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                      {{ commit.sha.slice(0, 7) }}
                    </code>
                  </div>
                </div>
              </div>
            </n-spin>
          </div>

          <!-- RAMAS (DERECHA) -->
          <div class="order-1 md:order-2">
            <div class="text-sm font-semibold text-gray-700 mb-3">Ramas activas</div>
            <n-spin :show="loadingBranches" size="small">
              <n-empty v-if="!loadingBranches && !branches.length" description="Sin ramas" size="small" />
              <div v-else class="space-y-2 text-xs">
                <div
                  v-for="(branch, i) in branches.slice(0, 8)"
                  :key="branch.name"
                  class="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50 transition"
                >
                  <span class="font-mono text-gray-700 truncate max-w-28">
                    {{ branch.name }}
                  </span>
                  <a
                    :href="`https://github.com/AlejaReyes0627/tdg-v2/tree/${branch.name}`"
                    target="_blank"
                    class="text-blue-500 hover:underline text-xs"
                  >
                    ver
                  </a>
                </div>
              </div>
            </n-spin>
          </div>

        </div>

        <!-- Footer -->
        <div class="text-center mt-4 pb-2">
          <n-text type="info" class="text-xs">
            Actualizado hace {{ refreshSeconds }}s
          </n-text>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NCard, NSpin, NEmpty, NText } from 'naive-ui'

const commits = ref([])
const branches = ref([])
const loadingCommits = ref(true)
const loadingBranches = ref(true)
const refreshSeconds = ref(0)

const REPO = 'AlejaReyes0627/tdg-v2'
const COMMITS_URL = `https://api.github.com/repos/${REPO}/commits?per_page=10`
const BRANCHES_URL = `https://api.github.com/repos/${REPO}/branches?per_page=20`

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now - date
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (days > 0) return `hace ${days}d`
  if (hours > 0) return `hace ${hours}h`
  if (minutes > 0) return `hace ${minutes}m`
  return 'ahora'
}

async function fetchData() {
  try {
    const [commitsRes, branchesRes] = await Promise.all([
      fetch(COMMITS_URL),
      fetch(BRANCHES_URL)
    ])
    commits.value = await commitsRes.json()
    branches.value = await branchesRes.json()
  } catch (err) {
    console.error('Error:', err)
  } finally {
    loadingCommits.value = false
    loadingBranches.value = false
  }
}

let intervalId, secondId

function startAutoRefresh() {
  fetchData()
  intervalId = setInterval(() => {
    refreshSeconds.value = 0
    fetchData()
  }, 60000)
  secondId = setInterval(() => refreshSeconds.value++, 1000)
}

onMounted(startAutoRefresh)
onUnmounted(() => {
  clearInterval(intervalId)
  clearInterval(secondId)
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.max-h-64::-webkit-scrollbar {
  width: 4px;
}
.max-h-64::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.4);
  border-radius: 2px;
}

/* Forzar que en pantallas grandes se vean lado a lado */
@media (min-width: 768px) {
  .grid-cols-1.md\:grid-cols-2 > div {
    min-width: 0; /* Evita desbordamiento en flex/grid */
  }
}
</style>