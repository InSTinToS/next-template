import { UsersResType } from "types/routes/users";
import { NextRouteType } from "types/next";

const user: NextRouteType<UsersResType> = async (req, res) => {
  switch (req.method) {
    case "GET":
      break;

    case "POST":
      break;

    case "PUT":
      break;

    case "PATCH":
      break;

    case "DELETE":
      break;

    default:
      res.json({
        success: false,
        message: "Unexpected default inside user switch",
      });
  }
};

export default user;
