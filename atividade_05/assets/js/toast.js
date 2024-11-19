export const toastMessage = (message, color) => {
  return Toastify({
    text: message,
    duration: 2000,
    newWindow: true,
    className: "info",
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
