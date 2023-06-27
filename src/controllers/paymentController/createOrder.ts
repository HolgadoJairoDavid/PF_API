import axios from "axios";

const createOrder = async ({name, donation, email} : {name: string, donation: string, email: string}) => {
  // Creamos el pedido
  
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: donation,
        },
        description: "Ayuda para pagar HENRY",
      },
    ],
    application_context: {
      brand_name: "ArepasCamilo",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: `https://pfapi-production.up.railway.app/payment/capture-order?name=${name}&email=${email}`,
      cancel_url: `https://pfapi-production.up.railway.app/payment/cancel-order`,
    },
  };

  // Generamos parámetros para enviar como campos de formulario
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");

  interface Auth {
    username: string;
    password: string;
  }

  const auth: Auth = {
    username:
      "AYehC4txdpVCRVlBWVZDzEkGneM0ACa0Gfq3kXCf0wgdMXhJovASPjxE9E5bFZNn5RScqAaZWuEjZSwO",
    password:
      "EJbIX4_V-KcVW2-0-W9RkaS3x9G8vK0oFwXQQNjdweN9uJLiOgzIcKxKgakV-PvF7e8hPci2tWvxHmZ1",
  };

  // Generando el token
  console.log(params);
  
  const {
    data: { access_token },
  } = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth,
    }
  );

  console.log(params);

  // Creando pedido con el token generado
  // Devuelve el pedido
  const { data } = await axios.post(` https://api-m.sandbox.paypal.com/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log(params);

  return data;
};

export default createOrder;
