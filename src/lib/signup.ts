import {sha512} from "crypto-hash";
import axios from "axios";
import * as config from "../config.json";
import type {User} from "../types";

export async function signup(email: string, password: string, username: string): Promise<number> {
    let hashed_password = await sha512(password);
    let response = await axios.post(`${config.api_host}/signup`, {
        email: email,
        password: hashed_password,
        username: username,
        pfp: "",
        uuid: "",
        bio: ""
    } as User)
    return response.status;

}