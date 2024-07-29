const handleError = (error) => {
  const ERROR_CODE = 400;
  if (err.name === "NOT_FOUND") {
    return res.status(error.statusCode).send({
      status: false,
      message: "Elemetno no encontrado",
    });
  } else {
    return res.status(ERROR_CODE).send({
      status: false,
      message: "Error de petición",
    });
  }
};

module.exports = handleError;