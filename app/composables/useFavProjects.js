const repos = ref([
  {
    id: 1,
    name: "Мой сайт-портфолио",
    description: "Мой сайт-портфолио",
    homepage: "/",
    html_url: "https://github.com/danvitu/danvitu-portfoilio-nuxt",
  },
  {
    id: 2,
    name: "КПТ Ассистент (в разработке)",
    description: "Помощник npm",
  },
  {
    id: 3,
    name: "Weather App",
    description: "Прогноз погоды",
    homepage: "https://incandescent-conkies-33be79.netlify.app/",
    html_url: "https://github.com/danvitu/vue-weather-app",
  },
  {
    id: 4,
    name: "Vue Todos",
    description: "Менеджер задач",
    homepage: "https://splendid-croissant-781f7e.netlify.app/",
    html_url: "https://github.com/danvitu/vue-todos",
  },
])

export default function useFavProjects() {
  return { repos }
}
