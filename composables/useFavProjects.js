const repos = ref([
  {
    id: 1,
    name: "КПТ Ассистент",
    description:
      "Заполнение опросника настроения и журнала настроения, используя метод КПТ",
    homepage: "https://nuxt-cbt-app.vercel.app",
    tags: ["Vue", "Nuxt", "Supabase"],
  },
  {
    id: 2,
    name: "Сайт-портфолио | danvitu",
    description: "",
    homepage: "https://danvitu.netlify.app/",
    html_url: "https://github.com/danvitu/danvitu-portfolio-nuxt",
    tags: ["Vue", "Nuxt"],
  },
  {
    id: 3,
    name: "Погодное приложение",
    description: "Узнать прогноз погоды в своем городе",
    homepage: "https://incandescent-conkies-33be79.netlify.app/",
    html_url: "https://github.com/danvitu/vue-weather-app",
    tags: ["Vue"],
  },
])

export default function useFavProjects() {
  return { repos }
}
