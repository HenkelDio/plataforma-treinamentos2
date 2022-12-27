const cards = [
  {
    title: "NR 20",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/2021/11/equipamento-protecao-individual-epi-980x535.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, leo et consequat tincidunt, neque leo tempus mi, eget pretium justo nisi eu massa. Sed quis augue facilisis orci venenatis facilisis. Vivamus consectetur eget nulla eu elementum. Cras et rutrum leo. Cras id vestibulum purus. Phasellus vulputate fringilla nisi, sit amet feugiat erat elementum a. Phasellus tincidunt tristique pellentesque. Duis ultrices lectus eget nulla pharetra semper. Morbi id tellus sit amet leo hendrerit commodo eu ut dui. Vivamus non leo fringilla lorem aliquam ornare vel eget diam. Nunc rutrum, orci vel pharetra fermentum, ipsum ante sollicitudin neque, at fringilla leo tellus eget mauris. Sed efficitur mi magna, ac feugiat lectus tincidunt vitae.",
    example: "",
    price: "100,00"
  },
  {
    title: "NR 25",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/2020/09/novas-regras-epi.jpg",
    description: "Vivamus nulla augue, interdum vitae mattis in, vulputate vel ipsum. Donec vitae ex urna. Nunc condimentum sem ac urna dapibus congue. Sed risus libero, volutpat sit amet risus eget, dignissim vestibulum urna. Aenean ac nulla ultrices, egestas tortor sit amet, consectetur mi. Vivamus a ipsum id libero rutrum rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas massa a magna cursus, imperdiet rhoncus nulla porttitor. Morbi mi velit, tincidunt ac bibendum et, ornare non justo. Fusce sollicitudin malesuada consequat. Donec odio magna, porta in sodales ac, bibendum a ex. Nullam vitae tellus mi. Suspendisse viverra, eros quis tristique iaculis, lacus nisl blandit odio, rutrum faucibus arcu sapien et libero. Morbi ultricies quis ex id porta. Sed nec purus vel quam pulvinar vehicula eleifend eu lectus. Vestibulum semper, eros venenatis condimentum dignissim, augue orci efficitur turpis, non scelerisque turpis nunc a ipsum.",
    example: "",
    price: "100,00"
  },
  {
    title: "Combate Contra o Incêndio",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/aposentadoria-especial-reforma-1000x591.jpg",
    description: "Sed metus nibh, pharetra vitae sollicitudin quis, egestas vitae magna. Donec mattis, eros sed maximus sollicitudin, eros turpis pharetra nunc, a aliquet erat nisi at risus. Donec sed nisl eu ligula pellentesque vestibulum eget ac dolor. Vivamus consequat metus eros, eu vulputate tellus vulputate sit amet. Aliquam a vehicula libero. Sed nec accumsan elit, non elementum dui. Vestibulum dignissim lorem vitae neque mattis lacinia. Aliquam congue sollicitudin orci sed semper. Curabitur id nunc commodo, gravida mauris nec, laoreet lectus. Curabitur venenatis semper blandit. Ut venenatis justo eu leo mollis, id venenatis enim ornare. Suspendisse potenti. Cras id molestie metus, non consequat massa. Proin ullamcorper lorem erat, a dignissim magna bibendum rhoncus.",
    example: "",
    price: "130,00"
  },
  {
    title: "NR 20",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/2021/11/equipamento-protecao-individual-epi-980x535.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, leo et consequat tincidunt, neque leo tempus mi, eget pretium justo nisi eu massa. Sed quis augue facilisis orci venenatis facilisis. Vivamus consectetur eget nulla eu elementum. Cras et rutrum leo. Cras id vestibulum purus. Phasellus vulputate fringilla nisi, sit amet feugiat erat elementum a. Phasellus tincidunt tristique pellentesque. Duis ultrices lectus eget nulla pharetra semper. Morbi id tellus sit amet leo hendrerit commodo eu ut dui. Vivamus non leo fringilla lorem aliquam ornare vel eget diam. Nunc rutrum, orci vel pharetra fermentum, ipsum ante sollicitudin neque, at fringilla leo tellus eget mauris. Sed efficitur mi magna, ac feugiat lectus tincidunt vitae.",
    example: "",
    price: "1500,00"
  },
  {
    title: "NR 25",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/2020/09/novas-regras-epi.jpg",
    description: "Vivamus nulla augue, interdum vitae mattis in, vulputate vel ipsum. Donec vitae ex urna. Nunc condimentum sem ac urna dapibus congue. Sed risus libero, volutpat sit amet risus eget, dignissim vestibulum urna. Aenean ac nulla ultrices, egestas tortor sit amet, consectetur mi. Vivamus a ipsum id libero rutrum rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas massa a magna cursus, imperdiet rhoncus nulla porttitor. Morbi mi velit, tincidunt ac bibendum et, ornare non justo. Fusce sollicitudin malesuada consequat. Donec odio magna, porta in sodales ac, bibendum a ex. Nullam vitae tellus mi. Suspendisse viverra, eros quis tristique iaculis, lacus nisl blandit odio, rutrum faucibus arcu sapien et libero. Morbi ultricies quis ex id porta. Sed nec purus vel quam pulvinar vehicula eleifend eu lectus. Vestibulum semper, eros venenatis condimentum dignissim, augue orci efficitur turpis, non scelerisque turpis nunc a ipsum.",
    example: "",
    price: "1000,00"
  },
  {
    title: "Combate Contra o Incêndio",
    urlImage: "https://ingracio.adv.br/wp-content/uploads/aposentadoria-especial-reforma-1000x591.jpg",
    description: "Sed metus nibh, pharetra vitae sollicitudin quis, egestas vitae magna. Donec mattis, eros sed maximus sollicitudin, eros turpis pharetra nunc, a aliquet erat nisi at risus. Donec sed nisl eu ligula pellentesque vestibulum eget ac dolor. Vivamus consequat metus eros, eu vulputate tellus vulputate sit amet. Aliquam a vehicula libero. Sed nec accumsan elit, non elementum dui. Vestibulum dignissim lorem vitae neque mattis lacinia. Aliquam congue sollicitudin orci sed semper. Curabitur id nunc commodo, gravida mauris nec, laoreet lectus. Curabitur venenatis semper blandit. Ut venenatis justo eu leo mollis, id venenatis enim ornare. Suspendisse potenti. Cras id molestie metus, non consequat massa. Proin ullamcorper lorem erat, a dignissim magna bibendum rhoncus.",
    example: "",
    price: "150,00"
  }
  
]

module.exports = cards;