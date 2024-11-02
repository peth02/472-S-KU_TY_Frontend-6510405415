'use server'

import { redirect } from "next/navigation";

export async function login(prevState, fromData) {
    // const email = fromData.get('email');
    // const password = fromData.get('password');
    // console.log(email, password);

    redirect('/all-events');
}

export async function logout(prevState, fromData) {
    redirect('/');
}

export async function profile(prevState, fromData) {
    redirect('/profile');
}