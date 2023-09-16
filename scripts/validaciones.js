/**
 * Función que carga las reglas y validación del formulario de registro y login 
 * usando jQuery Validate.
 */
export const validarRegistro = () => {
    $("#form-registro").on('submit', e => {
        e.preventDefault();
      }).validate({
          rules: {
              username: {
                  required: true,
                  minlength: 3,
                  maxlength: 20
              },
              rut: {
                required: true,
                rut: true,
                rutdv: true
              },
              phone: {
                  required: false,
                  minlength: 9,
                  maxlength: 9
              },
              email: {
                  required: true,
                  email: true
              },
              password: {
                  required: true,
                  minlength: 8
              },
              password2: {
                  required: true,
                  minlength: 8,
                  equalTo: "#password"
              },
              region: {
                required: true
              },
              tyc: {
                  required: true
              }
          },
          messages: {
              username: {
                  required: "Debe ingresar un nombre",
                  minlength: "El nombre de usuario debe tener al menos 3 caracteres",
                  maxlength: "El nombre de usuario debe tener máximo 20 caracteres"
              },
              rut: {
                    required: "Debe ingresar un rut",
                    rut: "Formato: Sin puntos, con guión",
                    rutdv: "El dígito verificador no es válido"
              },
              phone: {
                  digits: true,
                  minlength: "El teléfono debe tener 9 dígitos",
                  maxlength: "El teléfono debe tener 9 dígitos"
              },
              email: {
                  required: "El email es requerido",
                  email: "Debe ingresar un email válido"
              },
              password: {
                  required: "La contraseña es requerida",
                  minlength: "La contraseña debe tener al menos 8 caracteres"
              },
              password2: {
                  required: "La contraseña es requerida",
                  minlength: "La contraseña debe tener al menos 8 caracteres",
                  equalTo: "Las contraseñas deben coincidir"
              },
              region: {
                required: "La región es requerida"
              },
              tyc: {
                  required: ""
              }
          },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            $('#toast-registro').addClass('show');
            form.reset();              
            console.log('Validado');
            console.log(data);
        },
        errorClass: 'is-invalid',
        errorPlacement: function (error, element) {
          const label = $("label[for='" + element.attr("id") + "']");
          label.text(error.text());
        },
        success: function (label, element) {
          var originalLabel = $("label[for='" + $(element).attr("id") + "']").data("original-text");
          $("label[for='" + $(element).attr("id") + "']").text(originalLabel);
        }
      });
}

export const validarLogin = () => {
    $("#form-login").on('submit', e => {
        e.preventDefault();
      }).validate({
          rules: {
              rut: {
                required: true,
                rut: true,
                rutdv: true
              },
              password: {
                  required: true,
                  minlength: 8
              },
          },
          messages: {
              rut: {
                    required: "Debe ingresar un rut",
                    rut: "Formato: Sin puntos, con guión (Ej: 12345678-9)",
                    rutdv: "El dígito verificador no es válido"
              },
              password: {
                  required: "La contraseña es requerida",
                  minlength: "La contraseña debe tener al menos 8 caracteres"
              },
          },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            $('#toast-registro').addClass('show');
            form.reset();              
            console.log('Validado');
            console.log(data);
        },
        errorClass: 'is-invalid',
        errorPlacement: function (error, element) {
          const label = $("label[for='" + element.attr("id") + "']");
          label.text(error.text());
        },
        success: function (label, element) {
          var originalLabel = $("label[for='" + $(element).attr("id") + "']").data("original-text");
          $("label[for='" + $(element).attr("id") + "']").text(originalLabel);
        }
      });
}