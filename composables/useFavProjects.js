const repos = ref([
  {
    id: 1,
    name: "КПТ Ассистент (в разработке)",
    description: "Заполнение опросника настроения и журнала настроения, используя метод КПТ",
    tags: ["Vue", "Nuxt", "Supabase"]
  },
  {
    id: 2,
    name: "Погодное приложение",
    description: "Узнать прогноз погоды в своем городе",
    homepage: "https://incandescent-conkies-33be79.netlify.app/",
    html_url: "https://github.com/danvitu/vue-weather-app",
    tags: ["Vue"]
  },
  {
    id: 3,
    name: "Vue Todos",
    description: "Менеджер задач",
    homepage: "https://splendid-croissant-781f7e.netlify.app/",
    html_url: "https://github.com/danvitu/vue-todos",
    tags: ["Vue"]
  },
])

export default function useFavProjects() {
  return { repos }
}
