class PostsService {
  getLatestPosts() {
    const latestPosts = [
      {
        title: "Ciberseguridad en el siglo XXI: Protegiendo tu información",
        imageSrc:
          "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        synopsis:
          "Explora las últimas tendencias en ciberseguridad y aprende a proteger tus datos en la era digital.",
      },
      {
        title: "Desarrollo web moderno: Principios esenciales",
        imageSrc:
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        synopsis:
          "Descubre los principios esenciales del desarrollo web moderno y cómo aplicarlos en tu próximo proyecto.",
      },
      {
        title: "Impacto de la inteligencia artificial en la medicina",
        imageSrc:
          "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        synopsis:
          "Descubre cómo la inteligencia artificial está revolucionando la industria de la salud y la medicina moderna.",
      },
    ];
    return latestPosts;
  }
  getRecommendedPosts() {
    const recommendedPosts = [
      {
        title: "Ciberseguridad en el siglo XXI: Protegiendo tu información",
        imageSrc: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        synopsis: "Explora las últimas tendencias en ciberseguridad y aprende a proteger tus datos en la era digital."
      },
      {
        title: "Desarrollo web moderno: Principios esenciales",
        imageSrc: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        synopsis: "Descubre los principios esenciales del desarrollo web moderno y cómo aplicarlos en tu próximo proyecto."
      },
      {
        title: "Impacto de la inteligencia artificial en la medicina",
        imageSrc: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        synopsis: "Descubre cómo la inteligencia artificial está revolucionando la industria de la salud y la medicina moderna."
      },
      {
        title: "Ciberseguridad en el siglo XXI: Protegiendo tu información",
        imageSrc: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        synopsis: "Explora las últimas tendencias en ciberseguridad y aprende a proteger tus datos en la era digital."
      },
      {
        title: "Desarrollo web moderno: Principios esenciales",
        imageSrc: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        synopsis: "Descubre los principios esenciales del desarrollo web moderno y cómo aplicarlos en tu próximo proyecto."
      },
      {
        title: "Desarrollo web moderno: Principios esenciales",
        imageSrc: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        synopsis: "Descubre los principios esenciales del desarrollo web moderno y cómo aplicarlos en tu próximo proyecto."
      }
    ];
    return recommendedPosts;
  }
}

module.exports = PostsService;