export const errortypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const messages = {
    title: {
        valueMissing: "O campo título não pode estar vazio.",
        tooShort: "O título deve ter pelo menos 10 caracteres.",
    },
    category: {
        valueMissing: "Por favor, selecione uma categoria.",
    },
    photo: {
        valueMissing: "O campo foto não pode estar vazio.",
        typeMismatch: "Por favor, insira uma URL válida de uma imagem.",
        tooShort: "A URL da foto deve ter pelo menos 5 caracteres.",
    },
    link: {
        valueMissing: "O campo vídeo não pode estar vazio.",
        typeMismatch: "Por favor, insira uma URL válida.",
        tooShort: "A URL do vídeo deve ter pelo menos 5 caracteres.",
    },
    description: {
        valueMissing: "O campo descrição não pode estar vazio.",
        tooShort: "A descrição deve ter pelo menos 20 caracteres.",
    },
};
