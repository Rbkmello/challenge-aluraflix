export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    // Validar título
    if (!trimmedFormData.title) {
        errors.title = 'O título é obrigatório.';
    } else if (trimmedFormData.title.length < 10) {
        errors.title = 'O título deve ter pelo menos 10 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'O título não pode ter mais de 200 caracteres.';
    }

    // Validar categoria
    if (!trimmedFormData.category) {
        errors.category = 'A categoria é obrigatória.';
    }

    // Validar URL da foto
    if (!trimmedFormData.photo) {
        errors.photo = 'A URL da foto é obrigatória.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'A URL da foto não é válida ou não é uma foto válida.';
    }

    // Validar URL do vídeo
    if (!trimmedFormData.link) {
        errors.link = 'A URL do vídeo é obrigatória.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'A URL do vídeo não é válida ou não é um vídeo válido.';
    }

    // Validar descrição
    if (!trimmedFormData.description) {
        errors.description = 'A descrição é obrigatória.';
    } else if (trimmedFormData.description.length < 20) {
        errors.description = 'A descrição deve ter pelo menos 20 caracteres.';
    } else if (trimmedFormData.description.length > 2000) {
        errors.description = 'A descrição não pode ter mais de 2000 caracteres.';
    }

    return errors;
};

// Validar URL da foto
const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

// Validar URL do vídeo
const isVideoURLValid = (url) => {
    const videoUrlPattern = /^(https:\/\/(?:www\.)?(youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[a-zA-Z0-9_-]+)/;
    const match = url.match(videoUrlPattern);
    if (match) {
        // Converte para URL embed, se necessário
        if (url.includes('watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be/')) {
            return url.replace('youtu.be/', 'www.youtube.com/embed/');
        }
        return url; // URL já está no formato embed
    }
    return false; // URL inválida
};
