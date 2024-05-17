import {sha512} from "crypto-hash";
import axios from "axios";
import * as config from "../config.json";
import type {LoginRequest} from "../types";
import Cookies from "js-cookie";

export async function log_in(email: string, password: string): Promise<boolean> {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    let hashed_password = await sha512(password);
    let user_token = await axios.post(`${config.api_host}/login`, {
        email: email,
        password: hashed_password
    } as LoginRequest)
    if (user_token.data as string != "") {
        console.log("Logged in successfully");
        Cookies.set("user_token", user_token.data as string, {expires: 30});
        return true;
    } else {
        console.log("Failed to log in");
        return false;
    }

}