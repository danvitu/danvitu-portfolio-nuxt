const repos = ref([
  {
    id: 1,
    name: "Personal site",
    description: "Мой сайт-портфолио",
    homepage: "/",
    html_url: "https://github.com/danvitu/danvitu-portfoilio-nuxt",
  },
  {
    id: 2,
    name: "CBT Assistant",
    description: "КПТ Ассистент (в разработке)",
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
