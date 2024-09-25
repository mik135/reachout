import Stripe from "stripe"
import { env } from "$env/dynamic/private"

const STRIPE_SECRET_KEY = "sk_test_51P94duBxwjDZ8RnAvpjxs3Tdrpwf06GSKg9Ooa42psSTZo9X2G67awfCl0EELfbxllaydpIaXTsUca6MCduRmzqc00K5cCWyDx"

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20"
})