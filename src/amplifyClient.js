import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

console.log("Loaded amplify outputs:", outputs);
Amplify.configure(outputs);