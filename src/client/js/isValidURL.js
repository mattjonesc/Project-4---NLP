function isValidURL(inputText) {
    const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}(:[0-9]{2,5})?(\/.*)?$/;
    return urlPattern.test(inputText);
  }

export { isValidURL }
