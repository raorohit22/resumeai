
import { createRequestHandler } from "@react-router/serve";
import * as build from "../../build/server/index.js";

export const handler = createRequestHandler({ build });
