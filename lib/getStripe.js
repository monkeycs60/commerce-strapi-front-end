import { loadStripe } from '@stripe/stripe-js';

let stripe;

export const getStripe = async () => {
    if (!stripe) {
        stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );
    }
    return stripe;
    };

