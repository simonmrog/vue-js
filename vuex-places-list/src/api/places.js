import uuid from "uuid/v4";

const places = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = [
        {
          id: uuid(),
          title: "Cerro San Nicolás",
          location: "Ciudad Bolívar"
        },
        {
          id: uuid(),
          title: "Cerro Caramanta",
          location: "Andes"
        },
        {
          id: uuid(),
          title: "Cerro Santa Bárbara",
          location: "Peque"
        }
      ];
      resolve(data);
    }, 1000)
  });
};

export default places;
