'use server'

import { redirect } from "next/navigation";

export async function login(prevState, fromData) {
    // const email = fromData.get('email');
    // const password = fromData.get('password');
    // console.log(email, password);

    redirect('/all-events');
}
