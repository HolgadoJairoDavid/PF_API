import axios from "axios";

const captureOrder = async (token:any) => {
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

    // Capturamos la orden
    // Si el usuario paga, devuelve objeto con la confirmación
    const {data} = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
      {}, // no enviamos datos por el body
      {
        auth
      }
    )

    return data
}

export default captureOrder;
