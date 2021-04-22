const profiles = ['admin'];

module.exports = function ([_, ...params]) {
  const profileName = params[0];
  if (!profileName) {
    return {
      response: "Comando PROFILE: forneça o nome do usuário.",
      error: "MISSING_ARGUMENT"
    };
  }
  if (!profiles.includes(profileName)) {
    return {
      response: "Comando PROFILE: usuário não encontrado.",
      error: "NOT_FOUND"
    };
  }

  return {
    response: `Entrou como '${profileName}'`
  };
}